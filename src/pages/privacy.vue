<script setup lang="ts">
defineOptions({
  name: 'PrivacyPage',
})

const appName = 'Umiya Yoga'
const lastUpdated = '30 October 2026'
const contactEmail = 'weijingyi2008730@icloud.com'

const sections = [
  {
    id: 'overview',
    number: '01',
    title: 'Overview',
    paragraphs: [
      `${appName} is a community for reflection, movement and connection. This Privacy Policy explains what information we handle when you use the app, why we handle it and the choices available to you.`,
      'Please do not use the service if you do not agree with this Policy. This Policy should be read together with our User Agreement.',
    ],
  },
  {
    id: 'information',
    number: '02',
    title: 'Information we handle',
    paragraphs: [
      'We only ask for information that is relevant to the feature you choose to use. Depending on your activity, this may include:',
    ],
    items: [
      'Account and profile details, such as your email address, display name, profile image and “About me” text.',
      'Community content you choose to provide, including posts, comments, direct messages, reports and any photos or videos you attach.',
      'Purchase records needed to deliver and prevent duplicate delivery of in-app virtual credits. Payments are processed by Apple through the App Store; we do not receive your full payment-card details.',
      'Limited technical information needed to operate the app, such as an installation identifier, app version and diagnostic information when a feature fails.',
    ],
  },
  {
    id: 'permissions',
    number: '03',
    title: 'Device permissions',
    paragraphs: [
      'The app asks for a device permission only when you start the related feature. You can decline or later change a permission in your device settings.',
    ],
    items: [
      'Photos: to choose an avatar or attach photos to a post or message.',
      'Camera: to take an avatar or create visual content.',
      'Microphone: only when you choose a feature that records or transmits audio, such as a video conversation.',
    ],
  },
  {
    id: 'use',
    number: '04',
    title: 'How we use information',
    paragraphs: [
      'We use information to provide the account and community features you request; display your profile and content to the audience you select; deliver virtual credits you purchase; maintain security; investigate reports; and improve reliability.',
      'If you use the AI Yoga Assistant, the text you send is processed to generate a reply. Do not include medical, financial or other highly sensitive information in your prompts. The assistant provides general wellness information and is not medical advice.',
    ],
  },
  {
    id: 'sharing',
    number: '05',
    title: 'Sharing and visibility',
    paragraphs: [
      'Your display name, avatar and community content may be visible to other users according to the feature you use. Direct messages are intended for their participants, but users should avoid sharing information they would not want another person to retain or forward.',
      'We do not sell personal information. We disclose information only when needed to provide a service you request, comply with law, protect users and the service, or respond to a valid legal process.',
    ],
  },
  {
    id: 'storage',
    number: '06',
    title: 'Storage and retention',
    paragraphs: [
      'The current app release stores core account, profile and community data on your device. Some features, including the AI Yoga Assistant, require a network service to provide a response.',
      'We retain information only for as long as needed for the purpose described above, to resolve disputes, prevent abuse or meet legal obligations. If we introduce account synchronisation or other hosted storage in a later release, we will update this Policy before transferring the relevant data.',
    ],
  },
  {
    id: 'choices',
    number: '07',
    title: 'Your choices',
    paragraphs: [
      'You can update profile information in the app, remove content you created where the feature provides that option, manage device permissions in system settings, and use the in-app account-deletion option where available.',
      'You may also contact us to ask about access, correction or deletion requests. We may need to verify your request and may keep limited information when required for security, fraud prevention or legal compliance.',
    ],
  },
  {
    id: 'age',
    number: '08',
    title: 'Age and safety',
    paragraphs: [
      `${appName} is intended for adults aged 18 or older. We do not knowingly collect personal information from children. If you believe a child has provided information to us, contact us so that we can review the request.`,
      'Community features are moderated through reporting, blocking and other safety controls. Please report content or conduct that violates the User Agreement.',
    ],
  },
  {
    id: 'changes',
    number: '09',
    title: 'Changes and contact',
    paragraphs: [
      'We may update this Policy when our practices or legal requirements change. Material changes will be posted in the app or on this page with a revised effective date.',
      `For privacy questions or requests, contact us at ${contactEmail}.`,
    ],
  },
]
</script>

