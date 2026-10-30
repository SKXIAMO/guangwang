<script setup lang="ts">
defineOptions({ name: 'PrivacyPage' })

const updatedOn = 'October 30, 2026'
const highlights = [
  ['What we collect', 'Details you provide, travel entries, media you choose to share, device tokens, and purchase records.'],
  ['Why we use it', 'To present the App, keep travel content available, deliver requested features, and maintain reliability.'],
  ['Your choices', 'You can decline optional permissions and manage photos, camera, microphone, and notifications in device settings.'],
]
</script>

<template>
  <main class="policy-page">
    <section class="policy-shell">
      <header class="policy-hero">
        <p class="eyebrow">TRALIX · TRAIL NOTES</p>
        <h1>Privacy Policy</h1>
        <p class="lede">This policy explains how Tralix handles information when you use the App to record and revisit your journeys.</p>
        <p class="updated">Last updated {{ updatedOn }}</p>
      </header>

      <section class="highlight-grid" aria-label="Privacy overview">
        <article v-for="([title, detail], index) in highlights" :key="title" class="highlight">
          <span class="highlight-number">0{{ index + 1 }}</span>
          <h2>{{ title }}</h2>
          <p>{{ detail }}</p>
        </article>
      </section>

      <article class="policy-copy">
        <section>
          <h2>1. Scope</h2>
          <p>This Privacy Policy applies to the Tralix mobile application and the services made available through it. It does not apply to independent websites or services that may be linked from the App. Those services have their own notices and practices.</p>
        </section>
        <section>
          <h2>2. Information we handle</h2>
          <h3>Information you choose to provide</h3>
          <p>Depending on the features you use, this can include profile details, travel notes, saved places, comments, photos, videos, audio recordings, and other material you decide to submit. Content that you choose to make available in the App may be visible to other App users according to the feature you use.</p>
          <h3>Service and device information</h3>
          <p>We process a device installation identifier so the App can retrieve the appropriate service data, an Apple Push Notification service token after you grant notification permission, and limited request information needed to keep the service reliable and secure. We do not use this information for cross-app advertising tracking.</p>
          <h3>Purchase information</h3>
          <p>If you make an in-app purchase, Apple processes the payment. Tralix may receive transaction and receipt information needed to verify the purchase and provide the related in-app item. We do not receive your full payment card details.</p>
        </section>
        <section>
          <h2>3. Permissions</h2>
          <p>Tralix requests permissions only when you use the related feature. You can change a permission later in iOS Settings.</p>
          <ul>
            <li><strong>Photos:</strong> to select images or videos for a travel entry.</li>
            <li><strong>Camera:</strong> to capture a photo or video you choose to add.</li>
            <li><strong>Microphone:</strong> to record audio when you choose an audio-recording feature.</li>
            <li><strong>Notifications:</strong> to deliver updates after you allow them.</li>
          </ul>
        </section>
        <section>
          <h2>4. How we use information</h2>
          <p>We use information to operate and improve the App, including to show your profile, travel records, saved destinations, and requested content; process media selection and uploads; verify App Store purchases; respond to support requests; protect users and the service; and diagnose errors.</p>
        </section>
        <section>
          <h2>5. When information is shared</h2>
          <p>We share information only as needed to provide the Service, comply with law, protect rights and safety, or support a corporate transaction. This may include providers that host or operate parts of the Service, media delivery providers, Apple when a purchase is verified, and professional advisers where necessary.</p>
          <p>If you choose a feature that makes travel content available to other users, the profile details and content connected with that feature may be displayed to those users. We do not sell personal information or use it for cross-app advertising tracking.</p>
        </section>
        <section>
          <h2>6. International processing and retention</h2>
          <p>Information may be processed in locations where Tralix or its service providers operate. Where applicable law requires safeguards for an international transfer, we use measures intended to provide an appropriate level of protection.</p>
          <p>We retain information for as long as reasonably needed to provide the Service, meet legal obligations, resolve disputes, enforce agreements, and maintain security. Retention can vary according to the type of information, your settings, and the feature used.</p>
        </section>
        <section>
          <h2>7. Security</h2>
          <p>We use reasonable technical and organisational safeguards appropriate to the nature of the information. No method of transmission or storage is completely secure, so please keep your device and account details safe and use only trusted networks and current App versions.</p>
        </section>
        <section>
          <h2>8. Your choices and requests</h2>
          <p>You can update information available in the App, manage optional device permissions, and stop using the Service at any time. Depending on applicable law, you may have rights to request access, correction, deletion, restriction, objection, or a portable copy of certain personal information. To make a request or ask a privacy question, use the support channel shown in the App or the contact information published on the Tralix website.</p>
        </section>
        <section>
          <h2>9. Children</h2>
          <p>Tralix is not directed to children under 13. If you believe a child has provided personal information to us, please contact us so we can review the request.</p>
        </section>
        <section>
          <h2>10. Changes to this policy</h2>
          <p>We may update this policy when the App or applicable requirements change. The revised version will be posted here with a new “Last updated” date.</p>
        </section>
        <section>
          <h2>11. Contact</h2>
          <p>For questions, reports, or notices about this Privacy Policy, use the support channel shown in the App or the contact information published on the Tralix website.</p>
        </section>
      </article>
    </section>
  </main>
