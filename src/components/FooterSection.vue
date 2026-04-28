<template>
  <footer class="footer" role="contentinfo">
    <!-- Top glow line -->
    <div class="footer-glow-line" aria-hidden="true"></div>

    <div class="container footer-inner">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="brand-name">
          <span class="b-char">𑣲</span>
          <span class="b-eri">eri</span>
          <span class="b-spark">✦</span>
        </div>
        <p class="brand-sub">
          Hecha con amor y código 💜
        </p>
        <div class="footer-chars" aria-hidden="true">
          <span v-for="c in chars" :key="c" class="fc">{{ c }}</span>
        </div>
      </div>

      <!-- Links -->
      <div class="footer-links">
        <div class="fl-group">
          <span class="fl-head">✦ Navegar</span>
          <a href="#inicio" class="fl-link">Inicio</a>
          <a href="#sobre-mi" class="fl-link">Sobre mí</a>
          <a href="#trayectoria" class="fl-link">Trayectoria</a>
          <a href="#skills" class="fl-link">Skills</a>
          <a href="#proyectos" class="fl-link">Proyectos</a>
          <a href="#contacto" class="fl-link">Contacto</a>
        </div>
        <div class="fl-group">
          <span class="fl-head">⊹ Perfiles</span>
          <a href="https://github.com/eriihub" target="_blank" rel="noopener" class="fl-link">
            GitHub ↗
          </a>
          <a href="https://es.linkedin.com/in/erika-sof%C3%ADa-ruiz-de-almir%C3%B3n-trelles-894b65364" target="_blank"
            rel="noopener" class="fl-link">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span class="footer-copy">© 2026 &nbsp; erihub 𑣲 &nbsp; Todos los derechos reservados</span>
        <span class="footer-emojis">♡ ♢ ♤ ♧</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const chars = ['♡', '♢', '♤', '♧', '⋆', '✦', '⊹', '⟡', '˖', '₊']
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  margin-top: 40px;
  border-top: 1px solid var(--clr-border);
  background: rgba(5, 5, 12, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.footer-glow-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      var(--clr-violet) 25%,
      var(--clr-rose-lila) 50%,
      var(--clr-blue-gal) 75%,
      transparent);
  opacity: 0.6;
  animation: glow-sweep 5s linear infinite;
  background-size: 200% 100%;
}

@keyframes glow-sweep {
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding-top: 52px;
  padding-bottom: 36px;
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 280px;
}

.brand-name {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}

.b-char {
  color: var(--clr-violet);
}

.b-eri {
  background: linear-gradient(135deg, var(--clr-lilac), var(--clr-rose-lila));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.b-spark {
  color: var(--clr-rose-lila);
  font-size: 0.7em;
  animation: float-char 3s ease-in-out infinite;
}

.brand-sub {
  font-size: 0.84rem;
  color: var(--clr-text-muted);
  line-height: 1.55;
}

.footer-chars {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--clr-text-dim);
}

.fc {
  cursor: default;
  transition: var(--transition-fast);
}

.fc:hover {
  color: var(--clr-lilac);
  transform: scale(1.4);
  display: inline-block;
}

/* Links */
.footer-links {
  display: flex;
  gap: 48px;
}

.fl-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fl-head {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--clr-violet-soft);
  font-weight: 600;
  margin-bottom: 4px;
}

.fl-link {
  font-size: 0.87rem;
  color: var(--clr-text-muted);
  transition: var(--transition-fast);
}

.fl-link:hover {
  color: var(--clr-lilac);
  transform: translateX(3px);
  display: inline-block;
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid var(--clr-border);
  padding: 16px 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.footer-copy {
  font-size: 0.77rem;
  color: var(--clr-text-dim);
  letter-spacing: 0.02em;
}

.footer-emojis {
  font-size: 1rem;
  letter-spacing: 2px;
  opacity: 0.7;
  animation: footer-pulse 4s ease-in-out infinite;
}

@keyframes footer-pulse {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
  }

  .footer-links {
    flex-wrap: wrap;
  }

  .footer-bottom-inner {
    justify-content: center;
    text-align: center;
  }
}
</style>
