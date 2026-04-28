<template>
  <section id="contacto" class="section contact-section">

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

    <div class="orb orb-contact" aria-hidden="true"></div>
    <div class="container">
      <div class="contact-inner" ref="innerEl">
        <!-- Header -->
        <div class="section-label">♡ ₊ ⊹ Contacto</div>
        <h2 class="section-title" id="contact-title">
          Hablemos <span class="accent">✦</span>
        </h2>
        <p class="contact-subtitle">
          ¿Tienes un proyecto, una idea o simplemente quieres saludar? 🌸<br>
          ¡Encantada de leerte!
        </p>

        <div class="contact-grid">
          <!-- Links de contacto -->
          <div class="contact-links-col">
            <a v-for="link in contactLinks" :key="link.id" :href="link.href"
              :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener' : undefined" :id="link.id"
              class="contact-card glass">
              <div class="cc-icon-wrap">
                <span v-html="link.icon" class="cc-icon"></span>
              </div>
              <div class="cc-info">
                <span class="cc-label">{{ link.label }}</span>
                <span class="cc-value">{{ link.value }}</span>
              </div>
              <span class="cc-arrow">→</span>
            </a>
          </div>

          <!-- Formulario glass -->
          <form class="contact-form glass" @submit.prevent="onSubmit" id="contact-form">
            <div class="form-field">
              <label for="contact-name">Nombre</label>
              <input id="contact-name" v-model="form.name" type="text" placeholder="Tu nombre ♡" autocomplete="name"
                required />
            </div>
            <div class="form-field">
              <label for="contact-email">Email</label>
              <input id="contact-email" v-model="form.email" type="email" placeholder="tu@email.com"
                autocomplete="email" required />
            </div>
            <div class="form-field">
              <label for="contact-msg">Mensaje</label>
              <textarea id="contact-msg" v-model="form.message" rows="4" placeholder="Cuéntame todo ✦"
                required></textarea>
            </div>

            <button type="submit" class="btn btn-primary submit-btn" id="contact-submit" :disabled="isSubmitting">
              <svg v-if="!isSubmitting" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {{ isSubmitting ? 'Enviando ✦...' : 'Enviar mensaje' }}
            </button>

            <Transition name="fade">
              <div v-if="sent" class="form-success" id="contact-success">
                <span>🪻</span> ¡Mensaje enviado! Te respondo pronto ✦
              </div>
            </Transition>
          </form>
        </div>

        <!-- Decorative chars strip -->
        <div class="chars-strip" aria-hidden="true">
          <span v-for="c in decorChars" :key="c" class="deco-char">{{ c }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const innerEl = ref(null)
const sent = ref(false)
const isSubmitting = ref(false)

const form = ref({ name: '', email: '', message: '' })

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

function initCanvas() {
  const canvas = canvasEl.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  let W = document.documentElement.clientWidth
  let H = window.innerHeight

  const particles = Array.from({ length: 90 }, () => createParticle(W, H))

  function createParticle(w, h) {
    return {
      x: Math.random() * w,
      y: Math.random() * h, // Iniciar distribuidas para que no se vea vacío
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.6 + 0.2), // Siempre hacia arriba
      alpha: Math.random() * 0.5 + 0.15,
      hue: Math.random() * 60 + 260,
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      // Ligero movimiento serpenteante
      p.x += Math.sin(p.y * 0.01) * 0.3

      if (p.x < -10) p.x = W + 10
      if (p.x > W + 10) p.x = -10
      // Si la partícula sube por encima del límite, reaparece abajo
      if (p.y < -10) {
        p.y = H + 10
        p.x = Math.random() * W
      }

      p.alpha += (Math.random() - 0.5) * 0.015
      p.alpha = Math.max(0.05, Math.min(0.65, p.alpha))

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${p.hue}, 80%, 80%, ${p.alpha})`
      ctx.fill()

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

  function onResize() {
    if (!canvasEl.value || !canvasEl.value.parentElement) return
    const rect = canvasEl.value.parentElement.getBoundingClientRect()
    W = canvas.width = rect.width
    H = canvas.height = rect.height
  }

  // Set initial size with a slight delay to ensure layout is calculated
  setTimeout(onResize, 50)
  window.addEventListener('resize', onResize)

  draw()
}

onMounted(() => {
  initCanvas()
})

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
})

const contactLinks = [
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/eriihub',
    href: 'https://github.com/eriihub',
    external: true,
    icon: `<svg style="margin-top: 10px;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>`,
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'Erika Sofía Ruiz de Almirón Trelles',
    href: 'https://es.linkedin.com/in/erika-sof%C3%ADa-ruiz-de-almir%C3%B3n-trelles-894b65364',
    external: true,
    icon: `<svg style="margin-top: 10px;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
  },
  {
    id: 'contact-discord',
    label: 'Discord',
    value: 'erihub',
    href: 'https://discord.com/users/709812214122676276',
    external: true,
    icon: `<svg style="margin-top: 10px;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`
  },
  {
    id: 'contact-twitch',
    label: 'Twitch',
    value: 'twitch.tv/erihub',
    href: 'http://twitch.tv/erihub',
    external: true,
    icon: `<svg style="margin-top: 10px;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>`
  },
  {
    id: 'contact-telegram',
    label: 'Telegram',
    value: 't.me/whoseriu',
    href: 'https://t.me/whoseriu',
    external: true,
    icon: `<svg style="margin-top: 10px;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`
  },
  {
    id: 'contact-gmail',
    label: 'Gmail',
    value: 'erikaruizdalmiron@gmail.com',
    href: 'mailto:erikaruizdalmiron@gmail.com',
    external: true,
    icon: `<svg style="margin-top: 10px;" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>`
  },
]

