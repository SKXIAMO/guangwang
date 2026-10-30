<script setup lang="ts">
defineOptions({
  name: 'UserAgreementPage',
})

const appName = 'Umiya Yoga'
const lastUpdated = '30 October 2026'
const contactEmail = 'weijingyi2008730@icloud.com'

const sections = [
  {
    id: 'agreement',
    number: '01',
    title: 'Accepting this Agreement',
    paragraphs: [
      `This User Agreement governs your use of ${appName}, including its community, messaging, AI assistant and in-app purchase features.`,
      'By creating an account or using the service, you agree to this Agreement and the Privacy Policy. If you do not agree, please do not use the service.',
    ],
  },
  {
    id: 'eligibility',
    number: '02',
    title: 'Eligibility and accounts',
    paragraphs: [
      'The service is intended for adults aged 18 or older. You must provide accurate account information, keep your sign-in credentials confidential and notify us promptly if you believe your account has been accessed without permission.',
      'You may not sell, rent, transfer, share or create accounts for another person. We may restrict or suspend an account where it creates a safety, security or legal risk.',
    ],
  },
  {
    id: 'community',
    number: '03',
    title: 'Community standards',
    paragraphs: [
      'Umiya Yoga is designed for thoughtful movement and connection. You are responsible for the content you post and for your interactions with other people.',
    ],
    items: [
      'Do not post illegal, fraudulent, hateful, threatening, harassing, sexually explicit or exploitative content.',
      'Do not share another person’s private information, impersonate someone, infringe intellectual-property rights or use the service to send spam.',
      'Do not use the service to facilitate offline harm, commercial scams, unsolicited promotion or unauthorised automated activity.',
      'Use the report and block tools when content or conduct makes you feel unsafe. We may remove content or restrict accounts that breach these standards.',
    ],
  },
  {
    id: 'content',
    number: '04',
    title: 'Your content',
    paragraphs: [
      'You keep ownership of content you create. To operate the service, you give us a non-exclusive, worldwide, royalty-free licence to host, reproduce, display and distribute that content only as needed to provide, improve and protect the service.',
      'You confirm that you have the rights needed to share your content. Community posts, profile details and comments may be visible to other users. Direct messages are intended for their participants, but other users may retain or forward information you choose to share.',
    ],
  },
  {
    id: 'wellness',
    number: '05',
    title: 'Wellness and AI assistant',
    paragraphs: [
      'Yoga, movement and AI assistant content is offered for general wellness and educational purposes. It is not medical advice, diagnosis or treatment and should not replace advice from a qualified health professional.',
      'Please listen to your body, stop any activity that causes pain or discomfort and seek professional advice when appropriate. Do not submit highly sensitive personal information in AI prompts.',
    ],
  },
  {
    id: 'purchases',
    number: '06',
    title: 'Purchases and virtual credits',
    paragraphs: [
      'Some features may use virtual credits. Where offered on iOS, purchases are processed through Apple’s In-App Purchase system and are subject to the App Store terms and refund processes.',
      'Virtual credits are not money, have no cash value and are not transferable. The purpose, price and amount of any credit package will be shown before you confirm a purchase.',
    ],
  },
  {
    id: 'privacy',
    number: '07',
    title: 'Privacy and permissions',
    paragraphs: [
      'Our Privacy Policy explains the information we handle and your choices. The app requests access to photos, camera or microphone only when you choose a related feature, and you can change a permission in your device settings.',
      'Please use the service only in a lawful manner and respect the privacy, safety and rights of other users.',
    ],
  },
  {
    id: 'service',
    number: '08',
    title: 'Service availability',
    paragraphs: [
      'We work to keep the service available and secure, but it may be interrupted for maintenance, updates, network conditions or circumstances outside our control. We may modify or discontinue a feature where reasonably necessary.',
      'Nothing in this Agreement limits rights that cannot be limited under applicable law.',
    ],
  },
  {
    id: 'changes',
    number: '09',
    title: 'Changes and contact',
    paragraphs: [
      'We may update this Agreement to reflect changes to the service or legal requirements. Material changes will be posted in the app or on this page with a revised effective date.',
      `For questions about this Agreement or reports concerning the service, contact us at ${contactEmail}.`,
    ],
  },
]
</script>

<template>
  <main class="legal-page">
    <section class="legal-hero" aria-labelledby="agreement-title">
      <p class="legal-eyebrow">UMIYA YOGA · COMMUNITY</p>
      <h1 id="agreement-title">User Agreement</h1>
      <p class="legal-summary">
        The shared expectations that help keep Umiya Yoga supportive, respectful
        and safe for everyone.
      </p>
      <div class="legal-meta">
        <span>Last updated {{ lastUpdated }}</span>
        <a :href="`mailto:${contactEmail}`">Contact us</a>
      </div>
    </section>

    <section class="legal-card legal-key-points" aria-labelledby="agreement-at-a-glance">
      <p class="section-label">THE SHORT VERSION</p>
      <h2 id="agreement-at-a-glance">Show up with care. Share responsibly.</h2>
      <ul>
        <li>You must be 18 or older to use the service.</li>
        <li>You own what you post and are responsible for sharing it lawfully.</li>
        <li>Report or block content and people that breach our community standards.</li>
      </ul>
    </section>

    <nav class="legal-toc" aria-label="User Agreement sections">
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
