<script setup lang="ts">
defineOptions({
  name: 'PrivacyPage',
})

const appName = 'HumChat'
const supportEmail = 'chenjian20040106@icloud.com'
const effectiveDate = '18 November 2026'
const deletionMailto = `mailto:${supportEmail}?subject=${encodeURIComponent('HumChat account deletion request')}&body=${encodeURIComponent('Please delete my HumChat account and the personal data associated with it. My account email or nickname is:')}`

const contents = [
  ['scope', '1. Scope and controller'],
  ['data', '2. Information we process'],
  ['permissions', '3. Device permissions'],
  ['use', '4. How we use information'],
  ['sharing', '5. When information is shared'],
  ['retention', '6. Retention and deletion'],
  ['rights', '7. Your choices and rights'],
  ['security', '8. Security and international transfers'],
  ['children', '9. Age requirement'],
  ['changes', '10. Changes and contact'],
]
</script>

<template>
  <main class="legal-page">
    <header class="hero">
      <div class="hero__inner">
        <a class="brand" href="/" aria-label="HumChat home">
          <span class="brand__mark">H</span>
          <span>{{ appName }}</span>
        </a>
        <p class="eyebrow">LEGAL CENTRE</p>
        <h1>Privacy Policy</h1>
        <p class="hero__summary">
          This Policy explains how {{ appName }} handles personal information when you use our Android application and related support services.
        </p>
        <p class="date">Effective date: {{ effectiveDate }} · Last updated: {{ effectiveDate }}</p>
      </div>
    </header>

    <article class="document">
      <aside class="quick-facts" aria-label="Privacy highlights">
        <div>
          <strong>Permissions</strong>
          <span>Microphone and media access are requested only when you use the related feature.</span>
        </div>
        <div>
          <strong>Payments</strong>
          <span>Google Play processes purchases. We do not receive your full payment-card details.</span>
        </div>
        <div>
          <strong>Control</strong>
          <span>You can request account and associated-data deletion through the route below.</span>
        </div>
      </aside>

      <nav class="toc" aria-label="Privacy Policy contents">
        <span>On this page</span>
        <a v-for="([id, label]) in contents" :key="id" :href="`#${id}`">{{ label }}</a>
      </nav>

      <section id="scope">
        <h2><span>1</span> Scope and controller</h2>
        <p>
          HumChat (referred to as “HumChat”, “we”, “us” or “our”) provides a music and social experience that includes account features, profile tools, messaging, audio recording and in-app purchases. This Privacy Policy applies to the HumChat Android app and our privacy and support pages.
        </p>
        <p>
          This Policy does not cover independent services that you access through links or services operated by third parties. Please review their policies before providing information to them.
        </p>
      </section>

      <section id="data">
        <h2><span>2</span> Information we process</h2>
        <p>We process only the information needed to provide, secure and improve the features you choose to use.</p>
        <div class="data-grid">
          <div class="data-card">
            <h3>Account and profile information</h3>
            <p>Email address, password credentials, nickname, date of birth, gender, profile image and profile details that you choose to submit. Passwords should never be sent to us through support email.</p>
          </div>
          <div class="data-card">
            <h3>Content you create</h3>
            <p>Messages, images, audio recordings, singing-room activity and other content you choose to create, upload or share through the Service. Shared content may be visible to the recipients or audience you select.</p>
          </div>
          <div class="data-card">
            <h3>Purchase records</h3>
            <p>The item purchased, purchase status, order reference and transaction time needed to provide in-app items. Google Play handles payment processing; we do not receive your complete payment-card or bank-account number.</p>
          </div>
          <div class="data-card">
            <h3>Technical information</h3>
            <p>Information necessary to run and secure the Service, such as app version, device model, operating-system version, language, network diagnostics and limited error logs. We do not collect precise location, contacts, call logs or SMS through the App.</p>
          </div>
        </div>
      </section>

      <section id="permissions">
        <h2><span>3</span> Device permissions</h2>
        <p>Android asks for permission at the time a feature needs it. You may decline or later revoke a permission in Android settings; the related feature may then be unavailable.</p>
        <ul class="checklist">
          <li><strong>Microphone.</strong> Used only when you choose to record or send audio, or use a singing feature that records sound.</li>
          <li><strong>Camera.</strong> Used only when you choose to take a photo for a profile or message.</li>
          <li><strong>Photos and media.</strong> Used only when you choose media from your device to upload or share.</li>
        </ul>
      </section>

      <section id="use">
        <h2><span>4</span> How we use information</h2>
        <ul class="checklist">
          <li>Provide account, profile, messaging, music and audio features that you request.</li>
          <li>Process and restore Google Play purchases, prevent fraud and resolve support issues.</li>
          <li>Maintain security, troubleshoot defects and improve reliability and accessibility.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
        <p>We do not sell personal information or use your microphone, camera or media content for behavioural advertising.</p>
      </section>

      <section id="sharing">
        <h2><span>5</span> When information is shared</h2>
        <p>We share personal information only in the following circumstances:</p>
        <ul class="checklist">
          <li><strong>With other users:</strong> when you choose to publish a profile detail, send a message, share media or participate in a social or singing feature.</li>
          <li><strong>With Google Play:</strong> to process in-app purchases under Google’s own privacy terms.</li>
          <li><strong>With service providers:</strong> where needed to host, secure, support or operate the Service, subject to contractual confidentiality and data-protection obligations.</li>
          <li><strong>For legal and safety reasons:</strong> when required by law, valid legal process, or to protect users, the public or our rights.</li>
        </ul>
      </section>

      <section id="retention">
        <h2><span>6</span> Retention and deletion</h2>
        <p>We retain information only for as long as it is needed for the purposes described in this Policy, including to provide the Service, meet legal obligations, resolve disputes and protect against abuse. Information stored only on your device can generally be removed by deleting the relevant content, clearing App storage or uninstalling the App.</p>
        <div class="deletion-card">
          <div>
            <p class="eyebrow">ACCOUNT DELETION</p>
            <h3>Request deletion of your HumChat account and associated personal data</h3>
            <p>Send a request from the email address associated with your account, and include your account email or nickname. We may ask for information needed to verify ownership before acting on the request. We will delete or de-identify associated personal data unless retention is required or permitted by applicable law, for example for fraud prevention, tax or transaction records.</p>
          </div>
          <a class="button" :href="deletionMailto">Request account deletion</a>
        </div>
        <p>Deleting the App alone does not cancel an active Google Play subscription. Subscriptions must be managed in your Google Play account settings.</p>
      </section>

      <section id="rights">
        <h2><span>7</span> Your choices and rights</h2>
        <p>Depending on where you live, you may have rights to request access to, correction of, deletion of, restriction of or a copy of your personal information, or to object to certain processing. You can update profile details in the App where available or contact us using the address below. We may need to verify your request and may have to retain limited information where required by law.</p>
      </section>

      <section id="security">
        <h2><span>8</span> Security and international transfers</h2>
        <p>We use reasonable administrative, technical and organisational safeguards designed to protect information from unauthorised access, alteration, loss or misuse. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>
        <p>The Service and its providers may process information in countries other than the country where you live. Where this occurs, we take steps appropriate to the transfer and applicable law.</p>
      </section>

      <section id="children">
        <h2><span>9</span> Age requirement</h2>
        <p>HumChat is intended for adults aged 18 and over. We do not knowingly collect personal information from children. If you believe a child has provided personal information to us, please contact us so we can take appropriate action.</p>
      </section>

      <section id="changes">
        <h2><span>10</span> Changes and contact</h2>
        <p>We may update this Policy when our practices or legal obligations change. We will post the revised version here and update the effective date. Material changes will be communicated through the App or another appropriate method where required.</p>
        <p>For privacy questions, rights requests or deletion requests, contact <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>
      </section>
    </article>
  </main>
