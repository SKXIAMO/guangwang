<script setup lang="ts">
defineOptions({ name: 'UserTermsPage' })

const updatedOn = 'October 30, 2026'
const anchors = [
  ['service', 'Service'],
  ['account', 'Account'],
  ['content', 'Content'],
  ['conduct', 'Conduct'],
  ['purchases', 'Purchases'],
  ['legal', 'Legal'],
]
</script>

<template>
  <main class="terms-page">
    <section class="terms-shell">
      <header class="terms-hero">
        <p class="eyebrow">TRALIX · ON THE WAY</p>
        <h1>Terms of Use</h1>
        <p class="lede">These Terms govern your use of Tralix, a place to record journeys, discover destinations, and revisit the moments that matter.</p>
        <p class="updated">Last updated {{ updatedOn }}</p>
      </header>

      <nav class="terms-index" aria-label="Terms sections">
        <a v-for="([id, label]) in anchors" :key="id" :href="`#${id}`">{{ label }}</a>
      </nav>

      <article class="terms-copy">
        <section id="service">
          <span class="section-mark">01</span>
          <h2>Acceptance and service</h2>
          <p>These Terms of Use form an agreement between you and Tralix for your access to the Tralix mobile application, website, and related services (collectively, the “Service”). By downloading, accessing, or using the Service, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Service.</p>
          <p>Tralix provides travel-recording, destination-discovery, media, saved-place, and related features. Some features may require a compatible device, network connection, or additional permission. We may improve, modify, suspend, or discontinue a feature when reasonably necessary to operate, secure, or develop the Service.</p>
        </section>

        <section id="account">
          <span class="section-mark">02</span>
          <h2>Eligibility and account responsibility</h2>
          <p>You must be legally able to enter into this agreement where you live. If you use Tralix on behalf of an organisation, you confirm that you have authority to accept these Terms for that organisation.</p>
          <p>You are responsible for keeping your device and any account credentials secure, for the accuracy of information you provide, and for activity made through your account or device. Notify us through the support channel shown in the App if you believe there has been unauthorised use. Do not sell, rent, transfer, or allow another person to use your account in a way that bypasses these Terms.</p>
        </section>

        <section id="content">
          <span class="section-mark">03</span>
          <h2>Your travel content</h2>
          <p>You retain ownership of text, photographs, videos, audio, comments, saved places, and other material you create or submit through Tralix (“Your Content”). You give Tralix a non-exclusive, worldwide, royalty-free licence to host, reproduce, process, adapt for technical delivery, display, and distribute Your Content only as needed to operate, improve, and provide the Service and the sharing choices you make.</p>
          <p>This licence ends when Your Content is removed from the Service, except to the extent content has already been shared with others, retained in routine backups for a limited period, or must be retained to meet legal, security, or dispute-resolution obligations.</p>
          <p>You confirm that you have all rights, permissions, and consents needed for Your Content, including from people who appear in it. You are responsible for respecting privacy, image rights, copyright, location sensitivity, and local rules at destinations you record.</p>
        </section>

        <section id="conduct">
          <span class="section-mark">04</span>
          <h2>Respectful and lawful use</h2>
          <p>You may not use Tralix, or submit content to Tralix, in a way that:</p>
          <ul>
            <li>violates applicable law, infringes another person’s rights, or impersonates another person;</li>
            <li>contains threats, harassment, hateful conduct, sexual exploitation, content harmful to minors, or unlawful violence;</li>
            <li>discloses another person’s private information without permission;</li>
            <li>contains malware, spam, deceptive links, unauthorised advertising, or fraud;</li>
            <li>scrapes, reverse engineers, interferes with, or attempts to compromise the Service; or</li>
            <li>uses the Service to mislead users about a destination, experience, or commercial relationship.</li>
          </ul>
          <p>We may review reported material and may remove content, restrict features, or suspend access where reasonably necessary to protect users, comply with law, preserve the Service, or enforce these Terms. We do not guarantee that all user content will be reviewed before it is available.</p>
        </section>

        <section>
          <span class="section-mark">05</span>
          <h2>Third-party content and destinations</h2>
          <p>Tralix may show travel information, media, or links supplied by users or third parties. Those materials are the responsibility of their respective providers and may be subject to their own terms and privacy practices. A destination, route, suggestion, or link is not a guarantee of availability, safety, legality, accuracy, or suitability. Make independent travel decisions and follow local laws and safety guidance.</p>
        </section>

        <section id="purchases">
          <span class="section-mark">06</span>
          <h2>In-app purchases</h2>
          <p>Where Tralix offers digital items, purchases on iOS are made through Apple’s in-app purchase system. Prices, taxes, billing, refunds, and payment handling are subject to Apple’s applicable terms and policies. An item becomes available only after the related transaction has been confirmed. We do not ask you to send payment-card information directly to Tralix.</p>
        </section>

        <section>
          <span class="section-mark">07</span>
          <h2>Intellectual property</h2>
          <p>Tralix, its design, software, marks, and Service materials are owned by or licensed to Tralix and are protected by applicable intellectual-property laws. Subject to these Terms, we grant you a limited, personal, non-transferable, revocable licence to use the Service for its intended purpose. No other rights are granted by implication or otherwise.</p>
        </section>

        <section id="legal">
          <span class="section-mark">08</span>
          <h2>Disclaimers and limits</h2>
          <p>The Service is provided on an “as available” basis. To the extent permitted by law, Tralix does not make warranties that the Service will always be uninterrupted, error-free, secure, or suitable for every purpose. Nothing in these Terms excludes rights that cannot be excluded under applicable consumer law.</p>
          <p>To the extent permitted by law, Tralix is not liable for indirect, incidental, special, consequential, or punitive loss, or for loss resulting from user content, third-party services, travel decisions, network availability, or events outside our reasonable control.</p>
        </section>

        <section>
          <span class="section-mark">09</span>
          <h2>Changes and termination</h2>
          <p>We may update these Terms when the Service or legal requirements change. The current version will be posted here with a revised date. If you continue to use the Service after an update takes effect, you accept the updated Terms. You may stop using the Service at any time. We may suspend or end access where required by law, for security reasons, or for a material breach of these Terms.</p>
        </section>

        <section>
          <span class="section-mark">10</span>
          <h2>Contact</h2>
          <p>For questions, reports, or notices about these Terms, use the support channel shown in the App or the contact information published on the Tralix website.</p>
        </section>
      </article>
    </section>
  </main>
