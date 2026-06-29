import React, { useEffect, useRef, useState } from 'react'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUIStore } from '@/stores/ui'
import { aiChat } from '@/utils/ai'
import { decryptAES } from '@/utils/aes'
import NavBar from '@/components/NavBar'

import aiusermodel from '@/assets/aiusermodel.png'
import aichatmodel from '@/assets/aichatmodel.png'
import aiAvatar from '@/assets/aiavator.png'
import sendIcon from '@/assets/commentsend.png'

import './index.css'

export default function AiChat() {
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const ui = useUIStore()

  const [messages] = useState([
    'How to start working out?',
    'How often to exercise?',
    'How long per workout?',
  ])
  const [chatInput, setChatInput] = useState('')
  const listRef = useRef(null)

  const [bottomItems, setBottomItems] = useState([
    {
      sendId: '0',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      message: 'Hi there! I’m Kico, your AI buddy.',
    },
  ])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [bottomItems.length])

  async function requestAI(text) {
    if (ui.loading) return
    ui.showLoading()
    try {
      const res = await aiChat(text)
      ui.hideLoading()

      if (res.data.code === '0000') {
        const data = JSON.parse(decryptAES(res.data.result))
        const aiMessage = data?.output?.choices?.[0]?.message?.content || ''

        setBottomItems((prev) => [
          ...prev,
          {
            sendId: '0',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            message: aiMessage,
          },
        ])
      }
    } catch {
      ui.hideLoading()
    }
  }

  function pushUserMessage(text) {
    setBottomItems((prev) => [
      ...prev,
      {
        sendId: currentUser.userId,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        message: text,
      },
    ])
  }

  async function sendMessage() {
    const text = chatInput.trim()
    if (!text) return
    pushUserMessage(text)
    setChatInput('')
    await requestAI(text)
  }

  return (
    <div className="ai-chat">
      <NavBar>
        <p className="ai-chat-title">Eiway AI</p>
      </NavBar>
      <div className="ai-chat-model" style={{ backgroundImage: `url(${aichatmodel})` }} />
      {/* <div className="ai-chat-user" style={{ backgroundImage: `url(${aiusermodel})` }} /> */}
      {/* <div className="ai-text-title">
        AI Photo
        <br />
        Inspiration
      </div> */}
      <div className="ai-chat-quick">
        {messages.map((item, i) => (
          <div key={i} className="quick-item" onClick={() => sendMessage(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="ai-chat-panel">
        <div ref={listRef} className="ai-chat-list">
          {bottomItems.map((item, i) => (
            <div key={i} className="chat-item">
              <div className="chat-time">{item.time}</div>

              {item.sendId === '0' ? (
                <div className="chat-left">
                  <img src={aiAvatar} className="avatar" />
                  <div className="bubble ai">{item.message}</div>
                </div>
              ) : (
                <div className="chat-right">
                  <div className="bubble me">{item.message}</div>
                  <div className="avatar-wrap">
                    <img src={currentUser.avatar} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="ai-chat-input">
        <input
          name="aiinput"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Say something"
        />
        <button type="button" className="chat-send-btn" onClick={sendMessage}>
          <img src={sendIcon} alt="send" />
        </button>
      </div>
    </div>
  )
}