</template>

<style scoped>
:global(*) { box-sizing: border-box; }
:global(html) { scroll-behavior: smooth; }
:global(body) { margin: 0; background: #f7f7fc; color: #222337; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }

.legal-page { min-height: 100vh; padding-bottom: 64px; }
.hero { overflow: hidden; background: radial-gradient(circle at 80% 10%, rgba(196, 255, 113, .28), transparent 28%), linear-gradient(135deg, #2d2161 0%, #7354d8 50%, #997cf5 100%); color: #fff; }
.hero__inner, .document { width: min(100% - 32px, 900px); margin: 0 auto; }
.hero__inner { padding: 30px 0 56px; }
.brand { display: inline-flex; align-items: center; gap: 9px; color: #fff; text-decoration: none; font-size: 18px; font-weight: 800; letter-spacing: -.02em; }
.brand__mark { display: grid; width: 28px; height: 28px; place-items: center; border-radius: 9px; background: #b7ff64; color: #382477; font-size: 15px; }
.eyebrow { margin: 42px 0 10px; color: #bfff77; font-size: 11px; font-weight: 800; letter-spacing: .13em; }
h1 { max-width: 680px; margin: 0; font-size: clamp(38px, 7vw, 60px); letter-spacing: -.055em; line-height: 1; }
.hero__summary { max-width: 650px; margin: 18px 0 12px; color: #f4f1ff; font-size: 17px; line-height: 1.65; }
.date { margin: 0; color: #ded7ff; font-size: 13px; }
.document { margin-top: -22px; }
.quick-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; overflow: hidden; border: 1px solid #e7e3f4; border-radius: 18px; background: #e7e3f4; box-shadow: 0 16px 36px rgba(44, 27, 101, .1); }
.quick-facts div { min-height: 132px; padding: 20px; background: #fff; }
.quick-facts strong { display: block; margin-bottom: 8px; color: #4c348f; font-size: 13px; }
.quick-facts span { color: #646579; font-size: 13px; line-height: 1.5; }
.toc { display: flex; flex-wrap: wrap; gap: 8px 18px; padding: 30px 2px 12px; font-size: 13px; }
.toc span { color: #737386; font-weight: 700; }
.toc a { color: #5b3ab7; text-decoration: none; }
section { padding: 34px 0; border-top: 1px solid #e4e3ec; scroll-margin-top: 18px; }
h2 { display: flex; align-items: center; gap: 12px; margin: 0 0 16px; color: #29233f; font-size: 24px; letter-spacing: -.025em; }
h2 span { display: grid; width: 28px; height: 28px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: #e7ddff; color: #5b3ab7; font-size: 13px; }
h3 { margin: 0 0 8px; color: #312950; font-size: 16px; }
p, li { color: #505166; font-size: 15px; line-height: 1.78; }
p { margin: 0 0 14px; }
a { color: #5d3cc2; font-weight: 650; }
.data-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 20px; }
.data-card { padding: 20px; border: 1px solid #e6e2f2; border-radius: 14px; background: #fff; }
.data-card p { margin: 0; font-size: 14px; }
.checklist { display: grid; gap: 10px; margin: 18px 0 0; padding: 0; list-style: none; }
.checklist li { position: relative; padding-left: 24px; }
.checklist li::before { position: absolute; top: .62em; left: 0; width: 8px; height: 8px; border-radius: 50%; background: #9ddd51; content: ""; }
.deletion-card { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin: 22px 0 16px; padding: 26px; border: 1px solid #cfc1ff; border-radius: 18px; background: linear-gradient(125deg, #f2efff, #fff); }
.deletion-card .eyebrow { margin: 0 0 8px; color: #6a48c6; }
.deletion-card h3 { font-size: 19px; }
.deletion-card p:last-child { margin-bottom: 0; }
.button { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; min-height: 44px; padding: 0 17px; border-radius: 10px; background: #5d3cc2; color: #fff; font-size: 14px; text-decoration: none; white-space: nowrap; }
.button:hover { background: #482b9d; }

@media (max-width: 650px) {
  .hero__inner, .document { width: min(100% - 24px, 900px); }
  .hero__inner { padding-bottom: 46px; }
  .quick-facts, .data-grid { grid-template-columns: 1fr; }
  .quick-facts div { min-height: auto; }
  .toc { gap: 8px 14px; }
  .deletion-card { align-items: flex-start; flex-direction: column; gap: 18px; }
  .button { width: 100%; }
  h2 { font-size: 21px; }
}
</style>
