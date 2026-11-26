<script setup lang="ts">
import discoverScreen from '../assets/kinchat-discover.webp'
import watchScreen from '../assets/kinchat-watch.webp'
import { appIcon, appName, supportEmail } from '../site'

const features = [
  {
    title: 'Discover creators',
    description: 'Browse artists by interest, from comedy and dance to music and more.',
  },
  {
    title: 'Watch and share',
    description: 'Watch short videos from the community and share moments of your own.',
  },
  {
    title: 'Stay connected',
    description: 'Follow creators, join the conversation in comments, or send a message.',
  },
]
</script>

<template>
  <div class="landing">
    <header class="site-header">
      <div class="frame header-inner">
        <RouterLink class="wordmark" to="/" aria-label="KinChat home">
          <img :src="appIcon" width="40" height="40" alt="">
          <span>{{ appName }}</span>
        </RouterLink>
        <nav class="header-nav" aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#support">Support</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="frame hero" aria-labelledby="home-heading">
        <div class="hero-copy">
          <p class="platform">
            <span aria-hidden="true" /> Android app
          </p>
          <h1 id="home-heading">
            Creativity is<br><em>better together.</em>
          </h1>
          <p class="intro">
            Discover creators, share short videos, and connect with people who enjoy the same things you do.
          </p>
          <a class="primary-link" href="#explore">
            Explore KinChat <span aria-hidden="true">↓</span>
          </a>
        </div>

        <figure class="app-preview" aria-label="KinChat app interface">
          <div class="orbit" aria-hidden="true" />
          <img
            class="screen screen-watch"
            :src="watchScreen"
            width="750"
            height="1540"
            alt="Video detail with creator info, follow button, and reactions"
          >
          <img
            class="screen screen-discover"
            :src="discoverScreen"
            width="750"
            height="1540"
            alt="Discovery feed with featured creators, categories, and videos"
            fetchpriority="high"
          >
        </figure>
      </section>

      <section id="explore" class="frame explore" aria-labelledby="explore-heading">
        <h2 id="explore-heading">Explore KinChat</h2>
        <div class="feature-grid">
          <article v-for="feature in features" :key="feature.title" class="feature">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </section>

      <section id="support" class="frame support" aria-labelledby="support-heading">
        <div class="support-panel">
          <div>
            <h2 id="support-heading">Need help?</h2>
            <p>Get in touch with KinChat support.</p>
          </div>
          <a class="email-link" :href="'mailto:' + supportEmail">
            {{ supportEmail }} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="frame site-footer">
      <span>© {{ appName }}</span>
      <nav aria-label="Legal">
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
        <RouterLink to="/users">Terms of Use</RouterLink>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.landing {
  --muted: #b8aab0;
  --line: rgb(255 229 232 / 13%);
  --accent: #ff9b74;
  min-height: 100vh;
  background: #130f14;
  color: #fff5f0;
  font-family: 'DM Sans', system-ui, sans-serif;
}

.frame {
  width: min(1264px, calc(100% - 112px));
  margin-inline: auto;
}

.site-header {
  border-bottom: 1px solid var(--line);
}

.header-inner,
.header-nav,
.wordmark,
.site-footer,
.site-footer nav {
  display: flex;
  align-items: center;
}

.header-inner,
.site-footer {
  justify-content: space-between;
  gap: 18px;
}

.header-inner {
  min-height: 82px;
}

.wordmark {
  gap: 11px;
  font-size: 24px;
  font-weight: 750;
  letter-spacing: -.045em;
}

.wordmark img {
  border-radius: 12px;
}

.header-nav,
.site-footer nav {
  gap: clamp(20px, 3.5vw, 46px);
}

.header-nav a,
.site-footer a {
  color: var(--muted);
  font-size: 15px;
  font-weight: 600;
}

.header-nav a:hover,
.site-footer a:hover {
  color: #fff5f0;
}

.hero {
  display: grid;
  grid-template-columns: 1.04fr 1fr;
  align-items: center;
  gap: clamp(28px, 4vw, 64px);
  padding-block: 52px 70px;
}

.hero-copy {
  min-width: 0;
  padding-block: 24px;
}

.platform {
  display: flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  margin-bottom: 24px;
  color: #ffd2bf;
  font-size: 13px;
  font-weight: 600;
}

.platform span {
  inline-size: 8px;
  block-size: 8px;
  border-radius: 50%;
  background: #ff956d;
  box-shadow: 0 0 14px rgb(255 109 99 / 65%);
}

h1 {
  font-size: clamp(48px, 6.2vw, 92px);
  font-weight: 750;
  letter-spacing: -.055em;
  line-height: .98;
}

