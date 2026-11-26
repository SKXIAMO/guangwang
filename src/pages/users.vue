<script setup lang="ts">
import { appIcon, appName, supportEmail } from '../site'

defineOptions({
  name: 'TermsPage',
})

const lastUpdated = 'November 20, 2026'
</script>

<template>
  <div class="legal-page terms-page">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="KinChat home">
          <img class="brand-mark" :src="appIcon" width="30" height="30" alt="">
        <span>{{ appName }}</span>
      </RouterLink>
      <nav class="site-nav" aria-label="Legal pages">
        <RouterLink to="/users">Terms of Use</RouterLink>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </nav>
    </header>

    <main class="shell">
      <article class="legal-card">
        <header class="hero">
          <p class="eyebrow">LEGAL</p>
          <h1>Terms of Use</h1>
          <p class="updated">Last updated: {{ lastUpdated }}</p>
          <p class="lead">
            These Terms set out the rules for using KinChat’s social, media, and digital
            purchase features.
          </p>
        </header>

        <aside class="summary" aria-label="Terms summary">
          <div>
            <span>Use respectfully</span>
            <p>Follow the community rules and respect other people’s rights and privacy.</p>
          </div>
          <div>
            <span>Keep your account secure</span>
            <p>Do not share your credentials or let anyone else use your account.</p>
          </div>
          <div>
            <span>Digital items</span>
            <p>Use virtual coins only through the features and store flows KinChat provides.</p>
          </div>
        </aside>

        <div class="content-grid">
          <nav class="contents" aria-label="On this page">
            <p>On this page</p>
            <a href="#acceptance">Acceptance & eligibility</a>
            <a href="#account">Your account</a>
            <a href="#service">Using KinChat</a>
            <a href="#conduct">Community rules</a>
            <a href="#content">Your content</a>
            <a href="#purchases">Digital purchases</a>
            <a href="#third-party">Third parties</a>
            <a href="#ownership">Intellectual property</a>
            <a href="#enforcement">Enforcement</a>
            <a href="#disclaimers">Disclaimers & liability</a>
            <a href="#contact">Updates & contact</a>
          </nav>

          <div class="sections">
            <section id="acceptance">
              <h2>1. Acceptance and eligibility</h2>
              <p>
                These Terms of Use (“Terms”) govern your access to and use of the KinChat
                app, website, and related services (the “Services”). By creating an
                account, downloading the app, or using the Services, you agree to these
                Terms and our <RouterLink to="/privacy">Privacy Policy</RouterLink>.
              </p>
              <p>You must meet the minimum age required to use the Services in your country or region. If you use KinChat for another person or organization, you confirm that you have authority to accept these Terms for them.</p>
            </section>

            <section id="account">
              <h2>2. Your account</h2>
              <ul>
                <li>Provide information that is accurate enough for us to operate and secure your account.</li>
                <li>Keep sign-in credentials and your device secure. Do not share your account or allow another person to use it.</li>
                <li>Notify us promptly if you believe your account has been accessed without permission.</li>
                <li>Do not create accounts for others without authorization or impersonate a person or organization.</li>
              </ul>
              <p>You are responsible for activity on your account unless you have notified us of unauthorized access and applicable law provides otherwise.</p>
            </section>

            <section id="service">
              <h2>3. Using KinChat</h2>
              <p>KinChat may offer profiles, community interactions, messaging, media sharing, voice or video features, and digital items. Features may vary by device, region, app version, or availability. We may improve, modify, or discontinue features when reasonably necessary to operate, secure, or develop the Services.</p>
              <p>You are responsible for your internet connection, device, and any carrier charges. Use the Services only for their intended purpose and in compliance with applicable law.</p>
            </section>

            <section id="conduct">
              <h2>4. Community rules</h2>
              <p>You must not use KinChat to:</p>
              <ul>
                <li>break the law or encourage illegal, fraudulent, or dangerous activity;</li>
                <li>exploit, endanger, or sexualize minors;</li>
                <li>harass, threaten, stalk, intimidate, or unlawfully discriminate against others;</li>
                <li>post or send abusive, hateful, deceptive, infringing, or unlawfully intimate content;</li>
                <li>share another person’s private information, image, or communications without permission;</li>
                <li>send spam, scams, phishing attempts, unsolicited advertising, or malware;</li>
                <li>interfere with the Services, bypass security, scrape data, reverse engineer, or use unauthorized automation; or</li>
                <li>buy, sell, transfer, or manipulate accounts, digital items, or in-app currency outside features we expressly provide.</li>
              </ul>
              <p>Use the block and report tools when you encounter a possible violation. Reports help us review potential misuse, but do not guarantee an immediate outcome.</p>
            </section>

            <section id="content">
              <h2>5. Your content</h2>
              <p>You retain ownership of content you create and share. You grant KinChat a non-exclusive, worldwide, royalty-free license to host, store, reproduce, technically adapt, display, and distribute that content only as needed to operate, improve, protect, and provide the Services to the audience you choose.</p>
              <p>This license ends when your content is deleted from the Services, except where it has been shared with others, remains in backups for a limited period, or must be retained for legal, safety, or dispute-resolution reasons. You confirm that you have the rights, permissions, and consents necessary for the content you share.</p>
            </section>

            <section id="purchases">
              <h2>6. Digital purchases and virtual coins</h2>
              <p>KinChat may offer one-time purchases of virtual coins or other digital items. Prices, available items, and feature-specific terms are shown before purchase. The relevant app-store provider processes the transaction under its own terms and may require you to use its account.</p>
              <ul>
                <li>Virtual coins are a limited, personal, non-transferable license to use eligible in-app features. They are not money, have no cash value, and cannot be exchanged or redeemed for cash except where required by law.</li>
                <li>Purchases are generally final, subject to applicable law and the refund rules of the store through which you purchased. Contact that store for platform billing or refund requests.</li>
                <li>Do not obtain coins or digital items through unauthorized means, or sell, trade, transfer, or attempt to manipulate them outside KinChat.</li>
                <li>We may change prices or available items prospectively. Any change will be shown before a new purchase is completed.</li>
              </ul>
            </section>

            <section id="third-party">
              <h2>7. Third-party services</h2>
              <p>The Services may include external links, web content, app-store features, or integrations offered by third parties. Those services are governed by their own terms and privacy practices. We do not control and are not responsible for third-party content, availability, or transactions.</p>
            </section>

            <section id="ownership">
              <h2>8. Intellectual property</h2>
              <p>KinChat and its software, designs, names, logos, and other service content are protected by applicable intellectual-property laws. Except for the limited right to use the Services under these Terms, we do not grant you any ownership or license in our intellectual property.</p>
            </section>

            <section id="enforcement">
              <h2>9. Suspension and termination</h2>
              <p>We may remove content, limit features, suspend, or terminate an account if we reasonably believe there is a violation of these Terms, a security or fraud risk, or a legal requirement. Where appropriate, we may provide notice and an opportunity to appeal. You may stop using KinChat at any time and can request account deletion through the app or support.</p>
            </section>

            <section id="disclaimers">
              <h2>10. Disclaimers and liability</h2>
              <p>KinChat is provided on an “as available” basis. To the fullest extent permitted by law, we do not guarantee uninterrupted, secure, error-free, or always-available service, or that user content is accurate, safe, or lawful. Please use good judgment when interacting with others and do not rely on KinChat for emergency services.</p>
              <p>To the extent permitted by law, KinChat is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Services. Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited.</p>
            </section>

            <section id="contact">
              <h2>11. Updates and contact</h2>
              <p>We may update these Terms when the Services, our operations, or legal obligations change. We will post updated Terms here and revise the “Last updated” date. If a change is material, we will give additional notice where required by law. Continuing to use the Services after an update takes effect means you accept it to the extent permitted by law.</p>
              <p>If you have questions about these Terms, email <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>
            </section>
          </div>
        </div>
      </article>
    </main>

    <footer class="site-footer">
      <span>© {{ appName }}</span>
      <RouterLink to="/users">Terms of Use</RouterLink>
      <RouterLink to="/privacy">Privacy Policy</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.legal-page { min-height: 100%; color: #29334a; background: radial-gradient(circle at 100% 0, rgb(73 158 223 / 18%), transparent 32rem), linear-gradient(180deg, #f7fbff 0%, #fff 38%, #f5f8fb 100%); }
.site-header, .site-footer, .shell { box-sizing: border-box; width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
.site-header { display: flex; align-items: center; justify-content: space-between; min-height: 76px; gap: 24px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: #202a44; font-size: 18px; font-weight: 800; letter-spacing: -.02em; text-decoration: none; }
.brand-mark { border-radius: 9px; }
.site-nav, .site-footer { display: flex; align-items: center; gap: 18px; }
.site-nav a, .site-footer a { color: #53617c; font-size: 14px; font-weight: 650; text-decoration: none; }
.site-nav a.router-link-exact-active, .site-nav a:hover, .site-footer a:hover { color: #237daf; }
.shell { margin-top: 24px; }
.legal-card { overflow: hidden; background: #fff; border: 1px solid #e8edf3; border-radius: 24px; box-shadow: 0 20px 60px rgb(37 47 77 / 9%); }
.hero { padding: 64px 72px 44px; color: #fff; background: linear-gradient(118deg, #164f78 0%, #237daf 54%, #57add9 100%); }
.eyebrow { margin: 0 0 12px; color: #d9f3ff; font-size: 12px; font-weight: 800; letter-spacing: .14em; }
h1, h2, p { margin-top: 0; }
h1 { margin-bottom: 10px; font-size: clamp(32px, 5vw, 48px); line-height: 1.08; letter-spacing: -.045em; }
.updated { margin-bottom: 24px; color: #dff3ff; font-size: 14px; }
.lead { max-width: 660px; margin-bottom: 0; color: #f3fbff; font-size: 18px; line-height: 1.65; }
.summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin: 36px 72px 0; padding: 20px 22px; color: #334b5e; background: #edf8fc; border: 1px solid #d1ebf4; border-radius: 14px; }
.summary span { display: block; margin-bottom: 6px; color: #17618d; font-size: 13px; font-weight: 800; }
.summary p { margin: 0; font-size: 14px; line-height: 1.6; }
.content-grid { display: grid; grid-template-columns: 210px minmax(0, 1fr); gap: 54px; padding: 42px 72px 76px; }
.contents { position: sticky; top: 18px; align-self: start; display: grid; gap: 8px; padding: 18px; background: #fafcff; border: 1px solid #e7f0f5; border-radius: 14px; }
.contents p { margin: 0 0 4px; color: #253a4c; font-size: 13px; font-weight: 800; }
.contents a { color: #61778a; font-size: 13px; line-height: 1.35; text-decoration: none; }
.contents a:hover { color: #237daf; }
section { scroll-margin-top: 24px; }
section + section { margin-top: 44px; padding-top: 42px; border-top: 1px solid #e8eef2; }
.sections h2 { margin-bottom: 16px; color: #202a44; font-size: 23px; line-height: 1.3; letter-spacing: -.02em; }
.sections p, .sections li { color: #536a7a; font-size: 16px; line-height: 1.78; }
.sections p { margin-bottom: 16px; }
.sections ul { margin: 0 0 16px; padding-left: 22px; }
.sections li + li { margin-top: 9px; }
.sections a { color: #1974a8; font-weight: 700; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.site-footer { justify-content: center; min-height: 96px; color: #788b9a; font-size: 13px; }
a:focus-visible { outline: 3px solid rgb(62 158 210 / 48%); outline-offset: 3px; border-radius: 4px; }
@media (max-width: 820px) { .hero, .content-grid { padding-right: 32px; padding-left: 32px; } .summary { grid-template-columns: 1fr; margin-right: 32px; margin-left: 32px; } .content-grid { grid-template-columns: 1fr; gap: 30px; } .contents { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .site-header, .site-footer, .shell { width: min(100% - 32px, 1120px); } .site-header { min-height: 68px; } .site-nav { gap: 12px; } .site-nav a { font-size: 12px; } .legal-card { border-radius: 18px; } .hero { padding: 42px 24px 32px; } .lead { font-size: 16px; } .summary { margin: 24px 24px 0; padding: 18px; } .content-grid { gap: 28px; padding: 30px 24px 52px; } .contents { grid-template-columns: 1fr; } .sections h2 { font-size: 21px; } .sections p, .sections li { font-size: 15px; line-height: 1.72; } section + section { margin-top: 34px; padding-top: 32px; } .site-footer { flex-wrap: wrap; gap: 9px 16px; padding: 22px 0; text-align: center; } }
</style>
