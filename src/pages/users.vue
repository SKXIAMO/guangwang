<script setup lang="ts">
defineOptions({
  name: 'UserAgreementPage',
})

const appName = 'HumChat'
const supportEmail = 'lanniekova@gmail.com'
const effectiveDate = '18 November 2026'

const contents = [
  ['acceptance', '1. Acceptance and eligibility'],
  ['account', '2. Your account'],
  ['service', '3. The Service'],
  ['conduct', '4. Community rules'],
  ['content', '5. Your content and safety'],
  ['purchases', '6. Purchases and virtual items'],
  ['third-parties', '7. Intellectual property and third parties'],
  ['suspension', '8. Suspension and termination'],
  ['disclaimers', '9. Disclaimers and liability'],
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
        <h1>Terms of Service</h1>
        <p class="hero__summary">
          These Terms set out the rules for using {{ appName }} and participating safely in our music and social community.
        </p>
        <p class="date">Effective date: {{ effectiveDate }} · Last updated: {{ effectiveDate }}</p>
      </div>
    </header>

    <article class="document">
      <aside class="quick-facts" aria-label="Terms highlights">
        <div>
          <strong>18+ community</strong>
          <span>HumChat is intended for adults. Be respectful and do not endanger or exploit others.</span>
        </div>
        <div>
          <strong>Your content</strong>
          <span>You keep ownership of content you create, while granting the limited licence needed to run the Service.</span>
        </div>
        <div>
          <strong>Your choices</strong>
          <span>Account deletion requests and privacy controls are explained in the Privacy Policy.</span>
        </div>
      </aside>

      <nav class="toc" aria-label="Terms of Service contents">
        <span>On this page</span>
        <a v-for="([id, label]) in contents" :key="id" :href="`#${id}`">{{ label }}</a>
      </nav>

      <section id="acceptance">
        <h2><span>1</span> Acceptance and eligibility</h2>
        <p>These Terms of Service (“Terms”) are an agreement between you and HumChat (“HumChat”, “we”, “us” or “our”). By downloading, creating an account for, accessing or using the HumChat Android app and related services (collectively, the “Service”), you agree to these Terms and our <a href="/privacy">Privacy Policy</a>.</p>
        <p>You must be at least 18 years old and legally able to enter into this agreement. Do not use the Service if you do not agree to these Terms or cannot meet these requirements.</p>
      </section>

      <section id="account">
        <h2><span>2</span> Your account</h2>
        <ul class="checklist">
          <li>Provide accurate information and keep your account details up to date.</li>
          <li>Keep your password and device secure. Do not share account credentials or use another person’s account without permission.</li>
          <li>You are responsible for activity performed through your account unless you promptly report unauthorised access to us.</li>
          <li>You may request deletion of your account and associated data through the route described in our <a href="/privacy#retention">Privacy Policy</a>.</li>
        </ul>
      </section>

      <section id="service">
        <h2><span>3</span> The Service</h2>
        <p>HumChat provides music, profile, social, messaging, audio and optional purchase features. Features may vary by region, device, app version and availability. We may update, improve, suspend or discontinue a feature when reasonably necessary for security, legal compliance, maintenance or product development.</p>
        <p>The Service is not an emergency service. Do not rely on HumChat for emergency assistance or safety-critical communications.</p>
      </section>

      <section id="conduct">
        <h2><span>4</span> Community rules</h2>
        <p>Help keep HumChat respectful and safe. You must not use the Service to:</p>
        <ul class="checklist">
          <li>Break applicable law, infringe another person’s rights, impersonate another person or misrepresent your identity.</li>
          <li>Threaten, harass, exploit, stalk, bully, discriminate against or otherwise harm another person.</li>
          <li>Post or transmit unlawful, sexually exploitative, hateful, violent, fraudulent, defamatory or otherwise harmful content.</li>
          <li>Share another person’s private information, image, voice or content without a lawful basis and, where required, their permission.</li>
          <li>Send spam, malware, unauthorised advertising, deceptive links or attempt to interfere with the Service, its security or other users’ access.</li>
          <li>Use the Service for commercial solicitation or promotion unless we have expressly authorised it in writing.</li>
        </ul>
      </section>

      <section id="content">
        <h2><span>5</span> Your content and safety</h2>
        <p>You remain responsible for the text, images, recordings, messages and other content you create or share (“User Content”). You retain ownership of your User Content. To operate, host, reproduce, display and transmit it solely for the Service, you grant HumChat a non-exclusive, worldwide, royalty-free, transferable and sublicensable licence for the duration that your User Content is available through the Service.</p>
        <p>We may remove or limit access to User Content, or take action on an account, when we reasonably believe it violates these Terms, applicable law or user safety. We may also preserve or disclose information when required to investigate abuse, protect people or comply with legal obligations.</p>
        <div class="notice">
          <strong>Report safety concerns.</strong>
          <span>Use the reporting tools available in the App where provided, or contact <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>. Do not share sensitive account credentials in a report.</span>
        </div>
      </section>

      <section id="purchases">
        <h2><span>6</span> Purchases and virtual items</h2>
        <p>Some optional features or virtual items may be offered through Google Play. Prices, item descriptions and availability are shown before you confirm a purchase. Google Play processes payment and its terms and policies apply to that transaction.</p>
        <ul class="checklist">
          <li>Virtual items are licensed for personal use in the Service only; they have no cash value and may not be sold, transferred, exchanged or redeemed for money except where required by law.</li>
          <li>Purchases are generally final, subject to Google Play’s refund process and mandatory consumer-protection rights that apply where you live.</li>
          <li>If you purchase a recurring subscription in a future version of the Service, you can manage or cancel renewal through your Google Play account settings. Cancellation affects future renewals and does not normally refund the current billing period unless required by law or Google Play policy.</li>
        </ul>
      </section>

      <section id="third-parties">
        <h2><span>7</span> Intellectual property and third parties</h2>
        <p>The Service, including its software, design, branding and content supplied by HumChat, is protected by intellectual-property laws. Except for the limited right to use the Service under these Terms, we retain all rights in it. Do not copy, modify, reverse engineer, distribute or exploit the Service except where applicable law permits it.</p>
        <p>The Service may include links to or integrations with third-party products. Those parties control their own products and policies; we are not responsible for them. Your use of third-party services is governed by their terms and privacy policies.</p>
      </section>

      <section id="suspension">
        <h2><span>8</span> Suspension and termination</h2>
        <p>You may stop using the Service at any time. We may suspend or terminate access, remove content or limit features when we reasonably believe it is necessary to address a Terms violation, security risk, fraud, legal obligation or harm to users or the Service. Where appropriate, we will provide notice and an opportunity to appeal or resolve the issue.</p>
        <p>Termination does not affect provisions that by their nature should continue, including ownership, disclaimers, limitations of liability and dispute-related provisions.</p>
      </section>

      <section id="disclaimers">
        <h2><span>9</span> Disclaimers and liability</h2>
        <p>The Service is provided on an “as available” basis. To the maximum extent permitted by law, we do not guarantee that it will always be uninterrupted, secure or error-free. We do not control User Content or interactions between users and are not responsible for decisions made or actions taken by users.</p>
        <p>Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law. Subject to that rule, HumChat is not liable for indirect, incidental, special, consequential or punitive damages, or loss of profits, data, goodwill or business opportunity arising from use of the Service.</p>
      </section>

      <section id="changes">
        <h2><span>10</span> Changes and contact</h2>
        <p>We may revise these Terms when the Service, our practices or the law changes. We will publish the updated version and revise the effective date. If a material change requires notice under applicable law, we will provide it through the App or another appropriate method. Continued use after the effective date means you accept the updated Terms to the extent permitted by law.</p>
        <p>For questions about these Terms, contact <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>
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
.checklist { display: grid; gap: 10px; margin: 18px 0 0; padding: 0; list-style: none; }
.checklist li { position: relative; padding-left: 24px; }
.checklist li::before { position: absolute; top: .62em; left: 0; width: 8px; height: 8px; border-radius: 50%; background: #9ddd51; content: ""; }
.notice { display: grid; gap: 6px; margin-top: 22px; padding: 20px; border-left: 4px solid #9ddd51; border-radius: 0 12px 12px 0; background: #f4ffea; }
.notice strong { color: #345e13; }
.notice span { color: #4b5a41; font-size: 14px; line-height: 1.6; }

@media (max-width: 650px) {
  .hero__inner, .document { width: min(100% - 24px, 900px); }
  .hero__inner { padding-bottom: 46px; }
  .quick-facts { grid-template-columns: 1fr; }
  .quick-facts div { min-height: auto; }
  .toc { gap: 8px 14px; }
  h2 { font-size: 21px; }
}
</style>
