<script setup lang="ts">
defineOptions({
  name: 'UserAgreementPage',
})

const appName = 'Brewy'
const updatedAt = 'November 9, 2026'
const supportEmail = '639293382@qq.com'
</script>

<template>
  <main class="policy-page">
    <div class="policy-frame">
      <header class="policy-hero">
        <p class="eyebrow">BREWY · COFFEE COMMUNITY</p>
        <h1>User Agreement</h1>
        <p class="hero-copy">
          These terms set out the rules for using {{ appName }} as a place to share
          coffee moments, exchange brewing ideas, and connect with the community.
        </p>
        <div class="hero-meta">
          <span>Last updated: {{ updatedAt }}</span>
          <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        </div>
      </header>

      <section class="notice-grid" aria-label="Agreement highlights">
        <article>
          <span class="notice-mark" aria-hidden="true">01</span>
          <h2>Be considerate</h2>
          <p>Keep shared coffee conversations genuine, respectful, and safe for the community.</p>
        </article>
        <article>
          <span class="notice-mark" aria-hidden="true">02</span>
          <h2>Share responsibly</h2>
          <p>Only post material you have the right to use, and protect other people’s privacy.</p>
        </article>
        <article>
          <span class="notice-mark" aria-hidden="true">03</span>
          <h2>Purchases are optional</h2>
          <p>Points are optional in-app purchases used for the clearly stated feature shown in the app.</p>
        </article>
      </section>

      <nav class="contents" aria-label="User agreement sections">
        <a href="#acceptance">Acceptance</a>
        <a href="#accounts">Accounts</a>
        <a href="#community">Community rules</a>
        <a href="#content">Your content</a>
        <a href="#points">Points and purchases</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="acceptance" class="policy-section">
        <p class="section-number">01</p>
        <div>
          <h2>Acceptance and service scope</h2>
          <p>
            By creating an account, continuing as a guest, or otherwise using
            {{ appName }}, you agree to this User Agreement and our Privacy Policy.
            If you do not agree, do not use the service.
          </p>
          <p>
            {{ appName }} is a coffee-focused community. The app may offer coffee posts,
            daily discussion prompts, comments, reactions, saved posts, follow
            relationships, account-specific conversations, optional AI coffee
            consultations, and in-app points. Features may vary by release, device, or
            availability, and we may update them to maintain or improve the service.
          </p>
        </div>
      </section>

      <section id="accounts" class="policy-section">
        <p class="section-number">02</p>
        <div>
          <h2>Accounts and guest browsing</h2>
          <p>
            You may browse selected public community content as a guest. Creating posts,
            using account-specific conversations, buying points, managing saved content,
            and other member features require an account.
          </p>
          <p>
            Keep your sign-in details accurate and secure. Do not share your account or
            use another person’s account without permission. You are responsible for
            activity performed through your account. Tell us promptly if you believe your
            account has been used without your authorization.
          </p>
          <p>
            You must meet the minimum age required to use online services where you live.
            Do not create an account if you are not allowed to accept these terms.
          </p>
        </div>
      </section>

      <section id="community" class="policy-section">
        <p class="section-number">03</p>
        <div>
          <h2>Community rules</h2>
          <p>
            {{ appName }} is designed for coffee culture, brewing notes, café discoveries,
            and constructive discussion. When using the service, do not:
          </p>
          <ul>
            <li>Post content that is unlawful, deceptive, threatening, exploitative, or intended to harm people.</li>
            <li>Harass, impersonate, intimidate, repeatedly contact, or discriminate against another person.</li>
            <li>Share another person’s private information, image, or work without a valid right to do so.</li>
            <li>Send unsolicited promotions, repetitive material, or attempts to mislead community members.</li>
            <li>Interfere with the service, evade reasonable safeguards, or attempt to access accounts or data you do not own.</li>
            <li>Use community content as professional health, safety, financial, or legal advice.</li>
          </ul>
          <p>
            You can report content or block a member in the app. We may review reported
            material and, where appropriate, limit content, interactions, or account access
            to protect the community and comply with applicable requirements.
          </p>
        </div>
      </section>

      <section id="content" class="policy-section">
        <p class="section-number">04</p>
        <div>
          <h2>Your content and community visibility</h2>
          <p>
            You keep ownership of the original content you share. You grant us a
            non-exclusive, worldwide, royalty-free license to host, store, reproduce,
            format, display, and distribute that content only as needed to operate,
            secure, promote within the service, and improve {{ appName }}. This license
            ends when the relevant content is removed from active service use, subject to
            necessary backups, legal obligations, and copies made by other members before
            removal.
          </p>
          <p>
            You confirm that you have the rights and permissions needed to share your
            content. Public posts, profile information, comments, and topic replies can be
            viewed by other community members. Think carefully before publishing because
            other people may save, quote, or re-share public material.
          </p>
        </div>
      </section>

      <section id="points" class="policy-section">
        <p class="section-number">05</p>
        <div>
          <h2>Points and in-app purchases</h2>
          <p>
            {{ appName }} may offer consumable in-app point packages through Apple’s
            in-app purchase system. The app clearly displays the package, price, and point
            amount before you confirm a purchase. Apple processes payment under its own
            terms and policies; we do not receive your payment-card details.
          </p>
          <p>
            Points are digital in-app balances, are not cash, have no monetary value
            outside {{ appName }}, and may not be transferred, sold, or exchanged. Points
            may be used only for the feature expressly shown in the app, such as unlocking
            an AI coffee consultation. Refunds and purchase disputes are handled according
            to Apple’s policies and any mandatory consumer rights that apply to you.
          </p>
        </div>
      </section>

      <section class="policy-section">
        <p class="section-number">06</p>
        <div>
          <h2>AI coffee consultations and third-party services</h2>
          <p>
            AI responses are generated automatically to support coffee learning and
            conversation. They can be incomplete or incorrect, and they are not a
            substitute for professional advice. Use your own judgment, especially where a
            response may affect health, safety, equipment, or a purchasing decision.
          </p>
          <p>
            The service may rely on hosting, storage, payment, and AI providers. Their
            availability can affect the experience. We do not guarantee that every feature
            will be available at all times or on every device.
          </p>
        </div>
      </section>

      <section class="policy-section">
        <p class="section-number">07</p>
        <div>
          <h2>Account status, changes, and disclaimers</h2>
          <p>
            You may permanently delete your account from Settings. The app removes the
            profile and account-specific records it stores, and the deleted account cannot
            sign in. Content is removed from the service view; copies another member made
            before removal and limited provider backups may remain outside active service
            use. We may suspend or limit access when reasonably necessary to enforce these
            terms, investigate misuse, protect people or the service, or comply with law.
          </p>
          <p>
            We work to keep {{ appName }} available and reliable, but the service is
            provided on an “as available” basis to the extent permitted by law. Community
            content reflects the views of the people who post it, not necessarily ours. We
            may revise these terms when the service or legal requirements change; the date
            above shows the latest version.
          </p>
        </div>
      </section>

      <section id="contact" class="contact-panel">
        <p class="section-number">08</p>
        <div>
          <h2>Questions about these terms?</h2>
          <p>
            Contact us if you have a question about this Agreement or your use of
            {{ appName }}. Please include enough detail for us to understand the issue.
          </p>
          <a class="contact-link" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.policy-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 8% 0%, rgb(248 236 130 / 40%), transparent 30rem),
    radial-gradient(circle at 100% 18%, rgb(159 122 254 / 16%), transparent 32rem),
    #fbf7fc;
  color: #2c2536;
}