h1 em {
  color: var(--accent);
  background: linear-gradient(93deg, #ffc286 3%, #ff9274 55%, #ff7b95);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
}

.intro {
  max-width: 420px;
  margin-block: 25px 32px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.65;
  text-wrap: pretty;
}

.primary-link,
.email-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  min-height: 48px;
  padding: 11px 20px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 750;
}

.primary-link {
  color: #261319;
  background: linear-gradient(115deg, #ffb975, #ff9780 65%, #ff8295);
}

.primary-link:hover {
  background: #ffb196;
}

.app-preview {
  position: relative;
  isolation: isolate;
  aspect-ratio: 1.075;
  overflow: hidden;
  border: 1px solid rgb(255 183 172 / 21%);
  border-radius: 32px;
  background:
    radial-gradient(circle at 72% 65%, rgb(252 97 111 / 36%), transparent 52%),
    radial-gradient(ellipse at 29% 40%, rgb(248 139 78 / 24%), transparent 62%),
    #24151f;
}

.app-preview::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: radial-gradient(rgb(255 216 193 / 24%) 1px, transparent 1px);
  background-size: 23px 23px;
  mask-image: linear-gradient(140deg, #000, transparent 75%);
  content: '';
}

.orbit {
  position: absolute;
  top: 21%;
  left: -9%;
  width: 119%;
  height: 61%;
  transform: rotate(-26deg);
  border: 1px solid rgb(255 183 158 / 25%);
  border-radius: 50%;
}

.screen {
  position: absolute;
  display: block;
  height: auto;
  border: clamp(4px, .55vw, 8px) solid #1a141a;
  border-radius: clamp(14px, 2.25vw, 31px);
  outline: 1px solid rgb(255 222 209 / 44%);
  background: #0a0a0a;
  box-shadow: 0 24px 48px rgb(12 3 11 / 55%);
}

.screen-watch {
  top: 13%;
  right: 10.5%;
  width: 34%;
  transform: rotate(11deg);
}

.screen-discover {
  top: 9%;
  left: 16%;
  width: 38%;
  transform: rotate(-9deg);
}

.explore,
.support {
  scroll-margin-top: 24px;
}

.explore {
  padding-block: 35px 62px;
  border-top: 1px solid var(--line);
}

.explore h2,
.support h2 {
  font-size: clamp(30px, 3.35vw, 46px);
  font-weight: 740;
  letter-spacing: -.045em;
  line-height: 1.08;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 24px;
}

.feature {
  padding: 25px 24px 28px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: #1e171e;
}

.feature::before {
  display: block;
  width: 23px;
  height: 3px;
  margin-bottom: 19px;
  border-radius: 3px;
  background: linear-gradient(90deg, #ffae73, #ff7592);
  content: '';
}

.feature h3 {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -.025em;
}

.feature p,
.support p {
  max-width: 33ch;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
  text-wrap: pretty;
}

.support {
  padding-bottom: 50px;
}

.support-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: clamp(22px, 4vw, 46px);
  border: 1px solid rgb(255 161 139 / 24%);
  border-radius: 23px;
  background: linear-gradient(104deg, #301d26, #211721);
}

.support h2 {
  margin-bottom: 8px;
}

.email-link {
  max-width: 100%;
  border: 1px solid rgb(255 163 141 / 40%);
  color: #ffd2bd;
  overflow-wrap: anywhere;
}

.email-link:hover {
  background: rgb(255 172 150 / 10%);
}

.site-footer {
  min-height: 80px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 14px;
}

a:focus-visible {
  outline: 2px solid #ffb196;
  outline-offset: 4px;
}

@media (max-width: 1100px) {
  .frame { width: calc(100% - 64px); }
}

@media (max-width: 780px) {
  .frame { width: calc(100% - 40px); }
  .header-inner { min-height: 70px; }
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding-block: 40px 44px;
  }
  .hero-copy { padding: 0; }
  h1 { font-size: clamp(42px, 12vw, 76px); }
  .intro { margin-block: 20px 24px; }
  .app-preview { max-width: 610px; border-radius: 24px; }
  .screen { border-radius: clamp(14px, 4vw, 25px); }
  .explore { padding-block: 27px 40px; }
  .feature-grid { grid-template-columns: 1fr; gap: 10px; margin-top: 18px; }
  .feature { padding: 20px; }
  .feature::before { margin-bottom: 12px; }
  .support { padding-bottom: 36px; }
}

@media (max-width: 400px) {
  .frame { width: calc(100% - 32px); }
  .wordmark { font-size: 21px; }
  .wordmark img { width: 34px; height: 34px; border-radius: 9px; }
  .header-nav, .site-footer nav { gap: 16px; }
  .site-footer { flex-wrap: wrap; gap: 8px 16px; padding-block: 16px; }
  .site-footer a { font-size: 13px; }
}
</style>