const decorChars = ['✦', '.', '⊹', '₊', '˚', '⋆', '‧', ' ', '₊', '୨ ', 'ㅤ♡', 'ㅤ', '୧', '₊', ' ', '‧', '⋆', '˚', '₊', '⊹', '.✦']

async function onSubmit() {
  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    const response = await fetch('https://formsubmit.co/ajax/erikaruizdalmiron@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        _subject: 'Nuevo mensaje de tu portfolio ✦'
      })
    })

    if (response.ok) {
      sent.value = true
      form.value = { name: '', email: '', message: '' }
      setTimeout(() => (sent.value = false), 5000)
    } else {
      console.error('Error al enviar el formulario.')
      alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.')
    }
  } catch (error) {
    console.error('Error en la petición:', error)
    alert('Hubo un error de conexión. Revisa tu internet e inténtalo de nuevo.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  position: relative;
}


.particles-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.float-chars {
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

.orb-contact {
  width: 420px;
  height: 420px;
  left: -100px;
  top: 15%;
  background: radial-gradient(circle, rgba(120, 60, 200, 0.2), transparent 70%);
  animation-duration: 11s;
  animation-delay: 1s;
}

.contact-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.section-label {
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--clr-violet-soft);
  font-weight: 500;
}

.contact-subtitle {
  color: var(--clr-text-muted);
  font-size: 0.96rem;
  line-height: 1.7;
  margin-bottom: 8px;
}

.contact-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 20px;
  margin-top: 16px;
}

/* Contact link cards */
.contact-links-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 18px;
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  transition: var(--transition);
  text-align: left;
}

.contact-card:hover {
  border-color: var(--clr-violet-soft);
  transform: translateX(5px);
  box-shadow: 0 4px 24px var(--clr-glow);
}

.cc-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(160, 100, 220, 0.1);
  border: 1px solid var(--clr-border);
  color: var(--clr-lilac);
  flex-shrink: 0;
}

.cc-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.cc-label {
  font-size: 0.72rem;
  color: var(--clr-text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.cc-value {
  font-size: 0.85rem;
  color: var(--clr-lilac);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cc-arrow {
  color: var(--clr-text-dim);
  font-size: 1rem;
  transition: var(--transition-fast);
}

.contact-card:hover .cc-arrow {
  color: var(--clr-rose-lila);
  transform: translateX(4px);
}

/* Form */
.contact-form {
  padding: 28px 26px;
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--clr-text-muted);
  font-weight: 500;
}

.form-field input,
.form-field textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-sm);
  padding: 11px 14px;
  color: var(--clr-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: var(--transition);
  resize: vertical;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--clr-text-dim);
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--clr-violet-soft);
  background: rgba(160, 100, 220, 0.06);
  box-shadow: 0 0 0 3px rgba(140, 80, 210, 0.12);
}

.submit-btn {
  width: 100%;
  justify-content: center;
}

.form-success {
  text-align: center;
  padding: 12px;
  border-radius: var(--radius-sm);
  background: rgba(160, 100, 220, 0.1);
  border: 1px solid rgba(160, 100, 220, 0.25);
  color: var(--clr-lilac);
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}

/* Decorative chars strip */
.chars-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: 52px;
  opacity: 0.3;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
  color: var(--clr-text-dim);
  font-weight: 1000;
  animation: fadeIn 1.2s 0.5s both;
}

.deco-char {
  transition: var(--transition-fast);
  cursor: default;
}

.deco-char:hover {
  opacity: 1;
  color: var(--clr-rose-lila);
  transform: scale(1.4) rotate(5deg);
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
