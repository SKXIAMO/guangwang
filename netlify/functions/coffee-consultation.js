const https = require("https")

const chatAddress = new URL("https://api.groq.com/openai/v1/chat/completions")
const availableModels = ["openai/gpt-oss-20b", "llama-3.3-70b-versatile"]

const coffeeGuide = [
  "You are a warm, practical coffee guide in a community app.",
  "Answer only questions about coffee, brewing, beans, roasting, cafés, equipment, or coffee culture.",
  "For subjects outside coffee, briefly say that you can help with coffee questions instead.",
  "Do not claim professional credentials. Give careful brewing guidance, ask one concise follow-up only when it is needed, and never invent sources or personal experience.",
  "Keep answers clear, friendly, and under 180 words unless the person asks for more detail."
].join(" ")

exports.handler = async function consultationHandler(event) {
  if (event.httpMethod !== "POST") {
    return reply(405, { message: "Use a POST request for a coffee consultation." })
  }

  if (!process.env.GROQ_API_KEY) {
    return reply(503, { message: "Coffee consultations are being prepared. Please try again shortly." })
  }

  let requestBody
  try {
    requestBody = JSON.parse(event.body || "{}")
  }
  catch {
    return reply(400, { message: "The coffee question could not be read." })
  }

  try {
    if (requestBody.kind === "opening") {
      const message = await requestCoffeeAnswer([
        { role: "system", content: coffeeGuide },
        {
          role: "user",
          content: "Welcome a coffee enthusiast in one sentence and invite them to ask a brewing or coffee question."
        }
      ])
      return reply(200, { message })
    }

    if (requestBody.kind === "reply") {
      const conversation = cleanConversation(requestBody.messages)
      if (conversation.length === 0 || conversation[conversation.length - 1].role !== "user") {
        return reply(400, { message: "Write a coffee question before sending." })
      }
      const message = await requestCoffeeAnswer([
        { role: "system", content: coffeeGuide },
        ...conversation
      ])
      return reply(200, { message })
    }

    return reply(400, { message: "This coffee consultation request is not supported." })
  }
  catch (error) {
    console.error("Coffee consultation request failed", error.message)
    return reply(error.statusCode || 502, {
      message: error.publicMessage || "The coffee guide is taking a short break. Please try again."
    })
  }
}

function cleanConversation(value) {
  if (!Array.isArray(value)) return []

  return value
    .slice(-12)
    .flatMap((item) => {
      if (!item || (item.role !== "user" && item.role !== "assistant")) return []
      if (typeof item.content !== "string") return []
      const content = item.content.trim().slice(0, 1200)
      return content ? [{ role: item.role, content }] : []
    })
}

async function requestCoffeeAnswer(messages) {
  let finalIssue

  for (const model of availableModels) {
    try {
      return await requestModel(model, messages)
    }
    catch (error) {
      finalIssue = error
      if (error.statusCode !== 400 && error.statusCode !== 404) throw error
    }
  }

  throw finalIssue || new Error("No coffee model is available.")
}

function requestModel(model, messages) {
  const payload = JSON.stringify({
    model,
    messages,
    temperature: 0.45,
    max_completion_tokens: 420
  })

  return new Promise((resolve, reject) => {
    const request = https.request({
      hostname: chatAddress.hostname,
      path: chatAddress.pathname,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      },
      timeout: 25_000
    }, (response) => {
      let body = ""
      response.setEncoding("utf8")
      response.on("data", (chunk) => { body += chunk })
      response.on("end", () => {
        let parsed
        try {
          parsed = JSON.parse(body || "{}")
        }
        catch {
          return reject(issue(502, "The coffee guide returned an unreadable answer."))
        }

        if ((response.statusCode || 500) < 200 || (response.statusCode || 500) >= 300) {
          const description = parsed.error && parsed.error.message ? parsed.error.message : "Coffee consultation could not be completed."
          return reject(issue(response.statusCode || 502, description))
        }

        const text = parsed.choices
          && parsed.choices[0]
          && parsed.choices[0].message
          && typeof parsed.choices[0].message.content === "string"
          ? parsed.choices[0].message.content.trim()
          : ""
        if (!text) return reject(issue(502, "The coffee guide did not return an answer."))
        resolve(text)
      })
    })

    request.on("timeout", () => request.destroy(issue(504, "The coffee guide took too long to respond.")))
    request.on("error", (error) => reject(error.statusCode ? error : issue(502, "Coffee consultation could not be completed.")))
    request.write(payload)
    request.end()
  })
}

function issue(statusCode, publicMessage) {
  const error = new Error(publicMessage)
  error.statusCode = statusCode
  error.publicMessage = publicMessage
  return error
}

function reply(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  }
}
