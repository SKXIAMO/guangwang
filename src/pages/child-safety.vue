<script setup lang="ts">
defineOptions({
  name: 'ChildSafetyPage',
})

const appName = 'HumChat'
const supportEmail = 'lanniekova@gmail.com'
const effectiveDate = '24 November 2026'

const contents = [
  ['commitment', '1. Our commitment'],
  ['reporting', '2. Reporting safety concerns'],
  ['enforcement', '3. Review and enforcement'],
  ['contact', '4. Child safety contact'],
]
</script>

<template>
  <main class="legal-page">
    <header class="hero">
      <div class="hero__inner">
        <a class="brand" href="/" aria-label="HumChat home">
          <span class="brand__mark">H</span>
          <span>{{ appName }}</span>
        </a>
        <p class="eyebrow">SAFETY CENTRE</p>
        <h1>Child Safety Standards</h1>
        <p class="hero__summary">
          HumChat is committed to preventing child sexual abuse and exploitation and maintaining a safe, respectful community.
        </p>
        <p class="date">Effective date: {{ effectiveDate }} · Last updated: {{ effectiveDate }}</p>
      </div>
    </header>

    <article class="document">
      <aside class="quick-facts" aria-label="Child safety highlights">
        <div>
          <strong>Zero tolerance</strong>
          <span>CSAE and CSAM are prohibited in every form.</span>
        </div>
        <div>
          <strong>Report concerns</strong>
          <span>Use in-app reporting or contact our safety point of contact.</span>
        </div>
        <div>
          <strong>Appropriate action</strong>
          <span>We review reports and act under our policies and applicable law.</span>
        </div>
      </aside>

      <nav class="toc" aria-label="Child Safety Standards contents">
        <span>On this page</span>
        <a v-for="([id, label]) in contents" :key="id" :href="`#${id}`">{{ label }}</a>
      </nav>

      <section id="commitment">
        <h2><span>1</span> Our commitment</h2>
        <p>HumChat has zero tolerance for child sexual abuse and exploitation (CSAE) and child sexual abuse material (CSAM). You must not create, upload, share, request, promote or facilitate any content or behaviour that sexually exploits, abuses or endangers a child.</p>
        <p>HumChat is intended for adults aged 18 and over. We prohibit conduct including grooming, sexual extortion, trafficking, sexualisation of minors and the exchange or distribution of CSAM.</p>
      </section>

      <section id="reporting">
        <h2><span>2</span> Reporting safety concerns</h2>
        <p>Users can report safety concerns through the reporting tools provided in the App or by contacting <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>. Please include enough information for us to identify the relevant account, content or interaction.</p>
        <p>If a child may be in immediate danger, contact local emergency services or the appropriate child-protection authority without delay.</p>
      </section>

      <section id="enforcement">
        <h2><span>3</span> Review and enforcement</h2>
        <p>When we obtain actual knowledge of suspected CSAM or CSAE, we review the report and take appropriate action under our policies and applicable law. This may include removing or restricting access to content, suspending or terminating accounts, preserving relevant information and reporting confirmed CSAM to the appropriate authorities where required.</p>
        <p>We may cooperate with authorised law-enforcement agencies and child-protection organisations where required or appropriate to protect children and comply with applicable law.</p>
      </section>

      <section id="contact">
        <h2><span>4</span> Child safety contact</h2>
        <p><a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a> is HumChat’s designated child-safety point of contact for notices from Google Play, users and authorised authorities about CSAE or CSAM. This contact can explain our reporting, review and enforcement process.</p>
        <p>For general privacy, account-deletion and data-rights requests, see our <a href="/privacy">Privacy Policy</a>.</p>
      </section>
    </article>
  </main>
</template>

<style scoped>
:global(*) { box-sizing: border-box; }
:global(html) { scroll-behavior: smooth; }
:global(body) { margin: 0; background: #f7f7fc; color: #222337; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }

.legal-page { min-height: 100vh; padding-bottom: 64px; }
.hero { overflow: hidden; background: radial-gradient(circle at 80% 10%, rgba(196, 255, 113, .28), transparent 28%), linear-gradient(135deg, #2d2161 0%, #7354d8 50%, #997cf5 100%); color: #fff; }
.hero__inner, .document { width: min(100% - 32px, 900px); margin: 0 auto; }
.hero__inner { padding: 30px 0 56px; }
.brand { display: inline-flex; align-items: center; gap: 9px; color: #fff; text-decoration: none; font-size: 18px; font-weight: 800; letter-spacing: -.02em; }
.brand__mark { display: grid; width: 28px; height: 28px; place-items: center; border-radius: 9px; background: #b7ff64; color: #382477; font-size: 15px; }
.eyebrow { margin: 42px 0 10px; color: #bfff77; font-size: 11px; font-weight: 800; letter-spacing: .13em; }
h1 { max-width: 680px; margin: 0; font-size: clamp(38px, 7vw, 60px); letter-spacing: -.055em; line-height: 1; }
.hero__summary { max-width: 650px; margin: 18px 0 12px; color: #f4f1ff; font-size: 17px; line-height: 1.65; }
.date { margin: 0; color: #ded7ff; font-size: 13px; }
.document { margin-top: -22px; }
.quick-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; overflow: hidden; border: 1px solid #e7e3f4; border-radius: 18px; background: #e7e3f4; box-shadow: 0 16px 36px rgba(44, 27, 101, .1); }
.quick-facts div { min-height: 132px; padding: 20px; background: #fff; }
.quick-facts strong { display: block; margin-bottom: 8px; color: #4c348f; font-size: 13px; }
.quick-facts span { color: #646579; font-size: 13px; line-height: 1.5; }
.toc { display: flex; flex-wrap: wrap; gap: 8px 18px; padding: 30px 2px 12px; font-size: 13px; }
.toc span { color: #737386; font-weight: 700; }
.toc a { color: #5b3ab7; text-decoration: none; }
section { padding: 34px 0; border-top: 1px solid #e4e3ec; scroll-margin-top: 18px; }
h2 { display: flex; align-items: center; gap: 12px; margin: 0 0 16px; color: #29233f; font-size: 24px; letter-spacing: -.025em; }
h2 span { display: grid; width: 28px; height: 28px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: #e7ddff; color: #5b3ab7; font-size: 13px; }
p { margin: 0 0 14px; color: #505166; font-size: 15px; line-height: 1.78; }
a { color: #5d3cc2; font-weight: 650; }

@media (max-width: 650px) {
  .hero__inner, .document { width: min(100% - 24px, 900px); }
  .hero__inner { padding-bottom: 46px; }
  .quick-facts { grid-template-columns: 1fr; }
  .quick-facts div { min-height: auto; }
  .toc { gap: 8px 14px; }
  h2 { font-size: 21px; }
}
</style>