<template>
  <main class="legal-page">
    <section class="legal-hero" aria-labelledby="privacy-title">
      <p class="legal-eyebrow">UMIYA YOGA · LEGAL</p>
      <h1 id="privacy-title">Privacy Policy</h1>
      <p class="legal-summary">
        A clear guide to the information you share, the permissions you control
        and how community features work.
      </p>
      <div class="legal-meta">
        <span>Last updated {{ lastUpdated }}</span>
        <a :href="`mailto:${contactEmail}`">Privacy contact</a>
      </div>
    </section>

    <section class="legal-card legal-key-points" aria-labelledby="privacy-at-a-glance">
      <p class="section-label">AT A GLANCE</p>
      <h2 id="privacy-at-a-glance">Privacy that follows the feature you choose.</h2>
      <ul>
        <li>Permissions are requested only when a feature needs them.</li>
        <li>Posts, comments and profiles are community-facing by design.</li>
        <li>You can manage your profile, permissions and account in the app.</li>
      </ul>
    </section>

    <nav class="legal-toc" aria-label="Privacy Policy sections">
      <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
        <span>{{ section.number }}</span>
        {{ section.title }}
      </a>
    </nav>

    <article class="legal-card legal-document">
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        class="legal-section"
      >
        <div class="section-number">{{ section.number }}</div>
        <div>
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
          <ul v-if="section.items">
            <li v-for="item in section.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
    </article>

    <footer class="legal-footer">
      <span>© {{ new Date().getFullYear() }} {{ appName }}</span>
      <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
    </footer>
  </main>
</template>

<style scoped>
.legal-page {
  --ink: #193326;
  --muted: #617468;
  --paper: #fffcf5;
  --line: #dce5d6;
  --accent: #5d8e52;
  --soft: #eaf4e3;
  box-sizing: border-box;
  min-height: 100%;
  padding: clamp(24px, 5vw, 72px) 20px 36px;
  color: var(--ink);
  background:
    radial-gradient(circle at 12% 0%, rgb(196 231 180 / 58%), transparent 29rem),
    linear-gradient(145deg, #f5f9ee, #fcfaf3 48%, #edf5e9);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.legal-hero,
.legal-card,
.legal-toc,
.legal-footer {
  width: min(100%, 880px);
  margin-inline: auto;
}

.legal-hero {
  padding: 0 clamp(4px, 2vw, 20px) 28px;
}

.legal-eyebrow,
.section-label,
.section-number {
  margin: 0;
  color: var(--accent);
  font-size: 0.71rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  max-width: 12ch;
  margin: 10px 0 14px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.5rem, 8vw, 4.9rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.95;
}

.legal-summary {
  max-width: 52ch;
  margin-bottom: 20px;
  color: var(--muted);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
}

.legal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  color: var(--muted);
  font-size: 0.86rem;
}

a {
  color: inherit;
  text-underline-offset: 0.22em;
}

.legal-meta a,
.legal-footer a {
  color: #3d6940;
  font-weight: 700;
}

.legal-card {
  box-sizing: border-box;
  border: 1px solid rgb(220 229 214 / 88%);
  border-radius: 24px;
  background: rgb(255 252 245 / 90%);
  box-shadow: 0 18px 56px rgb(41 72 47 / 8%);
}

.legal-key-points {
  padding: clamp(24px, 4vw, 38px);
}

.legal-key-points h2 {
  max-width: 22ch;
  margin: 8px 0 18px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.55rem, 4vw, 2.2rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.12;
}

.legal-key-points ul,
.legal-section ul {
  margin: 0;
  padding-left: 1.2em;
}

.legal-key-points li,
.legal-section li {
  margin: 0.55em 0;
  color: var(--muted);
  line-height: 1.65;
}

.legal-key-points li::marker,
.legal-section li::marker {
  color: var(--accent);
}

.legal-toc {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  padding: 20px 0;
}

.legal-toc a {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.legal-toc a:hover,
.legal-toc a:focus-visible {
  border-color: var(--line);
  color: var(--ink);
  background: var(--soft);
  outline: none;
}

.legal-toc span {
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 900;
}

.legal-document {
  overflow: hidden;
  padding: clamp(24px, 4vw, 52px);
}

.legal-section {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 16px;
  padding: 26px 0;
  border-top: 1px solid var(--line);
  scroll-margin-top: 20px;
}

.legal-section:first-child {
  padding-top: 0;
  border-top: 0;
}

.legal-section:last-child {
  padding-bottom: 0;
}

.legal-section h2 {
  margin-bottom: 12px;
  font-size: clamp(1.16rem, 2vw, 1.42rem);
  letter-spacing: -0.025em;
}

.legal-section p {
  margin-bottom: 12px;
  color: #485e50;
  font-size: 0.97rem;
  line-height: 1.78;
}

.legal-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding: 26px 4px 0;
  color: var(--muted);
  font-size: 0.8rem;
}

@media (max-width: 640px) {
  .legal-page {
    padding-inline: 14px;
  }

  .legal-toc {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .legal-section {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .legal-card,
  .legal-hero {
    animation: legal-enter 420ms ease both;
  }

  .legal-toc {
    animation: legal-enter 460ms 70ms ease both;
  }
}

@keyframes legal-enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