</template>

<style scoped>
.policy-page { min-height: 100vh; color: #283129; background: #f6f2ea; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
.policy-shell { width: min(100% - 32px, 900px); margin: 0 auto; padding: 56px 0 88px; }
.policy-hero { padding: 22px 4px 42px; border-bottom: 1px solid #d8d1c4; }
.eyebrow { margin: 0 0 16px; color: #e16c44; font-size: 11px; font-weight: 800; letter-spacing: .16em; }
h1 { max-width: 680px; margin: 0; color: #1e3028; font-family: Georgia, "Times New Roman", serif; font-size: clamp(46px, 10vw, 76px); font-weight: 400; letter-spacing: -.045em; line-height: .98; }
.lede { max-width: 600px; margin: 24px 0 0; color: #5d675f; font-size: 18px; line-height: 1.6; }
.updated { margin: 24px 0 0; color: #8a8174; font-size: 13px; }
.highlight-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin: 34px 0 46px; background: #d8d1c4; border: 1px solid #d8d1c4; }
.highlight { min-height: 184px; padding: 24px; background: #fcfaf5; }
.highlight-number { display: block; color: #e16c44; font-size: 12px; font-weight: 800; letter-spacing: .1em; }
.highlight h2 { margin: 30px 0 8px; color: #21342b; font-size: 16px; }
.highlight p { margin: 0; color: #697269; font-size: 13px; line-height: 1.55; }
.policy-copy { display: grid; gap: 38px; max-width: 720px; padding: 0 4px; }
.policy-copy section { scroll-margin-top: 24px; }
.policy-copy h2 { margin: 0 0 13px; color: #20342a; font-family: Georgia, "Times New Roman", serif; font-size: 28px; font-weight: 400; letter-spacing: -.02em; }
.policy-copy h3 { margin: 22px 0 7px; color: #3f4e44; font-size: 15px; }
.policy-copy p, .policy-copy li { color: #5d665e; font-size: 15px; line-height: 1.78; }
.policy-copy p { margin: 0; }
.policy-copy ul { margin: 14px 0 0; padding-left: 20px; }
.policy-copy li + li { margin-top: 7px; }
.policy-copy strong { color: #35473b; }
@media (max-width: 640px) { .policy-shell { width: min(100% - 28px, 900px); padding-top: 38px; } .highlight-grid { grid-template-columns: 1fr; } .highlight { min-height: auto; padding: 20px; } .highlight h2 { margin-top: 18px; } .lede { font-size: 16px; } .policy-copy { gap: 32px; } .policy-copy h2 { font-size: 25px; } }
</style>