</template>

<style scoped>
.terms-page { min-height: 100vh; color: #f5efe4; background: #24332c; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
.terms-shell { width: min(100% - 32px, 900px); margin: 0 auto; padding: 56px 0 88px; }
.terms-hero { padding: 22px 4px 42px; border-bottom: 1px solid rgba(245, 239, 228, .22); }
.eyebrow { margin: 0 0 16px; color: #f48a5e; font-size: 11px; font-weight: 800; letter-spacing: .16em; }
h1 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(46px, 10vw, 76px); font-weight: 400; letter-spacing: -.05em; line-height: .98; }
.lede { max-width: 600px; margin: 24px 0 0; color: #d3d8cb; font-size: 18px; line-height: 1.6; }
.updated { margin: 24px 0 0; color: #9ea99c; font-size: 13px; }
.terms-index { display: flex; flex-wrap: wrap; gap: 9px; padding: 25px 0 42px; }
.terms-index a { padding: 8px 11px; border: 1px solid rgba(245, 239, 228, .2); border-radius: 999px; color: #d9ded4; font-size: 12px; text-decoration: none; transition: .2s ease; }
.terms-index a:hover { border-color: #f48a5e; color: #fff7ec; }
.terms-copy { display: grid; gap: 46px; max-width: 720px; padding: 0 4px; }
.terms-copy section { position: relative; padding-left: 56px; scroll-margin-top: 24px; }
.section-mark { position: absolute; top: 7px; left: 0; color: #f48a5e; font-size: 12px; font-weight: 800; letter-spacing: .1em; }
.terms-copy h2 { margin: 0 0 13px; color: #fffaf1; font-family: Georgia, "Times New Roman", serif; font-size: 29px; font-weight: 400; letter-spacing: -.02em; }
.terms-copy p, .terms-copy li { color: #c5cec3; font-size: 15px; line-height: 1.8; }
.terms-copy p { margin: 0; }
.terms-copy p + p { margin-top: 15px; }
.terms-copy ul { margin: 14px 0; padding-left: 20px; }
.terms-copy li + li { margin-top: 7px; }
@media (max-width: 640px) { .terms-shell { width: min(100% - 28px, 900px); padding-top: 38px; } .lede { font-size: 16px; } .terms-copy { gap: 34px; } .terms-copy section { padding-left: 0; padding-top: 27px; } .section-mark { top: 0; } .terms-copy h2 { font-size: 25px; } }
</style>
