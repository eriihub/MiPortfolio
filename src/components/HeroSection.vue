<template>
  <section id="inicio" class="section hero-section">
    <!-- Canvas de partículas -->
    <canvas ref="canvasEl" class="particles-canvas" aria-hidden="true"></canvas>

    <!-- Orbs decorativos -->
    <div class="orb orb-1" aria-hidden="true"></div>
    <div class="orb orb-2" aria-hidden="true"></div>
    <div class="orb orb-3" aria-hidden="true"></div>

    <!-- Caracteres flotantes -->
    <div class="float-chars" aria-hidden="true">
      <span v-for="c in floatingChars" :key="c.id" class="float-char" :style="c.style">{{ c.char }}</span>
    </div>

    <div class="container hero-content">
      <div class="hero-badge pill" id="hero-badge">
        <span>✦</span> Estudiante en prácticas · DAM 2º curso
      </div>

      <h1 class="hero-title" id="hero-title">
        <span class="hero-hi">Bienvenidos, soy</span>
        <span class="hero-name glow-text">Erika</span>
        <span class="hero-emoji">₊˚𓆩༺✧༻𓆪˚₊</span>
      </h1>

      <p class="hero-subtitle">
        Transformando el aprendizaje continuo en <span class="gradient-word">código limpio</span>
        y experiencias digitales <span class="gradient-word">únicas</span> ✦
      </p>

      <div class="hero-chars" aria-hidden="true">
        <span class="hc">⊹</span>
        <span class="hc">♡</span>
        <span class="hc">🃜</span>
        <span class="hc">♤</span>
        <span class="hc">🃁</span>
        <span class="hc">♢</span>
        <span class="hc">🂺</span>
        <span class="hc">⊹</span>
      </div>

      <div class="hero-actions">
        <a href="#proyectos" class="btn btn-primary" id="hero-btn-projects">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 7h18M3 12h18M3 17h12" />
          </svg>
          Ver proyectos
        </a>
        <a href="#contacto" class="btn btn-ghost" id="hero-btn-contact">
          Contactarme ♡
        </a>
      </div>

      <div class="hero-socials">
        <a href="https://github.com/eriihub" target="_blank" rel="noopener" class="social-link" id="hero-github-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>
        <a href="https://es.linkedin.com/in/erika-sof%C3%ADa-ruiz-de-almir%C3%B3n-trelles-894b65364" target="_blank"
          rel="noopener" class="social-link" id="hero-linkedin-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint" aria-hidden="true">
      <span class="scroll-dot"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasEl = ref(null)
let animFrameId = null

const floatingChars = [
  { id: 1, char: '✦', style: 'top:15%; left:8%;  animation-delay:0s;   animation-duration:4s;   font-size:1.2rem; color:rgba(200,160,255,0.7)' },
  { id: 2, char: '⊹', style: 'top:30%; left:92%; animation-delay:1.2s; animation-duration:5s;   font-size:1rem;   color:rgba(220,180,255,0.6)' },
  { id: 3, char: '₊', style: 'top:60%; left:5%;  animation-delay:2s;   animation-duration:4.5s; font-size:0.9rem; color:rgba(180,140,255,0.55)' },
  { id: 4, char: '⟡', style: 'top:75%; left:88%; animation-delay:0.5s; animation-duration:6s;   font-size:1.1rem; color:rgba(210,170,255,0.65)' },
  { id: 5, char: '✦', style: 'top:20%; left:50%; animation-delay:3s;   animation-duration:5s;   font-size:0.8rem; color:rgba(255,180,220,0.5)' },
  { id: 6, char: '𐙚', style: 'top:80%; left:30%; animation-delay:1.8s; animation-duration:4.2s; font-size:0.85rem;color:rgba(200,160,255,0.5)' },
  { id: 7, char: '˖', style: 'top:45%; left:95%; animation-delay:2.5s; animation-duration:3.8s; font-size:1rem;   color:rgba(180,160,255,0.6)' },
  { id: 8, char: '♡', style: 'top:10%; left:70%; animation-delay:0.8s; animation-duration:5.5s; font-size:1rem;   color:rgba(255,160,200,0.55)' },
].map(c => ({ ...c, style: c.style + '; animation-name: float-char; animation-iteration-count: infinite; animation-timing-function: ease-in-out; position: absolute; pointer-events: none; user-select: none;' }))

