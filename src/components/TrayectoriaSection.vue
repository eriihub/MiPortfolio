<template>
  <section id="trayectoria" class="section tray-section">
    <div class="orb orb-tray-1" aria-hidden="true"></div>
    <div class="orb orb-tray-2" aria-hidden="true"></div>
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-label">⟡ ₊ ⊹ Trayectoria</div>
        <h2 class="section-title" id="trayectoria-title">
          Mi <span class="accent">recorrido</span>
        </h2>
        <p class="section-subtitle">Formación y experiencia que me han traído hasta aquí ✦</p>
      </div>

      <div class="tray-layout" ref="layoutEl">
        <!-- Columna izquierda: Formación -->
        <div class="tray-col">
          <div class="col-heading">
            <div class="col-icon">&nbsp;🕮&nbsp;</div>
            <span class="col-title">Formación</span>
          </div>

          <div class="timeline">
            <div v-for="(item, i) in education" :key="item.id" class="tl-item" :id="`edu-${item.id}`"
              :style="`animation-delay: ${i * 0.12}s`">
              <div class="tl-dot">
                <span class="tl-dot-inner"></span>
              </div>
              <div class="tl-card glass">
                <div class="tl-card-header">
                  <div class="tl-meta">
                    <span class="tl-date pill-date">{{ item.date }}</span>
                    <span class="tl-type" :class="`type-${item.type}`">{{ item.typeLabel }}</span>
                  </div>
                </div>
                <h3 class="tl-title">{{ item.title }}</h3>
                <p class="tl-institution">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  {{ item.institution }}
                </p>
                <p v-if="item.desc" class="tl-desc">{{ item.desc }}</p>
                <div v-if="item.tags" class="tl-tags">
                  <span v-for="t in item.tags" :key="t" class="tl-tag">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider vertical -->
        <div class="tray-divider" aria-hidden="true">
          <div class="divider-line"></div>
          <div class="divider-gem">⟡</div>
          <div class="divider-line"></div>
        </div>

        <!-- Columna derecha: Habilidades clave + idiomas -->
        <div class="tray-col">
          <div class="col-heading">
            <div class="col-icon">&nbsp;⚡︎&nbsp;</div>
            <span class="col-title">Competencias clave</span>
          </div>

          <!-- Competencias con barras -->
          <div class="competences-list">
            <div v-for="c in competences" :key="c.name" class="comp-item" :id="`comp-${c.key}`">
              <div class="comp-header">
                <span class="comp-name">{{ c.name }}</span>
                <span class="comp-level">{{ c.level }}</span>
              </div>
              <div class="comp-bar">
                <div class="comp-bar-fill" :style="`--fill: ${c.pct}%; --hue: ${c.hue}`"></div>
              </div>
            </div>
          </div>

          <!-- Idiomas -->
          <div class="col-heading" style="margin-top: 32px;">
            <div class="col-icon">🌐</div>
            <span class="col-title">Idiomas</span>
          </div>

          <div class="languages-grid">
            <div v-for="lang in languages" :key="lang.name" class="lang-card glass" :id="`lang-${lang.key}`">
              <span class="lang-flag">{{ lang.flag }}</span>
              <div class="lang-info">
                <span class="lang-name">{{ lang.name }}</span>
                <span class="lang-lvl">{{ lang.level }}</span>
              </div>
              <div class="lang-dots">
                <span v-for="n in 5" :key="n" class="ldot" :class="{ lit: n <= lang.dots }"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerEl = ref(null)
const layoutEl = ref(null)

const education = [
  {
    id: 'dam',
    date: '2024 – Actualidad',
    type: 'current',
    typeLabel: 'En curso',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    institution: 'Formación Profesional (CFGS · DAM) IES El Rincón',
    desc: 'Desarrollo de aplicaciones en entornos cliente/servidor, bases de datos, programación orientada a objetos e interfaces multiplataforma.',
    tags: ['Java', 'Angular', 'MySQL', 'Git'],
  },
  {
    id: 'angular-cert',
    date: 'Próximamente',
    type: 'current',
    typeLabel: 'En preparación',
    title: 'Certificación Oficial de Angular',
    institution: 'Angular (Google)',
    desc: 'Preparación para la obtención del certificado oficial que avala el dominio del framework para aplicaciones web escalables.',
    tags: ['Angular', 'TypeScript', 'Frontend'],
  },
  {
    id: 'bach',
    date: '2022 – 2024',
    type: 'done',
    typeLabel: 'Completado',
    title: 'Bachillerato Tecnológico',
    institution: 'Instituto de Educación Secundaria Mesa y López',
    desc: 'Especialización en tecnología, matemáticas e informática aplicada.',
    tags: ['Tecnología', 'Matemáticas', 'Informática'],
  },
]

const competences = [
  { key: 'backend', name: 'Backend Development', level: 'Intermedio', pct: 60, hue: 275 },
  { key: 'frontend', name: 'Frontend & UI Design', level: 'Avanzado', pct: 78, hue: 310 },
  { key: 'db', name: 'Bases de datos (SQL)', level: 'Intermedio', pct: 65, hue: 255 },
  { key: 'oop', name: 'POO & Patrones', level: 'Intermedio', pct: 62, hue: 290 },
  { key: 'git', name: 'Git & Control versiones', level: 'Avanzado', pct: 75, hue: 280 },
  { key: 'ux', name: 'UX / Visual Design', level: 'Avanzado', pct: 82, hue: 320 },
]

const languages = [
  { key: 'es', name: 'Español', flag: '🇪🇸', level: 'Nativo', dots: 5 },
  { key: 'en', name: 'Inglés', flag: '🇬🇧', level: 'B2.2 · En preparación · EOI Las Palmas', dots: 4 },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.08 })
    ;[headerEl, layoutEl].forEach(r => r.value && obs.observe(r.value))
})
</script>

