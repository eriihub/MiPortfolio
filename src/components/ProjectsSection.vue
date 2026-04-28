<template>
  <section id="proyectos" class="section projects-section">
    <div class="orb orb-proj" aria-hidden="true"></div>
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-label">⟡ ₊ Proyectos</div>
        <h2 class="section-title" id="projects-title">
          Mis <span class="accent">creaciones</span>
        </h2>
        <p class="section-subtitle">Repos públicos en GitHub ✦</p>
      </div>

      <div class="projects-grid" ref="gridEl">
        <article v-for="(proj, i) in projects" :key="proj.id" class="project-card glass" :id="`project-card-${proj.id}`"
          :style="`animation-delay: ${i * 0.12}s`">
          <!-- Shimmer overlay -->
          <div class="card-shimmer" aria-hidden="true"></div>

          <!-- Corner char -->
          <span class="card-corner-char" aria-hidden="true">{{ proj.char }}</span>

          <div class="card-body">
            <div class="card-top">
              <div class="card-icon-wrap">
                <span class="card-icon">{{ proj.icon }}</span>
              </div>
              <div class="card-badges">
                <span class="card-badge">{{ proj.lang }}</span>
                <span class="card-badge card-badge-pub">Public</span>
              </div>
            </div>

            <h3 class="card-title" :id="`project-title-${proj.id}`">{{ proj.name }}</h3>
            <p class="card-desc">{{ proj.desc }}</p>

            <div class="card-tags">
              <span v-for="tag in proj.tags" :key="tag" class="tag-mini">{{ tag }}</span>
            </div>
          </div>

          <div class="card-footer">
            <a :href="proj.url" target="_blank" rel="noopener" class="card-link" :id="`project-link-${proj.id}`">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Ver en GitHub
            </a>
            <div class="card-sparkles" aria-hidden="true">
              <span class="cs">✦</span>
              <span class="cs">⊹</span>
            </div>
          </div>
        </article>
      </div>

      <div class="projects-more" ref="moreEl">
        <p class="more-text">¿Quieres ver más? Todo está en mi GitHub ♡</p>
        <a href="https://github.com/eriihub?tab=repositories" target="_blank" rel="noopener" class="btn btn-primary"
          id="projects-more-btn">
          Ver todos los repos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerEl = ref(null)
const gridEl = ref(null)
const moreEl = ref(null)

const projects = [
  {
    id: 'eriihub',
    name: 'eriihub',
    desc: 'Mi perfil de GitHub personalizado — una presentación coqueta con skills, contactos y más. El primer repo que todos ven ✦',
    icon: '☾',
    char: '⟡',
    lang: 'Markdown',
    tags: ['Profile', 'README', 'GitHub'],
    url: 'https://github.com/eriihub/eriihub',
  },
  {
    id: 'programa1',
    name: 'Programa 1',
    desc: 'Proyecto de programación Java — código limpio y funcional desarrollado con dedicación y atención al detalle 💜',
    icon: '✰',
    char: '♡',
    lang: 'Java',
    tags: ['Java', 'Programación', 'Backend'],
    url: 'https://github.com/eriihub/programa1',
  },
  {
    id: 'programa2',
    name: 'Programa 2',
    desc: 'Segunda entrega de proyecto — avanzando en la construcción de soluciones robustas y elegantes ✦',
    icon: '✰',
    char: '✦',
    lang: 'Java',
    tags: ['Java', 'Programación', 'Backend'],
    url: 'https://github.com/eriihub/programa2',
  },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.1 })
    ;[headerEl, gridEl, moreEl].forEach(r => r.value && obs.observe(r.value))
})
</script>

<style scoped>
.projects-section {
  overflow: hidden;
}

.orb-proj {
  width: 500px;
  height: 500px;
  right: -150px;
  top: 20%;
  background: radial-gradient(circle, rgba(180, 70, 150, 0.18), transparent 65%);
  animation-duration: 14s;
  animation-delay: 2s;
}

.section-header {
  margin-bottom: 48px;
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

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.8s 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.projects-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Card */
.project-card {
  position: relative;
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.project-card:hover {
  border-color: var(--clr-violet-soft);
  transform: translateY(-6px);
  box-shadow:
    0 16px 50px rgba(140, 80, 210, 0.3),
    0 4px 16px rgba(0, 0, 0, 0.4);
}

.project-card:hover .card-shimmer {
  opacity: 1;
}

.project-card:hover .cs {
  opacity: 1;
  transform: scale(1.2);
}

.card-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg,
      transparent 0%,
      rgba(180, 130, 255, 0.07) 45%,
      rgba(255, 180, 220, 0.07) 55%,
      transparent 100%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.card-corner-char {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 1rem;
  color: rgba(200, 160, 255, 0.35);
  pointer-events: none;
  transition: var(--transition);
}

.project-card:hover .card-corner-char {
  color: rgba(200, 160, 255, 0.7);
  transform: rotate(20deg) scale(1.3);
}

.card-body {
  padding: 24px 22px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: rgba(160, 100, 220, 0.08);
  border: 1px solid var(--clr-border);
  transition: var(--transition);
}

.project-card:hover .card-icon-wrap {
  background: rgba(160, 100, 220, 0.16);
  box-shadow: 0 4px 16px var(--clr-glow);
}

.card-badges {
  display: flex;
  gap: 6px;
}

.card-badge {
  font-size: 0.7rem;
  padding: 3px 9px;
  border-radius: 99px;
  border: 1px solid var(--clr-border);
  color: var(--clr-text-dim);
  letter-spacing: 0.04em;
}

.card-badge-pub {
  color: var(--clr-lilac);
  border-color: rgba(180, 130, 220, 0.25);
  background: rgba(160, 100, 220, 0.06);
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--clr-text);
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.card-desc {
  font-size: 0.87rem;
  color: var(--clr-text-muted);
  line-height: 1.65;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag-mini {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--clr-text-dim);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.card-footer {
  padding: 14px 22px 20px;
  border-top: 1px solid var(--clr-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--clr-lilac);
  font-weight: 500;
  transition: var(--transition-fast);
}

.card-link:hover {
  color: var(--clr-rose-lila);
  gap: 9px;
}

.card-sparkles {
  display: flex;
  gap: 4px;
}

.cs {
  font-size: 0.75rem;
  color: var(--clr-text-dim);
  opacity: 0.4;
  transition: all 0.35s;
}

/* More row */
.projects-more {
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.projects-more.visible {
  opacity: 1;
  transform: translateY(0);
}

.more-text {
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  letter-spacing: 0.01em;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