// Canvas sparkles / dust
function initCanvas() {
  const canvas = canvasEl.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let W = canvas.width = document.documentElement.clientWidth
  let H = canvas.height = window.innerHeight

  const particles = Array.from({ length: 90 }, () => createParticle(W, H))

  function createParticle(w, h) {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
      hue: Math.random() * 60 + 260, // 260-320: violet to rose
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0) p.x = W
      if (p.x > W) p.x = 0
      if (p.y < 0) p.y = H
      if (p.y > H) p.y = 0
      // Twinkle
      p.alpha += (Math.random() - 0.5) * 0.015
      p.alpha = Math.max(0.05, Math.min(0.65, p.alpha))

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${p.hue}, 80%, 80%, ${p.alpha})`
      ctx.fill()

      // Occasional sparkle cross
      if (p.r > 1.1 && Math.random() < 0.007) {
        ctx.strokeStyle = `hsla(${p.hue}, 90%, 90%, ${p.alpha * 0.6})`
        ctx.lineWidth = 0.6
        const s = p.r * 3
        ctx.beginPath()
        ctx.moveTo(p.x - s, p.y); ctx.lineTo(p.x + s, p.y)
        ctx.moveTo(p.x, p.y - s); ctx.lineTo(p.x, p.y + s)
        ctx.stroke()
      }
    }
    animFrameId = requestAnimationFrame(draw)
  }

  draw()

  function onResize() {
    W = canvas.width = document.documentElement.clientWidth
    H = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)
}

onMounted(() => initCanvas())
onUnmounted(() => { if (animFrameId) cancelAnimationFrame(animFrameId) })
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
}

.particles-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* Orbs */
.orb-1 {
  width: 480px;
  height: 480px;
  top: -120px;
  left: -100px;
  background: radial-gradient(circle, rgba(130, 60, 210, 0.38), transparent 70%);
  animation-duration: 9s;
}

.orb-2 {
  width: 380px;
  height: 380px;
  top: 10%;
  right: -80px;
  background: radial-gradient(circle, rgba(200, 80, 160, 0.28), transparent 70%);
  animation-duration: 11s;
  animation-delay: 1.5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  bottom: 5%;
  left: 40%;
  background: radial-gradient(circle, rgba(70, 80, 200, 0.22), transparent 70%);
  animation-duration: 13s;
  animation-delay: 3s;
}

.float-chars {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 22px;
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.hero-badge {
  margin-bottom: 4px;
  animation: fadeIn 1.2s 0.2s both;
}

.hero-title {
  font-family: var(--font-display);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  line-height: 1;
}

.hero-hi {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 300;
  color: var(--clr-text-muted);
  letter-spacing: 0.12em;
  text-transform: lowercase;
  font-style: italic;
}

.hero-name {
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg,
      var(--clr-lilac) 10%,
      var(--clr-rose-lila) 15%,
      var(--clr-blue-gal) 30%,
      var(--clr-violet-dark)50%,
      var(--clr-lilac) 80%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 5s linear infinite;
  line-height: 1;
}

.hero-emoji {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  letter-spacing: 0.2em;
  margin-top: 4px;
  opacity: 0.8;
  -webkit-text-fill-color: var(--clr-rose-lila);
  color: var(--clr-rose-lila);
}

.hero-subtitle {
  max-width: 540px;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--clr-text-muted);
  line-height: 1.7;
  animation: fadeInUp 1s 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.gradient-word {
  background: linear-gradient(135deg, var(--clr-violet-soft), var(--clr-rose-lila));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
}

.hero-chars {
  display: flex;
  gap: 16px;
  font-size: 1.1rem;
  color: var(--clr-text-dim);
  animation: fadeIn 1.2s 0.5s both;
  flex-wrap: wrap;
  justify-content: center;
}

.hc {
  transition: all 0.3s;
  cursor: default;
}

.hc:hover {
  color: var(--clr-rose-lila);
  transform: scale(1.4) rotate(-5deg);
  display: inline-block;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInUp 1s 0.45s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.hero-socials {
  display: flex;
  gap: 16px;
  animation: fadeIn 1.2s 0.65s both;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--clr-text-muted);
  font-size: 0.88rem;
  padding: 8px 16px;
  border-radius: 99px;
  border: 1px solid var(--clr-border);
  background: rgba(255, 255, 255, 0.03);
  transition: var(--transition);
}

.social-link:hover {
  color: var(--clr-lilac);
  border-color: var(--clr-violet-soft);
  background: rgba(160, 100, 220, 0.1);
  transform: translateY(-2px);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-dot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--clr-violet-soft);
  box-shadow: 0 0 12px var(--clr-violet);
  animation: scroll-bounce 2s ease-in-out infinite;
}

@keyframes scroll-bounce {

  0%,
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }

  50% {
    transform: translateY(10px);
    opacity: 1;
  }
}

.float-char {
  animation: float-char 4s ease-in-out infinite;
}

@media (max-width: 640px) {
  .hero-name {
    letter-spacing: -0.02em;
  }
}
</style>
