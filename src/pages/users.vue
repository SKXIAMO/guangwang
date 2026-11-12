<script setup lang="ts">
defineOptions({
  name: 'UserAgreementPage',
})

const appName = 'Hevyn'
const effectiveDate = 'November 12, 2026'

const sections = [
  { id: 'acceptance', label: 'Acceptance & scope' },
  { id: 'accounts', label: 'Accounts & access' },
  { id: 'community', label: 'Community rules' },
  { id: 'content', label: 'Your content' },
  { id: 'spaces', label: 'Rooms, messages & bottles' },
  { id: 'points', label: 'Points & purchases' },
  { id: 'moderation', label: 'Safety & moderation' },
  { id: 'service', label: 'Service terms' },
  { id: 'contact', label: 'Changes & contact' },
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
          <h1>User Agreement</h1>
          <p class="hero-summary">
            The shared rules that make Hevyn a welcoming place to learn, make, and
            exchange handmade-jewelry ideas.
          </p>
          <p class="effective-date">Effective {{ effectiveDate }}</p>
        </div>

        <nav class="document-switch" aria-label="Legal documents">
          <RouterLink to="/users" aria-current="page">User Agreement</RouterLink>
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
        </nav>
      </div>
    </header>

    <div class="legal-shell legal-layout">
      <aside class="legal-aside" aria-label="User Agreement contents">
        <p class="aside-label">On this page</p>
        <nav class="section-nav">
          <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
            {{ section.label }}
          </a>
        </nav>
        <div class="aside-note">
          <span class="note-dot" aria-hidden="true" />
          <p>Be generous with process, precise with attribution, and quick to use Report or
            Block when a space no longer feels safe.</p>
        </div>
      </aside>

      <article class="legal-document">
        <section class="document-intro" aria-labelledby="agreement-summary">
          <p class="section-kicker">The short version</p>
          <h2 id="agreement-summary">Make with care. Share with permission. Treat people well.</h2>
          <p>
            Hevyn is a creative community for handmade jewelry: beading, wire wrapping,
            resin work, silver clay, vintage upcycling, and related practices. By creating
            an account or using account-only features, you agree to this User Agreement and
            the <RouterLink to="/privacy">Privacy Policy</RouterLink>.
          </p>
          <div class="important-note">
            <strong>Safety first.</strong>
            <span>Do not use Hevyn to seek money, credentials, private contact details, or
              in-person meetings. Report or block behaviour that is unsafe, abusive,
              deceptive, or inappropriate.</span>
          </div>
        </section>

        <section id="acceptance">
          <p class="section-kicker">01</p>
          <h2>Acceptance and scope</h2>
          <p>
            This Agreement governs your use of the Hevyn app and its community features.
            “Hevyn,” “we,” and “us” mean the service operator identified as the seller on
            the applicable App Store product page. If you do not agree, do not create an
            account or use account-only features.
          </p>
          <p>
            You may browse publicly available work without an account. Publishing, reacting,
            commenting, following, messaging, entering or creating a room, managing a profile,
            and sending or refreshing a message bottle require an active account. If you are
            below the age required to use the service where you live, do not use Hevyn.
          </p>
        </section>

        <section id="accounts">
          <p class="section-kicker">02</p>
          <h2>Accounts and access</h2>
          <ul>
            <li>Provide accurate account and profile information, and keep your email address
              and password secure.</li>
            <li>Do not share, sell, rent, transfer, or give another person access to your account.</li>
            <li>You are responsible for activity performed through your account until you report
              suspected unauthorised access through the official support channel.</li>
            <li>Use one account that represents you. Do not impersonate another person, maker,
              business, collection, or organisation.</li>
          </ul>
          <p>
            Hevyn may restrict access to preserve security, investigate suspected abuse, or
            comply with applicable law. You can request account deletion from Settings.
          </p>
        </section>

        <section id="community">
          <p class="section-kicker">03</p>
          <h2>Community rules</h2>
          <p>Use Hevyn for genuine handmade-jewelry learning, making, and conversation. You must not:</p>
          <ul>
            <li>publish content you did not make, do not have permission to show, or cannot
              properly attribute;</li>
            <li>post illegal, sexually explicit, exploitative, violent, hateful, harassing,
              threatening, discriminatory, or deceptive material;</li>
            <li>share another person’s private information, image, recording, or location without
              their permission;</li>
            <li>send spam, scams, malicious links, unsolicited promotions, or requests for money,
              passwords, verification codes, or off-platform payment;</li>
            <li>use bots, scraping, reverse engineering, or other means to disrupt, probe, or
              misuse the service; or</li>
            <li>evade a block, moderation action, feature restriction, or account suspension.</li>
          </ul>
          <p>
            Hevyn is not a marketplace or escrow service. Do not rely on community posts, messages,
            rooms, or bottles for professional, financial, medical, legal, or safety advice.
          </p>
        </section>

        <section id="content">
          <p class="section-kicker">04</p>
          <h2>Your content and permissions</h2>
          <p>
            You retain ownership of the photos, text, recordings, and other original material that
            you contribute. To operate the service, you grant Hevyn a non-exclusive, worldwide,
            royalty-free licence to host, store, reproduce, resize, format, display, and distribute
            that material within Hevyn for as long as it is needed to provide the community feature
            you chose to use.
          </p>
          <p>
            You represent that you have the rights and permissions needed to publish your content,
            including the right to show people, artwork, trademarks, source images, and recordings
            that appear in it. Always credit other makers and source collections when credit is due.
          </p>
          <p>
            Public profiles and community records are designed for community visibility. Under the
            current public-community product rules, designated public profile and post records may
            also be editable by community participants. Do not publish confidential or sensitive
            information in those records. Removing your content does not remove copies another user
            made before removal.
          </p>
        </section>

        <section id="spaces">
          <p class="section-kicker">05</p>
          <h2>Rooms, messages, and bottles</h2>
          <ul>
            <li><strong>Audio rooms.</strong> Hosts may set a craft-focused topic and may remove
              disruptive participants. Do not record, rebroadcast, or share another person’s voice
              without permission.</li>
            <li><strong>Messages.</strong> Direct messages and voice notes are for respectful
              maker-to-maker conversation. They are not a secure channel for confidential material.</li>
            <li><strong>Message bottles.</strong> Bottles are for lightweight encouragement and
              interest discovery around handmade work. They are linked to account activity for
              safety and moderation; they are not anonymous or confidential communication.</li>
            <li><strong>Safety controls.</strong> Use the in-app Report or Block actions rather
              than escalating a conflict in public. A block may hide the maker and end relevant
              relationship features in your experience.</li>
          </ul>
        </section>

        <section id="points">
          <p class="section-kicker">06</p>
          <h2>Free features, points, and purchases</h2>
          <p>
            Basic creation and community features are free. Each account may receive a daily free
            message-bottle allowance. When that allowance is used, the app may offer an additional
            bottle send in exchange for the point amount displayed before you confirm.
          </p>
          <p>
            Points are in-app feature credits, are not money, have no cash value, and cannot be
            transferred, exchanged, or redeemed outside Hevyn except where required by applicable
            law. If point packs are offered, purchases are processed through Apple using the terms,
            price, and refund rules presented by Apple at purchase. Hevyn does not receive your full
            payment card information.
          </p>
        </section>

        <section id="moderation">
          <p class="section-kicker">07</p>
          <h2>Safety and moderation</h2>
          <p>
            Community contributions are made by users and source contributors, not by Hevyn. We do
            not promise to review every contribution before it becomes visible. We provide report
            and block controls and may review reported material or account activity.
          </p>
          <p>Where reasonably necessary to protect the community or enforce this Agreement, we may:</p>
          <ul>
            <li>limit visibility, remove content, or disable a feature;</li>
            <li>restrict, suspend, or end access to an account;</li>
            <li>keep limited report and enforcement records to investigate repeated abuse; and</li>
            <li>cooperate with valid legal requests and measures needed to protect users.</li>
          </ul>
          <p>
            Moderation decisions do not make Hevyn responsible for user content. If you believe a
            decision was made in error, use the official support contact in the App Store listing.
          </p>
        </section>

        <section id="service">
          <p class="section-kicker">08</p>
          <h2>Service terms and intellectual property</h2>
          <p>
            Hevyn, its interface, name, artwork, and service materials are protected by applicable
            intellectual-property laws. Except for the limited right to use the service under this
            Agreement, no rights are granted to you. Do not copy, sell, license, or exploit the
            service or its branding without permission.
          </p>
          <p>
            We work to keep Hevyn available and secure, but features, availability, public content,
            search results, rooms, and point offers may change. To the extent permitted by applicable
            law, the service is provided without a guarantee that it will always be uninterrupted,
            error-free, accurate, or suitable for every purpose.
          </p>
          <p>
            Nothing in this Agreement excludes rights that cannot legally be excluded. If a provision
            is unenforceable, the remaining provisions continue to apply to the extent permitted by law.
          </p>
        </section>

        <section id="contact" class="contact-section">
          <p class="section-kicker">09</p>
          <h2>Changes, ending access, and contact</h2>
          <p>
            You may stop using Hevyn at any time and request deletion from Settings. We may update
            this Agreement when features, safety practices, or legal obligations change. Where
            required by law, we will give notice before a material change takes effect. Continuing to
            use affected features after the effective date means you accept the updated Agreement.
          </p>
          <p>
            Questions about this Agreement, a report, an account restriction, or an access/deletion
            request should be sent through the official support contact published on the applicable
            Hevyn App Store product page. Do not send passwords or payment credentials in a request.
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
        <RouterLink to="/privacy">Read the Privacy Policy</RouterLink>
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
  border: 28px solid rgba(29, 76, 143, 0.16);
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
.legal-document li {
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

.legal-document strong,
.legal-document a {
  color: var(--ink);
}

.legal-document a {
  font-weight: 750;
  text-decoration-color: var(--coral);
  text-underline-offset: 3px;
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

.contact-section {
  padding: 27px;
  border: 1px solid rgba(29, 76, 143, 0.18);
  border-radius: 19px 14px 20px 15px;
  background: linear-gradient(120deg, #eef5ff, #fffdfa 76%);
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
  .legal-document li {
    font-size: 14px;
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
