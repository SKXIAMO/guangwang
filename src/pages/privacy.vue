<script setup lang="ts">
defineOptions({
  name: 'PrivacyPage',
})

const appName = 'KinChat'
const supportEmail = '639293382@qq.com'
const lastUpdated = 'November 20, 2026'
</script>

<template>
  <div class="legal-page privacy-page">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="KinChat home">
        <span class="brand-mark">K</span>
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
          <h1>Privacy Policy</h1>
          <p class="updated">Last updated: {{ lastUpdated }}</p>
          <p class="lead">
            This policy explains how {{ appName }} handles personal information when you use
            our app, website, or support channels.
          </p>
        </header>

        <aside class="summary" aria-label="Privacy summary">
          <div>
            <span>What we use</span>
            <p>Account, device, activity, content, purchase, and support data.</p>
          </div>
          <div>
            <span>Why</span>
            <p>To operate, secure, improve, measure, and support KinChat.</p>
          </div>
          <div>
            <span>Your controls</span>
            <p>Permissions, notifications, blocking, reporting, and account deletion.</p>
          </div>
        </aside>

        <div class="content-grid">
          <nav class="contents" aria-label="On this page">
            <p>On this page</p>
            <a href="#scope">Scope</a>
            <a href="#data">Information we handle</a>
            <a href="#use">How we use it</a>
            <a href="#share">Sharing</a>
            <a href="#retain">Retention & deletion</a>
            <a href="#rights">Your choices & rights</a>
            <a href="#transfers">International transfers</a>
            <a href="#children">Children’s privacy</a>
            <a href="#security">Security</a>
            <a href="#contact">Updates & contact</a>
          </nav>

          <div class="sections">
            <section id="scope">
              <h2>1. Scope</h2>
              <p>
                This Privacy Policy applies to the KinChat mobile application, website, and
                support channels (collectively, the “Services”). “KinChat”, “we”, “us”,
                and “our” mean the operator of these Services. This policy does not cover
                independent sites or services that you access through an external link.
              </p>
            </section>

            <section id="data">
              <h2>2. Information we handle</h2>
              <ul>
                <li><strong>Account and profile data:</strong> account ID, display name, profile photo, settings, and information you submit to sign in or update your profile. Authentication data may be stored on your device to keep you signed in.</li>
                <li><strong>Content and interactions:</strong> content you choose to create or share, such as messages, comments, photos, videos, audio, reports, block choices, and information about the people with whom you interact.</li>
                <li><strong>Device and usage data:</strong> device and operating-system details, app version, language, time zone, IP and network data, installation or device identifiers, referral information, diagnostics, app events, and security signals such as VPN status where available.</li>
                <li><strong>Notifications:</strong> a push token and notification preferences if you enable notifications.</li>
                <li><strong>Purchase data:</strong> product ID, price and currency, order or transaction reference, purchase token, and purchase status needed to deliver and protect a digital-item purchase. The relevant app-store provider processes payment credentials; we do not receive your full card or bank-account details.</li>
                <li><strong>Support data:</strong> the information and attachments you choose to send when you contact us.</li>
              </ul>
              <h3>Camera, microphone, and media permissions</h3>
              <p>
                KinChat requests camera, microphone, or photo and media access only when
                you choose a feature that needs it, such as a video call, recording, or
                uploading media. You can refuse or revoke a permission in device settings;
                the related feature may then be unavailable.
              </p>
            </section>

            <section id="use">
              <h2>3. How we use information</h2>
              <p>We use information to provide and maintain KinChat; enable communications and media features; deliver purchased digital items; respond to support requests; send service notifications; protect users and prevent fraud or abuse; diagnose errors; improve features; and measure app and campaign performance.</p>
              <p>Where required by law, we rely on performance of our agreement with you, our legitimate interests in security and service improvement, legal obligations, or your consent.</p>
            </section>

            <section id="share">
              <h2>4. When information is shared</h2>
              <ul>
                <li><strong>With other users:</strong> profile information, content, and activity you make available through a sharing or communication feature may be visible to its intended audience.</li>
                <li><strong>With providers:</strong> providers supporting hosting, delivery, diagnostics, notifications, analytics, attribution, or support may process information for us. KinChat may use Google Firebase for messaging and analytics, Adjust for attribution and measurement, and Meta technologies for app-event and campaign measurement.</li>
                <li><strong>With app stores:</strong> we exchange purchase information as necessary to verify transactions and provide digital items.</li>
                <li><strong>For law and safety:</strong> we may disclose data to comply with law, respond to valid requests, protect rights and safety, or prevent fraud and abuse.</li>
                <li><strong>In a business transfer:</strong> data may be transferred as part of a merger, financing, acquisition, or sale of assets, subject to applicable law.</li>
              </ul>
              <p>Analytics and attribution providers may process identifiers and event data under their own terms. If your local law gives you a choice about targeted advertising or data sharing, you may contact us to exercise that choice.</p>
            </section>

            <section id="retain">
              <h2>5. Retention and account deletion</h2>
              <p>We retain information only as long as reasonably necessary for the purposes in this policy, including providing the Services, resolving disputes, meeting legal obligations, and keeping the Services secure.</p>
              <p>You can start an account-deletion request through the in-app <em>Delete Account</em> option, if available, or by contacting us. Following a valid request, we delete, de-identify, or isolate information unless it must be retained for legal, accounting, fraud-prevention, safety, or dispute-resolution purposes. Secure backup copies may remain for a limited period before being overwritten.</p>
            </section>

            <section id="rights">
              <h2>6. Your choices and rights</h2>
              <ul>
                <li>Update information and settings available in the app.</li>
                <li>Manage camera, microphone, media, and notification permissions in your device settings.</li>
                <li>Use in-app block and report tools to manage interactions with other users.</li>
                <li>Request access, correction, deletion, portability, restriction, or objection where those rights apply.</li>
                <li>Withdraw consent when processing is based on consent; this does not affect earlier processing.</li>
              </ul>
              <p>For a privacy request, email <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a> from the address associated with your account and describe your request. We may need to verify your identity before responding.</p>
            </section>

            <section id="transfers">
              <h2>7. International transfers</h2>
              <p>We and our providers may process information in countries other than where you live. When information is transferred internationally, we use safeguards required by applicable law and limit access to what is necessary for the relevant purpose.</p>
            </section>

            <section id="children">
              <h2>8. Children’s privacy</h2>
              <p>KinChat is not directed to children. Do not use the Services if you are below the minimum age permitted in your country or region. If you believe a child has provided information without appropriate consent, contact us so we can investigate and take appropriate action.</p>
            </section>

            <section id="security">
              <h2>9. Security</h2>
              <p>We use reasonable administrative, technical, and organizational measures to protect information. No online service can guarantee absolute security. Please keep your credentials private and contact us promptly if you suspect unauthorized account access.</p>
            </section>

            <section id="contact">
              <h2>10. Updates and contact</h2>
              <p>We may update this policy when the Services, our practices, or legal obligations change. We will post the revised version here and update the “Last updated” date. Where required, we will give additional notice of material changes.</p>
              <p>For privacy questions or requests, contact <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.</p>
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
.legal-page { min-height: 100%; color: #29334a; background: radial-gradient(circle at 0 0, rgb(113 92 255 / 16%), transparent 31rem), linear-gradient(180deg, #f8f9ff 0%, #fff 38%, #f6f8fc 100%); }
.site-header, .site-footer, .shell { box-sizing: border-box; width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
.site-header { display: flex; align-items: center; justify-content: space-between; min-height: 76px; gap: 24px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: #202a44; font-size: 18px; font-weight: 800; letter-spacing: -.02em; text-decoration: none; }
.brand-mark { display: grid; width: 30px; height: 30px; place-items: center; color: #fff; background: linear-gradient(135deg, #7865f5, #4b9ff5); border-radius: 10px; box-shadow: 0 8px 20px rgb(90 100 220 / 28%); }
.site-nav, .site-footer { display: flex; align-items: center; gap: 18px; }
.site-nav a, .site-footer a { color: #53617c; font-size: 14px; font-weight: 650; text-decoration: none; }
.site-nav a.router-link-exact-active, .site-nav a:hover, .site-footer a:hover { color: #5142c9; }
.shell { margin-top: 24px; }
.legal-card { overflow: hidden; background: #fff; border: 1px solid #e8ebf4; border-radius: 24px; box-shadow: 0 20px 60px rgb(37 47 77 / 9%); }
.hero { padding: 64px 72px 44px; color: #fff; background: linear-gradient(118deg, #342d77 0%, #5142c9 54%, #5f8de8 100%); }
.eyebrow { margin: 0 0 12px; color: #d9e5ff; font-size: 12px; font-weight: 800; letter-spacing: .14em; }
h1, h2, h3, p { margin-top: 0; }
h1 { margin-bottom: 10px; font-size: clamp(32px, 5vw, 48px); line-height: 1.08; letter-spacing: -.045em; }
.updated { margin-bottom: 24px; color: #dbe4ff; font-size: 14px; }
.lead { max-width: 660px; margin-bottom: 0; color: #f6f7ff; font-size: 18px; line-height: 1.65; }
.summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin: 36px 72px 0; padding: 20px 22px; color: #33415f; background: #f3f1ff; border: 1px solid #ded9ff; border-radius: 14px; }
.summary span { display: block; margin-bottom: 6px; color: #443a9e; font-size: 13px; font-weight: 800; }
.summary p { margin: 0; font-size: 14px; line-height: 1.6; }
.content-grid { display: grid; grid-template-columns: 210px minmax(0, 1fr); gap: 54px; padding: 42px 72px 76px; }
.contents { position: sticky; top: 18px; align-self: start; display: grid; gap: 8px; padding: 18px; background: #fafbff; border: 1px solid #edf0f7; border-radius: 14px; }
.contents p { margin: 0 0 4px; color: #25304c; font-size: 13px; font-weight: 800; }
.contents a { color: #61708c; font-size: 13px; line-height: 1.35; text-decoration: none; }
.contents a:hover { color: #4e42c3; }
section { scroll-margin-top: 24px; }
section + section { margin-top: 44px; padding-top: 42px; border-top: 1px solid #ebedf3; }
.sections h2 { margin-bottom: 16px; color: #202a44; font-size: 23px; line-height: 1.3; letter-spacing: -.02em; }
.sections h3 { margin: 28px 0 10px; color: #35425f; font-size: 17px; }
.sections p, .sections li { color: #53617a; font-size: 16px; line-height: 1.78; }
.sections p { margin-bottom: 16px; }
.sections ul { margin: 0 0 16px; padding-left: 22px; }
.sections li + li { margin-top: 9px; }
.sections strong { color: #35415d; }
.sections a { color: #4940bd; font-weight: 700; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.site-footer { justify-content: center; min-height: 96px; color: #78849a; font-size: 13px; }
a:focus-visible { outline: 3px solid rgb(93 127 238 / 52%); outline-offset: 3px; border-radius: 4px; }
@media (max-width: 820px) { .hero, .content-grid { padding-right: 32px; padding-left: 32px; } .summary { grid-template-columns: 1fr; margin-right: 32px; margin-left: 32px; } .content-grid { grid-template-columns: 1fr; gap: 30px; } .contents { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .site-header, .site-footer, .shell { width: min(100% - 32px, 1120px); } .site-header { min-height: 68px; } .site-nav { gap: 12px; } .site-nav a { font-size: 12px; } .legal-card { border-radius: 18px; } .hero { padding: 42px 24px 32px; } .lead { font-size: 16px; } .summary { margin: 24px 24px 0; padding: 18px; } .content-grid { gap: 28px; padding: 30px 24px 52px; } .contents { grid-template-columns: 1fr; } .sections h2 { font-size: 21px; } .sections p, .sections li { font-size: 15px; line-height: 1.72; } section + section { margin-top: 34px; padding-top: 32px; } .site-footer { flex-wrap: wrap; gap: 9px 16px; padding: 22px 0; text-align: center; } }
</style>
