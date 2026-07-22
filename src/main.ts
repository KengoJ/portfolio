import './style.css'

type Work = {
  number: string
  title: string
  description: string
  url: string
  image: string
  alt: string
  technologies: string[]
}

const works: Work[] = [
  {
    number: '01',
    title: 'Sunday Flower',
    description: '職業訓練校で制作した、曙橋駅近くの花屋のWebサイト(架空)です。店舗のやさしい空気感が伝わるデザインを目指しました。',
    url: 'https://intp.site/3118/SundayFlower/',
    image: './images/sunday-flower.png',
    alt: 'Sunday Flowerのトップページ。花束の写真と店舗名が大きく表示されている',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
  },
  {
    number: '02',
    title: 'SNS BBS',
    description: 'Discord風のUIを採用した掲示板Webアプリです。チャンネルごとの会話を直感的に楽しめる構成にしました。',
    url: 'https://snsappnew.onrender.com',
    image: './images/sns-bbs.png',
    alt: 'SNS BBSのログイン画面。濃い色の背景にログインフォームが表示されている',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Codex'],
  },
  {
    number: '03',
    title: '指値・逆指値計算機！！',
    description: '株の指値・逆指値をすばやく計算するためのWebアプリです。投資判断に必要な数値を迷わず入力できるUIを設計しました。',
    url: 'https://kengoj.github.io/sashine-keisan/',
    image: './images/sashine-keisan.png',
    alt: '指値・逆指値計算機の画面。株価などを入力するフォームと計算結果欄が表示されている',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vite', 'Google AI Studio'],
  },
]

const skillGroups = [
  { label: '実務経験', note: '車載開発 約2年', skills: ['C', 'C++', 'VBA'] },
  { label: '個人開発・学習経験', note: 'Web開発を継続学習中', skills: ['Python', 'PHP', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { label: '開発ツール', note: '日々の制作で使用', skills: ['Git', 'GitHub', 'Vite','VS Code'] },
]

const arrow = '<span aria-hidden="true">↗</span>'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="MIZUNO.KENGO トップへ">MIZUNO<span>.KENGO</span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="global-nav">
      <span class="menu-button__label">MENU</span><span class="menu-button__icon" aria-hidden="true"></span>
    </button>
    <nav id="global-nav" class="global-nav" aria-label="メインナビゲーション">
      <a href="#about">About</a><a href="#skills">Skills</a><a href="#works">Products</a><a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="main">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="hero__copy reveal">
        <p class="eyebrow">PORTFOLIO</p>
        <a class="text-link" href="#works">制作実績を見る <span aria-hidden="true">↓</span></a>
      </div>
    </section>

    <section id="about" class="section about" aria-labelledby="about-title">
      <div class="section-heading reveal"><p class="section-number">01</p><p class="eyebrow">ABOUT ME</p><h2 id="about-title">私について</h2></div>
      <div class="about__content reveal">
        <p class="about__name">MIZUNO.KENGO</p>
        <p class="about__role">Webプログラマを目指しています</p>
        <p class="about__body">車載開発を約2年経験しました。品質と正確さが求められる現場で身につけた、丁寧に考え、着実に形にする姿勢が私の強みです。現在はWeb技術を幅広く学び、フロントエンドからバックエンドまで制作しています。</p>
      </div>
    </section>

    <section id="skills" class="section skills" aria-labelledby="skills-title">
      <div class="section-heading reveal"><p class="section-number">02</p><p class="eyebrow">SKILLS</p><h2 id="skills-title">できること</h2></div>
      <div class="skill-list">
        ${skillGroups.map((group) => `<article class="skill-group reveal"><div class="skill-group__header"><div><p class="skill-group__label">${group.label}</p><p>${group.note}</p></div></div><ul aria-label="${group.label}のスキル">${group.skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></article>`).join('')}
      </div>
    </section>

    <section id="works" class="section works" aria-labelledby="works-title">
      <div class="section-heading reveal"><p class="section-number">03</p><p class="eyebrow">SELECTED WORKS</p><h2 id="works-title">制作実績</h2></div>
      <div class="work-list">
        ${works.map((work) => `<article class="work-card reveal"><a class="work-card__image" href="${work.url}" target="_blank" rel="noopener noreferrer" aria-label="${work.title}を新しいタブで見る"><img src="${work.image}" alt="${work.alt}" loading="lazy"><span class="work-card__open" aria-hidden="true">${arrow}</span></a><div class="work-card__content"><p class="work-card__number">WORK ${work.number}</p><h3><a href="${work.url}" target="_blank" rel="noopener noreferrer">${work.title} ${arrow}</a></h3><p>${work.description}</p><ul aria-label="使用技術">${work.technologies.map((tech) => `<li>${tech}</li>`).join('')}</ul></div></article>`).join('')}
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="contact__inner reveal"><p class="eyebrow">CONTACT</p><h2 id="contact-title">お問い合わせ</h2><p>ご覧いただき、ありがとうございます。</div>
    </section>
  </main>
  <footer class="site-footer">
  <a class="brand brand--footer" href="#top">MIZUNO<span>.KENGO</span></a><p>© ${new Date().getFullYear()} MIZUNO.KENGO</p><div class="footer-links"><a class="footer-github" href="https://github.com/KengoJ" target="_blank" rel="noopener noreferrer"><img src="./images/GitHub_Invertocat_White.png" alt="" width="22" height="22">GitHub <span aria-hidden="true">↗</span></a><a href="#top">ページ上部へ ↑</a></div></footer>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!
const nav = document.querySelector<HTMLElement>('.global-nav')!

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  nav.classList.toggle('is-open', !isOpen)
})

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false')
  nav.classList.remove('is-open')
}))

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
