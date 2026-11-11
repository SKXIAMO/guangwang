<script setup lang="ts">
defineOptions({
  name: 'PrivacyPage',
})

const appName = 'Brewy'
const updatedAt = 'November 10, 2026'
const supportEmail = 'huangmin196614@icloud.com'
</script>

<template>
  <main class="policy-page">
    <div class="policy-frame">
      <header class="policy-hero">
        <p class="eyebrow">BREWY · COFFEE COMMUNITY</p>
        <h1>Privacy Policy</h1>
        <p class="hero-copy">
          This notice explains what {{ appName }} needs to run a thoughtful coffee
          community, how that information is used, and the choices available to you.
        </p>
        <div class="hero-meta">
          <span>Last updated: {{ updatedAt }}</span>
          <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        </div>
      </header>

      <section class="notice-grid" aria-label="Privacy highlights">
        <article>
          <span class="notice-mark" aria-hidden="true">01</span>
          <h2>What becomes public</h2>
          <p>Only the profile and community content you choose to share are visible in the community.</p>
        </article>
        <article>
          <span class="notice-mark" aria-hidden="true">02</span>
          <h2>What stays account-specific</h2>
          <p>Your email, password credential, balance, reports, and account settings are not public profile fields.</p>
        </article>
        <article>
          <span class="notice-mark" aria-hidden="true">03</span>
          <h2>Your choices</h2>
          <p>You can edit your profile, remove shared content where available, or delete your account in the app.</p>
        </article>
      </section>

      <nav class="contents" aria-label="Privacy policy sections">
        <a href="#scope">Scope</a>
        <a href="#collect">Information we collect</a>
        <a href="#use">How we use it</a>
        <a href="#sharing">Sharing and storage</a>
        <a href="#choices">Your choices</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="scope" class="policy-section">
        <p class="section-number">01</p>
        <div>
          <h2>Scope</h2>
          <p>
            This Privacy Policy applies to the {{ appName }} mobile app and the services
            that support it. It explains how we handle information when you browse coffee
            posts, create an account, share a coffee moment, join a daily topic, interact
            with other members, purchase points, or use an optional AI coffee consultation.
          </p>
          <p>
            If you do not agree with this Policy, please do not use {{ appName }}. This
            Policy does not apply to websites, apps, or services that we do not operate.
          </p>
        </div>
      </section>

      <section id="collect" class="policy-section">
        <p class="section-number">02</p>
        <div>
          <h2>Information we collect</h2>
          <div class="policy-card">
            <h3>Account and profile information</h3>
            <p>
              When you register, we collect the information you provide to create and run
              your account, such as your email address, display name, date of birth,
              gender, profile photo, and coffee bio. We store a password credential for
              sign-in; we do not display your password in your public profile.
            </p>
          </div>
          <div class="policy-card">
            <h3>Community content and interactions</h3>
            <p>
              We process the photos, captions, tags, comments, topic replies, reactions,
              saves, follows, reports, and other information you submit through the
              community. A post, profile image, display name, bio, comment, topic reply,
              and related interaction may be visible to other members when you choose to
              share it publicly.
            </p>
          </div>
          <div class="policy-card">
            <h3>Messages, purchases, and AI requests</h3>
            <p>
              Direct-message records are stored with the relevant account and are not
              displayed as public posts. When you buy in-app points, Apple handles your
              payment information; we receive the purchase status and transaction details
              needed to add points and prevent duplicate credits. If you use an optional
              AI coffee consultation, your question and recent chat context are sent to an
              AI service provider to generate a response. AI sessions are not saved to
              your {{ appName }} account after you leave the consultation.
            </p>
          </div>
          <div class="policy-card">
            <h3>Technical and diagnostic information</h3>
            <p>
              Our hosting and service providers may process basic request and diagnostic
              information, such as IP address, device or operating-system details, and
              timestamps, to deliver the service, keep it secure, investigate failures,
              and prevent misuse.
            </p>
          </div>
          <p class="callout">
            {{ appName }} does not request your contacts or precise location. When you
            choose a photo through the system photo picker, we receive only the image or
            images you select. If you choose to start a video-call status with a mutual
            follower, the app asks for camera and microphone permission at that time. The
            current version does not establish a media connection or record, store, or
            upload camera or microphone content through that status.
          </p>
        </div>
      </section>

      <section id="use" class="policy-section">
        <p class="section-number">03</p>
        <div>
          <h2>How we use information</h2>
          <ul>
            <li>Provide sign-in, account settings, profile editing, and community features.</li>
            <li>Display the coffee posts, replies, profiles, and interactions you choose to share.</li>
            <li>Deliver account-specific features such as saved posts, points, reports, and messages.</li>
            <li>Process point purchases, prevent duplicate transaction credits, and provide support.</li>
            <li>Generate a requested AI coffee response and protect the service from misuse.</li>
            <li>Maintain, troubleshoot, secure, and improve the reliability of {{ appName }}.</li>
          </ul>
          <p>
            We do not sell personal information or use it for cross-app targeted advertising.
          </p>
        </div>
      </section>

      <section id="sharing" class="policy-section">
        <p class="section-number">04</p>
        <div>
          <h2>Sharing, service providers, and storage</h2>
          <p>
            We share information only as needed to operate {{ appName }}: with hosting,
            database, image-storage, and AI service providers that process information on
            our behalf; with Apple to the extent needed for in-app purchase processing;
            when you make content public in the community; or when disclosure is required
            to comply with applicable law, protect people, or secure the service.
          </p>
          <p>
            Our providers may process information in countries other than the one where you
            live. We use reasonable safeguards appropriate to the service and the nature of
            the information. No internet transmission or storage system is completely secure.
          </p>
          <p>
            We keep information for as long as needed to provide the service, resolve
            disputes, meet legal obligations, or protect the community. If you delete an
            account, the app permanently removes the profile and the account-specific
            records it stores, including coffee moments, replies, comments, conversation
            records, saved items, interactions, reports, and follow or block records.
            Content is removed from the service view; copies another member made before
            removal and limited provider backups may remain outside active service use.
          </p>
        </div>
      </section>

      <section id="choices" class="policy-section">
        <p class="section-number">05</p>
        <div>
          <h2>Your choices and controls</h2>
          <ul>
            <li>Update profile information through your personal settings.</li>
            <li>Choose what you share publicly before you publish a coffee moment or reply.</li>
            <li>Use the in-app report and block tools for community-safety concerns.</li>
            <li>Delete your account from Settings if you no longer want to use it.</li>
            <li>Control device-level notifications and system permissions in your device settings.</li>
          </ul>
          <p>
            You are responsible for avoiding personal or sensitive information in public
            posts and in AI questions. Public community content may be copied or re-shared
            by others after it is published.
          </p>
        </div>
      </section>

      <section class="policy-section">
        <p class="section-number">06</p>
        <div>
          <h2>Age and policy changes</h2>
          <p>
            {{ appName }} is not directed to children who are below the minimum age required
            to use online services where they live. We may update this Policy when our
            practices or the service change. The updated date above identifies the latest
            version, and continued use after an update is subject to the revised Policy.
          </p>
        </div>
      </section>

      <section id="contact" class="contact-panel">
        <p class="section-number">07</p>
        <div>
          <h2>Questions about privacy?</h2>
          <p>
            Contact us with a clear description of your question or request. We may need to
            verify that a request relates to your account before acting on it.
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

.policy-card {
  margin: 14px 0;
  padding: 18px 20px;
  border-radius: 16px;
  background: #fbf8fc;
}

.policy-card h3 {
  margin-bottom: 6px;
  color: #2c2536;
  font-size: 16px;
}

.policy-card p {
  margin-bottom: 0;
}

ul {
  margin: 0 0 16px;
  padding-left: 21px;
}

li + li {
  margin-top: 7px;
}

.callout {
  margin: 18px 0 0;
  padding: 16px 18px;
  border-left: 3px solid #3ba6cc;
  border-radius: 0 14px 14px 0;
  background: #eefbff;
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
