<script setup lang="ts">
defineOptions({
  name: 'PrivacyPolicyPage',
})

const appName = 'Hevyn'
const effectiveDate = 'November 12, 2026'

const sections = [
  { id: 'scope', label: 'Scope & service operator' },
  { id: 'data', label: 'Data we handle' },
  { id: 'use', label: 'How data is used' },
  { id: 'sharing', label: 'Visibility & sharing' },
  { id: 'choices', label: 'Your choices' },
  { id: 'retention', label: 'Retention & security' },
  { id: 'children', label: 'Children & updates' },
  { id: 'contact', label: 'Contact us' },
]
</script>

<template>
  <main class="legal-page">
    <header class="legal-hero">
      <div class="legal-shell hero-shell">
        <RouterLink to="/" class="wordmark" aria-label="Hevyn home">
          <span class="wordmark-mark">H</span>
          <span>{{ appName }}</span>
        </RouterLink>

        <div class="hero-copy">
          <p class="eyebrow">Legal · Community care</p>
          <h1>Privacy Policy</h1>
          <p class="hero-summary">
            A clear explanation of the information needed to run a handmade-jewelry
            community—and the choices you keep along the way.
          </p>
          <p class="effective-date">Effective {{ effectiveDate }}</p>
        </div>

        <nav class="document-switch" aria-label="Legal documents">
          <RouterLink to="/users">User Agreement</RouterLink>
          <RouterLink to="/privacy" aria-current="page">Privacy Policy</RouterLink>
        </nav>
      </div>
    </header>

    <div class="legal-shell legal-layout">
      <aside class="legal-aside" aria-label="Privacy Policy contents">
        <p class="aside-label">On this page</p>
        <nav class="section-nav">
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
            {{ section.label }}
          </a>
        </nav>
        <div class="aside-note">
          <span class="note-dot" aria-hidden="true" />
          <p>No advertising SDKs, no analytics SDKs, and no cross-app tracking are
            included in the Hevyn iOS app.</p>
        </div>
      </aside>

      <article class="legal-document">
        <section class="document-intro" aria-labelledby="privacy-summary">
          <p class="section-kicker">Privacy at a glance</p>
          <h2 id="privacy-summary">We collect only what the community features need.</h2>
          <p>
            Hevyn is a creative community for handmade jewelry. You can browse public
            craft references without an account. An account is needed when you choose
            to publish, interact, join a room, message another maker, manage a profile,
            or send a message bottle.
          </p>
          <div class="important-note">
            <strong>Important for a public community.</strong>
            <span>Public profiles, posts, craft logs, comments, room activity and
              bottle activity are not private communications. Do not include passwords,
              payment details, government identifiers, precise location, or other
              sensitive information in community content.</span>
          </div>
        </section>

        <section id="scope">
          <p class="section-kicker">01</p>
          <h2>Scope and service operator</h2>
          <p>
            This Privacy Policy explains how information is handled when you use the
            Hevyn iOS app and the Hevyn legal pages. “Hevyn,” “we,” and “us” mean the
            service operator identified as the seller on the applicable App Store
            product page.
          </p>
          <p>
            This Policy applies to information handled through Hevyn. It does not cover
            independent websites, services, or content that you choose to open outside
            the app. Their privacy practices are governed by their own notices.
          </p>
        </section>

        <section id="data">
          <p class="section-kicker">02</p>
          <h2>Data we handle</h2>
          <p>We handle the following categories only when they are relevant to a feature you use.</p>

          <dl class="data-grid">
            <div>
              <dt>Account and profile</dt>
              <dd>Email address, a password verifier, display name, profile image, and the profile
                information you choose to add. The app does not retain your password or an account
                session after it closes.</dd>
            </div>
            <div>
              <dt>Community content</dt>
              <dd>Craft logs, posts, captions, material notes, comments, reactions, follows,
                messages, room records, bottle activity, reports, blocks, and related community
                state that you choose to create.</dd>
            </div>
            <div>
              <dt>Photos, camera, and microphone</dt>
              <dd>Selected photos and recordings when you add a profile image, share work, create
                a room, or record a voice message. Permission is requested by iOS when you use the
                relevant feature; it is not requested simply to browse.</dd>
            </div>
            <div>
              <dt>Points and purchases</dt>
              <dd>Your point balance and transaction state needed to provide optional point-based
                bottle sends. If a point pack is offered, Apple processes payment credentials; Hevyn
                does not receive your full payment card details.</dd>
            </div>
          </dl>

          <p>
            Community data is sent to service-managed infrastructure at
            <code>app.hevyn.top</code> and, where media is shared, to service-managed
            media storage. The app uses no advertising SDKs, analytics SDKs, third-party
            social login, or cross-app tracking SDKs.
          </p>
        </section>

        <section id="use">
          <p class="section-kicker">03</p>
          <h2>How we use data</h2>
          <ul>
            <li>Provide account access, profile editing, content publishing, messaging, rooms,
              bottles, and point features you request.</li>
            <li>Display your chosen profile and community contributions in the places where you
              choose to share them.</li>
            <li>Maintain service integrity, prevent abuse, respond to reports, investigate safety
              concerns, and enforce the User Agreement.</li>
            <li>Respond to support, deletion, correction, and legal requests.</li>
            <li>Confirm a completed Apple transaction before points are credited, when purchases
              are enabled.</li>
          </ul>
          <p>
            We do not use your information for behavioural advertising, sell personal information,
            or use it to track you across apps or websites owned by other companies.
          </p>
        </section>

        <section id="sharing">
          <p class="section-kicker">04</p>
          <h2>Visibility and sharing</h2>
          <p>
            Hevyn is built for community discovery. Content that you publish publicly—such as your
            display name, profile image, craft logs, posts, comments, public room contributions,
            and public bottles—may be visible to other users. Other users can copy, quote, or save
            public content before it is removed.
          </p>
          <p>
            Under the current public-community product rules, designated profile and community
            records are publicly accessible and may be edited by community participants. Do not put
            confidential information in those records. Use the in-app report and block controls if
            content or behaviour is unsafe or inappropriate.
          </p>
          <p>We may disclose limited information only when necessary to:</p>
          <ul>
            <li>operate hosting and media storage on our behalf and under appropriate instructions;</li>
            <li>complete an Apple-managed purchase or validate its result;</li>
            <li>protect users, investigate abuse, prevent fraud, or comply with applicable law; or</li>
            <li>respond to a valid legal process or protect the rights, safety, and property of
              users or the service.</li>
          </ul>
        </section>

        <section id="choices">
          <p class="section-kicker">05</p>
          <h2>Your choices and controls</h2>
          <ul>
            <li><strong>Profile and content.</strong> Use the relevant in-app controls to update
              your profile or content where editing is available.</li>
            <li><strong>Device permissions.</strong> You can change photo, camera, and microphone
              access at any time in iOS Settings. Features that require a permission will not work
              until it is granted.</li>
            <li><strong>Safety.</strong> You can report content or block a maker from the safety
              controls available in the app.</li>
            <li><strong>Account deletion.</strong> You can request deletion from Settings. We will
              remove related active service records subject to legitimate security, fraud-prevention,
              backup, and legal-retention needs.</li>
          </ul>
          <p>
            Deleting an account does not necessarily remove material that another person lawfully
            copied, quoted, or republished before removal. We will explain if we cannot complete a
            request because of an applicable legal obligation or a necessary security record.
          </p>
        </section>

        <section id="retention">
          <p class="section-kicker">06</p>
          <h2>Retention and security</h2>
          <p>
            We keep account and community records for as long as needed to provide the service,
            honour your choices, resolve disputes, prevent misuse, and meet legal obligations.
            Temporary audio files are removed from the device after a recording is uploaded or
            cancelled. The app keeps an active sign-in state only in memory for the current app
            session.
          </p>
          <p>
            We use reasonable administrative, technical, and organisational measures designed to
            protect service data. No online service can guarantee absolute security, so please keep
            your account credentials private and report suspected misuse promptly.
          </p>
        </section>

        <section id="children">
          <p class="section-kicker">07</p>
          <h2>Children and policy updates</h2>
          <p>
            Hevyn is not directed to children below the minimum age required to use the service in
            their jurisdiction. Do not create an account for a child who cannot lawfully use the
            service. If we learn that personal information was collected contrary to applicable
            child-privacy requirements, we will take appropriate steps to delete it.
          </p>
          <p>
            We may update this Policy when our features or legal obligations change. For material
            changes, we will provide notice through the app, this page, or another appropriate
            channel before the change takes effect where required by law. The effective date above
            tells you when this version began to apply.
          </p>
        </section>

        <section id="contact" class="contact-section">
          <p class="section-kicker">08</p>
          <h2>Contact us</h2>
          <p>
            For privacy questions, access or deletion requests, or concerns about this Policy, use
            the official support contact published on the applicable Hevyn App Store product page.
            Please include the email address associated with your account and enough detail for us
            to understand your request. Do not send your password.
          </p>
          <p class="contact-reminder">
            The App Store seller and support contact identify the service operator for your region.
          </p>
        </section>
      </article>
    </div>

    <footer class="legal-footer">
      <div class="legal-shell footer-inner">
        <span>© {{ appName }} · Handmade jewelry community</span>
        <RouterLink to="/users">Read the User Agreement</RouterLink>
      </div>
    </footer>
  </main>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

