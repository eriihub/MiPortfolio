<template>
  <section id="sobre-mi" class="section about-section">
    <div class="orb orb-about" aria-hidden="true"></div>
    <div class="container">
      <div class="about-grid">

        <!-- Visual side — rediseñado -->
        <div class="about-visual" ref="visualEl">
          <div class="avatar-frame">
            <!-- Anillos orbitales -->
            <div class="orbit orbit-1" aria-hidden="true">
              <span class="orbit-dot"></span>
            </div>
            <div class="orbit orbit-2" aria-hidden="true">
              <span class="orbit-dot dot-2"></span>
            </div>
            <!-- Card central con gradiente -->
            <div class="avatar-card glass">
              <div class="avatar-bg-glow" aria-hidden="true"></div>
              <div class="avatar-photo-wrap">
                <img src="https://github.com/eriihub.png" alt="Foto de perfil de Erika" class="avatar-photo"
                  loading="lazy" />
                <span class="av-float av-1">✦</span>
                <span class="av-float av-2">⊹</span>
                <span class="av-float av-3">🪻</span>
                <span class="av-float av-4">💜</span>
              </div>
              <div class="avatar-name-tag">
                <span class="tag-dot"></span>
                <span class="tag-handle">DAM ⋆ Full-Stack Jr</span>
                <span class="tag-dot"></span>
              </div>
            </div>
            <!-- Stickers flotantes -->
            <div class="sticker sticker-tl glass">✦ Aplicada</div>
            <div class="sticker sticker-br glass">𐦍 Creativa</div>
          </div>

          <!-- Stats row -->
          <div class="stats-row">
            <div class="stat-item glass" id="stat-repos">
              <span class="stat-icon">&nbsp;🗀&nbsp;</span>
              <div class="stat-data">
                <span class="stat-num">3</span>
                <span class="stat-label">Repos</span>
              </div>
            </div>
            <div class="stat-item glass" id="stat-tech">
              <span class="stat-icon">&nbsp;⚡︎&nbsp;</span>
              <div class="stat-data">
                <span class="stat-num">10+</span>
                <span class="stat-label">Tecnologías</span>
              </div>
            </div>
            <div class="stat-item glass" id="stat-passion">
              <span class="stat-icon">&nbsp;♡&nbsp;</span>
              <div class="stat-data">
                <span class="stat-num">∞</span>
                <span class="stat-label">Pasión</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Texto -->
        <div class="about-text" ref="textEl">
          <div class="section-label">⋆.𐙚 ̊ Sobre mí</div>
          <h2 class="section-title" id="about-title">
            Una dev que ama crear <span class="accent">cosas bonitas</span>
          </h2>

          <div class="about-body">
            <p>
              Hola, soy <strong>Erika Sofía Ruiz de Almiró​n Trelles</strong> — estudiante de
              <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> en 2.º curso,
              con base en Bachillerato Tecnológico y un enfoque orientado al aprendizaje continuo. 🌸
            </p>
            <p>
              Me apasiona crear interfaces que emocionan y código funcional.
              Aprendo rápido, tengo ojo para el detalle y disfruto mezclando técnica
              con creatividad. Actualmente en búsqueda activa de oportunidades. ✦
            </p>
          </div>

          <!-- Traits eye-catching -->
          <div class="about-traits">
            <div class="trait-card" v-for="t in traits" :key="t.label" :id="`trait-${t.key}`">
              <span class="trait-icon">{{ t.icon }}</span>
              <div class="trait-info">
                <span class="trait-label">{{ t.label }}</span>
                <span class="trait-desc">{{ t.desc }}</span>
              </div>
            </div>
          </div>

          <div class="about-social-btns">
            <a href="https://github.com/eriihub" target="_blank" rel="noopener" class="btn btn-primary"
              id="about-github-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a href="https://es.linkedin.com/in/erika-sof%C3%ADa-ruiz-de-almir%C3%B3n-trelles-894b65364" target="_blank"
              rel="noopener" class="btn btn-ghost" id="about-linkedin-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visualEl = ref(null)
const textEl = ref(null)

const traits = [
  { key: 'pixel', icon: '✦', label: 'Pixel-Perfect', desc: 'Obsesión por el detalle visual' },
  { key: 'builder', icon: '⚡︎', label: 'Fast Learner', desc: 'De cero a funcional en tiempo récord' },
  { key: 'creative', icon: '❀', label: 'Creative Coder', desc: 'Código con alma y diseño que impacta' },
  { key: 'driven', icon: '♕', label: 'Goal-Driven', desc: 'Foco total en resultados que importan' },
]

onMounted(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible')
    })
  }, { threshold: 0.12 })
  if (visualEl.value) obs.observe(visualEl.value)
  if (textEl.value) obs.observe(textEl.value)
})
</script>

<style scoped>
.about-section {
  overflow: hidden;
}

.orb-about {
  width: 500px;
  height: 500px;
  right: -120px;
  top: 5%;
  background: radial-gradient(circle, rgba(160, 80, 220, 0.28), transparent 70%);
  animation-duration: 10s;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.35fr;
  gap: 60px;
  align-items: center;
}

/* ─── Visual side ─── */
.about-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-visual.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Avatar frame con órbitas */
.avatar-frame {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(200, 150, 245, 0.25);
  animation: orbit-spin linear infinite;
}