.policy-frame {
  box-sizing: border-box;
  max-width: 920px;
  margin: 0 auto;
  padding: 48px 24px 72px;
}

.policy-hero,
.notice-grid,
.contents,
.policy-section,
.contact-panel {
  border: 1px solid #e8d9ec;
  background: rgb(255 255 255 / 92%);
  box-shadow: 0 18px 42px rgb(44 37 54 / 6%);
}

.policy-hero {
  padding: 44px;
  border-radius: 32px;
}

.eyebrow,
.section-number {
  margin: 0;
  color: #3ba6cc;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 620px;
  margin: 12px 0 16px;
  font-size: clamp(36px, 7vw, 58px);
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero-copy {
  max-width: 650px;
  margin-bottom: 28px;
  color: #5f5368;
  font-size: 17px;
  line-height: 1.65;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  color: #7d7287;
  font-size: 13px;
}

a {
  color: #8063d4;
  font-weight: 700;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.notice-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  margin-top: 18px;
  overflow: hidden;
  border-radius: 24px;
}

.notice-grid article {
  min-height: 152px;
  padding: 24px;
}

.notice-grid article + article {
  border-left: 1px solid #e8d9ec;
}

.notice-mark {
  color: #9f7afe;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.notice-grid h2,
.policy-section h2,
.contact-panel h2 {
  margin: 12px 0 8px;
  font-size: 20px;
  line-height: 1.25;
}

.notice-grid p,
.policy-section p,
.policy-section li,
.contact-panel p {
  color: #5f5368;
  font-size: 15px;
  line-height: 1.7;
}

.notice-grid p {
  margin-bottom: 0;
  font-size: 14px;
}

.contents {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin: 18px 0;
  padding: 18px 24px;
  border-radius: 20px;
}

.contents a {
  font-size: 13px;
}

.policy-section,
.contact-panel {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 20px;
  margin-top: 18px;
  padding: 32px;
  border-radius: 24px;
}

.policy-section h2,
.contact-panel h2 {
  margin-top: 0;
  font-size: 25px;
}

.policy-section p:last-child,
.contact-panel p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0 0 16px;
  padding-left: 21px;
}

li + li {
  margin-top: 7px;
}

.contact-panel {
  margin-top: 18px;
  border-color: #9f7afe;
  background: linear-gradient(135deg, #fff 0%, #f4edff 100%);
}

.contact-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 17px;
}

@media (max-width: 640px) {
  .policy-frame {
    padding: 18px 14px 44px;
  }

  .policy-hero {
    padding: 30px 24px;
    border-radius: 25px;
  }

  .hero-copy {
    font-size: 15px;
  }

  .notice-grid {
    grid-template-columns: 1fr;
  }

  .notice-grid article + article {
    border-top: 1px solid #e8d9ec;
    border-left: 0;
  }

  .policy-section,
  .contact-panel {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 26px 22px;
    border-radius: 22px;
  }

  .policy-section h2,
  .contact-panel h2 {
    font-size: 22px;
  }
}
</style>