<style scoped>
.tray-section {
  overflow: hidden;
}

.orb-tray-1 {
  width: 420px;
  height: 420px;
  left: -100px;
  top: 10%;
  background: radial-gradient(circle, rgba(120, 60, 220, 0.25), transparent 70%);
  animation-duration: 12s;
}

.orb-tray-2 {
  width: 350px;
  height: 350px;
  right: -80px;
  bottom: 15%;
  background: radial-gradient(circle, rgba(200, 80, 180, 0.18), transparent 70%);
  animation-duration: 15s;
  animation-delay: 2s;
}

/* Header */
.section-header {
  margin-bottom: 52px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-label {
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--clr-violet-soft);
  margin-bottom: 10px;
  font-weight: 500;
}

/* Layout */
.tray-layout {
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  gap: 0 0;
  align-items: start;
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.8s 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.tray-layout.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Column headings */
.col-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.col-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background: rgba(180, 110, 245, 0.12);
  border: 1px solid var(--clr-border);
}

.col-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--clr-text);
  letter-spacing: 0.02em;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.tl-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.tl-dot {
  flex-shrink: 0;
  width: 18px;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  position: relative;
}

.tl-dot::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: calc(100% + 20px);
  background: linear-gradient(180deg, rgba(200, 150, 245, 0.4), transparent);
}



.tl-dot-inner {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--clr-violet), var(--clr-rose-lila));
  box-shadow: 0 0 12px var(--clr-violet), 0 0 24px rgba(160, 80, 230, 0.4);
  display: block;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {

  0%,
  100% {
    box-shadow: 0 0 8px var(--clr-violet);
  }

  50% {
    box-shadow: 0 0 18px var(--clr-violet), 0 0 32px rgba(160, 80, 230, 0.5);
  }
}

.tl-card {
  flex: 1;
  padding: 18px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--clr-border);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tl-card:hover {
  border-color: var(--clr-violet-soft);
  transform: translateX(4px);
  box-shadow: 0 6px 28px var(--clr-glow);
}

.tl-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pill-date {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(180, 110, 245, 0.1);
  border: 1px solid rgba(200, 150, 245, 0.25);
  color: var(--clr-lilac);
  letter-spacing: 0.04em;
  font-weight: 500;
}

.tl-type {
  font-size: 0.65rem;
  padding: 3px 9px;
  border-radius: 99px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.type-current {
  background: rgba(80, 220, 160, 0.12);
  border: 1px solid rgba(80, 220, 160, 0.3);
  color: #6ee7b7;
}

.type-done {
  background: rgba(200, 150, 245, 0.08);
  border: 1px solid rgba(200, 150, 245, 0.2);
  color: var(--clr-text-dim);
}

.tl-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--clr-text);
  line-height: 1.3;
}

.tl-institution {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  color: var(--clr-text-dim);
}

.tl-desc {
  font-size: 0.82rem;
  color: var(--clr-text-muted);
  line-height: 1.6;
}

.tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tl-tag {
  font-size: 0.68rem;
  padding: 2px 8px;
  border-radius: 99px;
  background: rgba(180, 110, 245, 0.08);
  border: 1px solid rgba(200, 150, 245, 0.18);
  color: var(--clr-lilac);
}

/* Divider */
.tray-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 8px;
}

.divider-line {
  flex: 1;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(200, 150, 245, 0.3), transparent);
  min-height: 40px;
}

.divider-gem {
  font-size: 1rem;
  color: var(--clr-violet-soft);
  animation: float-char 4s ease-in-out infinite;
}

/* Competences */
.competences-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.comp-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.comp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comp-name {
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--clr-text);
}

.comp-level {
  font-size: 0.68rem;
  color: var(--clr-text-dim);
  letter-spacing: 0.04em;
}

.comp-bar {
  height: 6px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
  border: 1px solid rgba(200, 150, 245, 0.1);
}

.comp-bar-fill {
  height: 100%;
  width: var(--fill);
  border-radius: 99px;
  background: linear-gradient(90deg,
      hsl(var(--hue), 75%, 65%),
      hsl(calc(var(--hue) + 30), 80%, 72%));
  box-shadow: 0 0 8px hsla(var(--hue), 75%, 65%, 0.5);
  animation: bar-grow 1.2s 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
  transform-origin: left;
}

@keyframes bar-grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

/* Languages */
.languages-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lang-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  border: 1px solid var(--clr-border);
  transition: var(--transition);
}

.lang-card:hover {
  border-color: var(--clr-violet-soft);
  transform: translateX(4px);
  box-shadow: 0 4px 18px var(--clr-glow);
}

.lang-flag {
  font-size: 1.4rem;
}

.lang-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.lang-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--clr-text);
}

.lang-lvl {
  font-size: 0.7rem;
  color: var(--clr-text-dim);
}

.lang-dots {
  display: flex;
  gap: 4px;
}

.ldot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(200, 150, 245, 0.15);
  border: 1px solid rgba(200, 150, 245, 0.2);
  transition: var(--transition);
}

.ldot.lit {
  background: linear-gradient(135deg, var(--clr-violet), var(--clr-rose-lila));
  border-color: var(--clr-violet);
  box-shadow: 0 0 6px var(--clr-violet);
}

/* Responsive */
@media (max-width: 900px) {
  .tray-layout {
    grid-template-columns: 1fr;
  }

  .tray-divider {
    flex-direction: row;
    padding-top: 0;
    padding: 60px 0;
  }

  .divider-line {
    flex: 1;
    width: auto;
    height: 1px;
    min-height: unset;
  }
}
</style>