.orbit-1 {
  width: 200px;
  height: 200px;
  animation-duration: 10s;
}

.orbit-2 {
  width: 260px;
  height: 260px;
  animation-duration: 16s;
  animation-direction: reverse;
}

@keyframes orbit-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.orbit-dot {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--clr-violet), var(--clr-rose-lila));
  box-shadow: 0 0 10px var(--clr-violet), 0 0 20px var(--clr-violet);
}

.dot-2 {
  background: linear-gradient(135deg, var(--clr-blue-gal), var(--clr-lilac));
  box-shadow: 0 0 10px var(--clr-blue-gal);
}

/* Card central */
.avatar-card {
  position: relative;
  width: 160px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border-radius: var(--radius-xl);
  border: 1.5px solid rgba(210, 160, 255, 0.35);
  overflow: hidden;
  z-index: 2;
  box-shadow:
    0 0 40px rgba(150, 80, 230, 0.35),
    0 0 80px rgba(150, 80, 230, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.avatar-bg-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(180, 100, 255, 0.3) 0%, transparent 65%);
  pointer-events: none;
}

.avatar-emoji-stack {
  position: relative;
  font-size: 4rem;
  line-height: 1;
  z-index: 1;
}

.av-main {
  display: block;
}

.av-float {
  position: absolute;
  font-size: 0.9rem;
  animation: float-char 3s ease-in-out infinite;
}

.av-1 {
  top: -10px;
  right: -8px;
  color: var(--clr-lilac);
  animation-delay: 0s;
}

.av-2 {
  bottom: -6px;
  left: -6px;
  color: var(--clr-rose-lila);
  animation-delay: 0.8s;
}

.av-3 {
  top: 4px;
  left: -10px;
  font-size: 1rem;
  animation-delay: 1.5s;
}

.av-4 {
  bottom: 4px;
  right: -10px;
  font-size: 0.85rem;
  animation-delay: 2.2s;
}

.avatar-name-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 1;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  border: 1px solid rgba(210, 160, 255, 0.2);
}

.tag-handle {
  font-size: 0.7rem;
  color: var(--clr-lilac);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.tag-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--clr-text-dim);
}

/* Avatar photo */
.avatar-photo-wrap {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.avatar-photo {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid rgba(210, 160, 255, 0.55);
  box-shadow:
    0 0 20px rgba(180, 110, 245, 0.5),
    0 0 40px rgba(180, 110, 245, 0.2);
  display: block;
}

/* Stickers */
.sticker {
  position: absolute;
  padding: 5px 10px;
  border-radius: 99px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--clr-lilac);
  border: 1px solid rgba(210, 160, 255, 0.3);
  white-space: nowrap;
  z-index: 3;
  animation: float-char 4s ease-in-out infinite;
}

.sticker-tl {
  top: 7px;
  left: -20px;
  animation-delay: 0.5s;
}

.sticker-br {
  bottom: -7px;
  right: -20px;
  animation-delay: 1.8s;
}

/* Stats row */
.stats-row {
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 290px;
  margin-right: 30px;
}

.stat-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 10px;
  border-radius: var(--radius-md);
  border: 1px solid var(--clr-border);
  transition: var(--transition);
}

.stat-item:hover {
  border-color: var(--clr-violet-soft);
  transform: translateY(-3px);
  box-shadow: 0 6px 24px var(--clr-glow);
}

.stat-icon {
  font-size: 1.1rem;
}

.stat-data {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--clr-lilac), var(--clr-rose-lila));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  font-size: 0.62rem;
  color: var(--clr-text-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ─── Text side ─── */
.about-text {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-text.visible {
  opacity: 1;
  transform: translateX(0);
}

.section-label {
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--clr-violet-soft);
  margin-bottom: 10px;
  font-weight: 500;
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 20px 0 28px;
  color: var(--clr-text-muted);
  font-size: 0.97rem;
  line-height: 1.75;
}

.about-body strong {
  color: var(--clr-lilac);
  font-weight: 500;
}

/* Traits cards */
.about-traits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 28px;
}

.trait-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  border: 1px solid var(--clr-border);
  background: rgba(255, 255, 255, 0.04);
  transition: var(--transition);
  cursor: default;
}

.trait-card:hover {
  border-color: var(--clr-violet-soft);
  background: rgba(180, 110, 245, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 4px 18px var(--clr-glow);
}

.trait-icon {
  font-size: 1.3rem;
  line-height: 1;
  flex-shrink: 0;
}

.trait-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.trait-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--clr-text);
  letter-spacing: 0.01em;
}

.trait-desc {
  font-size: 0.7rem;
  color: var(--clr-text-dim);
  line-height: 1.3;
}

/* Buttons */
.about-social-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }

  .about-visual {
    opacity: 1 !important;
    transform: none !important;
  }

  .about-text {
    opacity: 1 !important;
    transform: none !important;
  }

  .about-traits {
    grid-template-columns: 1fr 1fr;
  }

  .about-social-btns {
    justify-content: center;
  }

  .sticker-tl {
    left: 0;
  }

  .sticker-br {
    right: 0;
  }
}

@media (max-width: 480px) {
  .about-traits {
    grid-template-columns: 1fr;
  }

  .stats-row {
    justify-content: center;
  }
}
</style>
