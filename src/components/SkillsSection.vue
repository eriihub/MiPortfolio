<template>
  <section id="skills" class="section skills-section">
    <div class="orb orb-skills" aria-hidden="true"></div>
    <div class="container">
      <div class="section-header" ref="headerEl">
        <div class="section-label">✦ ₊ ⊹ Skills</div>
        <h2 class="section-title" id="skills-title">
          Lo que <span class="accent">domino</span>
        </h2>
        <p class="section-subtitle">Tecnologías y herramientas con las que creo ✦</p>
      </div>

      <div class="skills-grid" ref="gridEl">
        <div v-for="(group, gi) in skillGroups" :key="group.name" class="skill-group glass"
          :style="`animation-delay: ${gi * 0.1}s`" :id="`skill-group-${gi}`">
          <div class="group-header">
            <span class="group-icon">{{ group.icon }}</span>
            <span class="group-name">{{ group.name }}</span>
          </div>
          <div class="skill-pills">
            <span v-for="s in group.skills" :key="s.name" class="skill-chip" :style="`--chip-color: ${s.color}`">
              <span class="chip-dot"></span>
              {{ s.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Barra decorativa -->
      <div class="vibe-bar" ref="vibeEl">
        <span class="vibe-label">✦ Nivel de coquetería del código</span>
        <div class="vibe-dots">
          <span v-for="i in 10" :key="i" class="vibe-dot" :class="{ lit: i <= 9 }"
            :style="`animation-delay: ${i * 0.07}s`"></span>
        </div>
        <span class="vibe-label">✦ Máximo ✦</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const headerEl = ref(null)
const gridEl = ref(null)
const vibeEl = ref(null)

const skillGroups = [
  {
    name: 'Lenguajes', icon: '♡',
    skills: [
      { name: 'Java ☕︎', color: '#f89820' },
      { name: 'JavaScript 𖤓', color: '#f7df1e' },
      { name: 'Python 𓆙', color: '#3178c6' },
      { name: 'HTML5 𓏲', color: '#e34f26' },
      { name: 'CSS3 𓇢', color: '#1572b6' },
      { name: 'Kotlin 𓍯', color: '#c084fc' },
    ]
  },
  {
    name: 'Frameworks & Libs', icon: '✦',
    skills: [
      { name: 'Vue.js 𓆰', color: '#42b883' },
      { name: 'Angular', color: '#dd0031' },
      { name: 'Tailwind CSS 𖦹', color: '#38bdf8' },
    ]
  },
  {
    name: 'Bases de datos', icon: '⟡',
    skills: [
      { name: 'MySQL 𓆞', color: '#4479a1' },
      { name: 'Bootstrap 𓍢', color: '#c9b1ff' },
      { name: 'SQL 𓇻', color: '#60a5fa' },
      { name: 'PostgreSQL 𓃰', color: '#336791' },
      { name: 'SQLite 𓇚', color: '#003B57' },
    ]
  },
  {
    name: 'Herramientas', icon: '⊹',
    skills: [
      { name: 'Git 𓍝', color: '#f05032' },
      { name: 'GitHub 𓆦', color: '#e2e8f0' },
      { name: 'VS Code 𓍲', color: '#007acc' },
      { name: 'IntelliJ', color: '#fe315d' },
      { name: 'Antigravity ✦', color: '#007acc' },
      { name: 'Android Studio', color: '#66BB6A' },
    ]
  },
  {
    name: 'Sistemas', icon: '♢',
    skills: [
      { name: 'Windows', color: '#00a4ef' },
      { name: 'Linux 𓅄', color: '#fcc624' },
    ]
  },
  {
    name: 'Diseño & UX', icon: '𐙚',
    skills: [
      { name: 'CSS Animations 𖦹', color: '#38bdf8' },
      { name: 'Glassmorphism', color: '#c084fc' },
    ]
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

    ;[headerEl, gridEl, vibeEl].forEach(r => r.value && obs.observe(r.value))
})
</script>

<style scoped>
.skills-section {
  overflow: hidden;
}

.orb-skills {
  width: 400px;
  height: 400px;
  left: -120px;
  bottom: 5%;
  background: radial-gradient(circle, rgba(100, 60, 200, 0.22), transparent 70%);
  animation-duration: 12s;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.8s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.skills-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-group {
  padding: 22px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--clr-border);
  transition: var(--transition);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.skill-group:hover {
  border-color: var(--clr-violet-soft);
  box-shadow: 0 8px 40px var(--clr-glow), 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
}

.group-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}

.group-icon {
  font-size: 1rem;
  color: var(--clr-rose-lila);
}

.group-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--clr-lilac);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 99px;
  font-size: 0.78rem;
  border: 1px solid rgba(210, 160, 255, 0.14);
  background: rgba(160, 100, 220, 0.05);
  color: var(--clr-text-muted);
  transition: var(--transition-fast);
  cursor: default;
}

.skill-chip:hover {
  background: color-mix(in srgb, var(--chip-color) 12%, transparent);
  border-color: color-mix(in srgb, var(--chip-color) 55%, transparent);
  color: var(--clr-text);
  transform: scale(1.06);
  box-shadow: 0 2px 14px color-mix(in srgb, var(--chip-color) 35%, transparent);
}

.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--chip-color);
  box-shadow: 0 0 5px var(--chip-color), 0 0 10px color-mix(in srgb, var(--chip-color) 50%, transparent);
  display: inline-block;
  flex-shrink: 0;
}

/* Vibe bar */
.vibe-bar {
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.8s 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vibe-bar.visible {
  opacity: 1;
  transform: translateY(0);
}

.vibe-label {
  font-size: 0.75rem;
  color: var(--clr-text-dim);
  letter-spacing: 0.05em;
}

.vibe-dots {
  display: flex;
  gap: 6px;
}

.vibe-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(180, 130, 220, 0.2);
  border: 1px solid rgba(180, 130, 220, 0.2);
  transition: all 0.5s;
  animation: dot-light 3s ease-in-out infinite alternate;
}

.vibe-dot.lit {
  background: linear-gradient(135deg, var(--clr-violet), var(--clr-rose-lila));
  border-color: var(--clr-violet-soft);
  box-shadow: 0 0 8px var(--clr-violet);
}

@keyframes dot-light {
  0% {
    box-shadow: 0 0 4px var(--clr-violet);
  }

  100% {
    box-shadow: 0 0 12px var(--clr-rose-lila);
  }
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .vibe-bar {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