.legal-page {
  --ink: #1b1a19;
  --muted: #716c65;
  --paper: #fffdf9;
  --paper-warm: #f8f0e9;
  --coral: #f35d50;
  --sun: #ffc943;
  --line: rgba(67, 49, 35, 0.14);
  min-height: 100%;
  color: var(--ink);
  background:
    radial-gradient(circle at 7% 5%, rgba(243, 93, 80, 0.12) 0 1px, transparent 1.7px) 0 0 / 18px 18px,
    linear-gradient(130deg, rgba(255, 255, 255, 0.76), rgba(250, 237, 226, 0.8));
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.legal-shell {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

.legal-hero {
  overflow: hidden;
  border-bottom: 1px solid var(--line);
  background: var(--paper-warm);
}

.hero-shell {
  position: relative;
  padding: 28px 0 54px;
}

.hero-shell::after {
  position: absolute;
  z-index: 0;
  top: -124px;
  right: -106px;
  width: 340px;
  height: 340px;
  border: 28px solid rgba(243, 93, 80, 0.2);
  border-radius: 46% 54% 52% 48%;
  content: "";
  transform: rotate(-14deg);
}

.wordmark,
.document-switch,
.hero-copy {
  position: relative;
  z-index: 1;
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-decoration: none;
}

.wordmark-mark {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 11px 8px 12px 8px;
  color: white;
  background: var(--ink);
  font-size: 17px;
  letter-spacing: 0;
}

.hero-copy {
  max-width: 710px;
  margin-top: 56px;
}

.eyebrow,
.section-kicker,
.aside-label {
  margin: 0;
  color: var(--coral);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
  letter-spacing: -0.045em;
}

h1 {
  max-width: 620px;
  margin: 12px 0 14px;
  font-size: clamp(42px, 7vw, 74px);
  font-weight: 700;
  line-height: 0.95;
}

.hero-summary {
  max-width: 560px;
  margin: 0;
  color: #504a43;
  font-size: 17px;
  line-height: 1.65;
}

.effective-date {
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 13px;
  font-weight: 650;
}

.document-switch {
  display: inline-flex;
  gap: 4px;
  margin-top: 32px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 253, 249, 0.7);
}

.document-switch a {
  padding: 9px 14px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.document-switch a[aria-current='page'] {
  color: var(--ink);
  background: var(--sun);
}

.legal-layout {
  display: grid;
  grid-template-columns: 224px minmax(0, 1fr);
  gap: clamp(38px, 8vw, 104px);
  padding-top: 52px;
  padding-bottom: 76px;
}

.legal-aside {
  align-self: start;
  position: sticky;
  top: 20px;
}

.section-nav {
  display: grid;
  gap: 3px;
  margin-top: 13px;
}

.section-nav a {
  padding: 8px 10px;
  border-left: 2px solid transparent;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.35;
  text-decoration: none;
}

.section-nav a:hover,
.section-nav a:focus-visible {
  border-left-color: var(--coral);
  color: var(--ink);
  outline: none;
}

.aside-note {
  display: flex;
  gap: 9px;
  margin-top: 28px;
  padding: 13px;
  border: 1px solid rgba(29, 76, 143, 0.16);
  border-radius: 13px;
  color: #526170;
  background: rgba(231, 241, 255, 0.58);
  font-size: 12px;
  line-height: 1.55;
}

.aside-note p {
  margin: 0;
}

.note-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  margin-top: 5px;
  border-radius: 50%;
  background: #2f6cb9;
}

.legal-document {
  min-width: 0;
  padding: clamp(24px, 5vw, 52px);
  border: 1px solid var(--line);
  border-radius: 26px 18px 28px 20px;
  background: rgba(255, 253, 249, 0.91);
  box-shadow: 0 18px 50px rgba(94, 65, 44, 0.08);
}

.legal-document section {
  scroll-margin-top: 22px;
}

.legal-document section + section {
  margin-top: 54px;
  padding-top: 49px;
  border-top: 1px solid var(--line);
}

.legal-document h2 {
  margin: 8px 0 15px;
  font-size: clamp(27px, 3vw, 38px);
  line-height: 1.08;
}

.legal-document p,
.legal-document li,
.legal-document dd {
  color: #514c46;
  font-size: 15px;
  line-height: 1.78;
}

.legal-document p {
  margin: 0 0 15px;
}

.legal-document ul {
  display: grid;
  gap: 10px;
  margin: 0 0 18px;
  padding-left: 21px;
}

.legal-document li::marker {
  color: var(--coral);
}

.legal-document strong {
  color: var(--ink);
}

code {
  padding: 0.14em 0.38em;
  border-radius: 5px;
  color: #894b38;
  background: #fff0e8;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.88em;
}

.document-intro h2 {
  max-width: 690px;
}

.important-note {
  display: grid;
  gap: 5px;
  margin-top: 24px;
  padding: 17px 18px;
  border: 1px solid rgba(243, 93, 80, 0.26);
  border-radius: 14px 11px 15px 11px;
  color: #70463f;
  background: #fff1ed;
  font-size: 13px;
  line-height: 1.6;
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 24px 0;
}

.data-grid > div {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 15px 11px 14px 10px;
  background: #fffaf4;
}

.data-grid dt {
  margin-bottom: 7px;
  color: var(--ink);
  font-size: 14px;
  font-weight: 800;
}

.data-grid dd {
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
}

.contact-section {
  padding: 27px;
  border: 1px solid rgba(29, 76, 143, 0.18);
  border-radius: 19px 14px 20px 15px;
  background: linear-gradient(120deg, #eef5ff, #fffdfa 76%);
}

.legal-document section.contact-section + section {
  border-top: 0;
}

.contact-reminder {
  margin-bottom: 0 !important;
  color: #526170 !important;
  font-size: 13px !important;
  font-weight: 700;
}

.legal-footer {
  border-top: 1px solid var(--line);
  background: rgba(255, 253, 249, 0.72);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding-top: 25px;
  padding-bottom: 28px;
  color: var(--muted);
  font-size: 13px;
}

.footer-inner a {
  color: var(--ink);
  font-weight: 750;
  text-decoration-color: var(--coral);
  text-underline-offset: 4px;
}

@media (max-width: 780px) {
  .legal-shell {
    width: min(100% - 32px, 620px);
  }

  .hero-shell {
    padding-top: 20px;
    padding-bottom: 35px;
  }

  .hero-copy {
    margin-top: 43px;
  }

  .hero-summary {
    font-size: 15px;
  }

  .legal-layout {
    display: block;
    padding-top: 28px;
    padding-bottom: 45px;
  }

  .legal-aside {
    position: static;
    margin-bottom: 22px;
  }

  .section-nav {
    display: flex;
    overflow-x: auto;
    gap: 6px;
    margin-right: -16px;
    padding-right: 16px;
  }

  .section-nav a {
    flex: 0 0 auto;
    padding: 7px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 253, 249, 0.8);
    white-space: nowrap;
  }

  .aside-note {
    display: none;
  }

  .legal-document {
    padding: 26px 20px;
    border-radius: 20px 15px 21px 16px;
  }

  .legal-document section + section {
    margin-top: 39px;
    padding-top: 36px;
  }

  .legal-document p,
  .legal-document li,
  .legal-document dd {
    font-size: 14px;
  }

  .data-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media print {
  .legal-page {
    background: white;
  }

  .legal-hero {
    border-bottom: 0;
    background: white;
  }

  .document-switch,
  .legal-aside,
  .legal-footer {
    display: none;
  }

  .legal-layout {
    display: block;
    padding: 20px 0;
  }

  .legal-document {
    padding: 0;
    border: 0;
    box-shadow: none;
  }
}
</style>
