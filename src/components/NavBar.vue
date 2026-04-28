<template>
  <nav :class="['navbar', { scrolled: isScrolled }]" role="navigation" aria-label="Navegación principal">
    <div class="nav-inner">
      <a href="#inicio" class="nav-logo" id="nav-logo">
        <span class="logo-char">𑣲</span>
        <span class="logo-name">eri</span>
        <span class="logo-sparkle">✦</span>
      </a>

      <ul class="nav-links" role="list">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" :id="`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`"
            :class="['nav-link', { active: activeSection === link.section }]" @click="activeSection = link.section">{{
              link.label }}</a>
        </li>
      </ul>

      <!-- CTA icons desktop -->
      <div class="nav-ctas">
        <a href="https://github.com/eriihub" target="_blank" rel="noopener" id="nav-github-btn" class="nav-icon-btn"
          title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span class="icon-label">GitHub</span>
        </a>
        <a href="https://es.linkedin.com/in/erika-sof%C3%ADa-ruiz-de-almir%C3%B3n-trelles-894b65364" target="_blank"
          rel="noopener" id="nav-linkedin-btn" class="nav-icon-btn nav-icon-btn--linkedin" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span class="icon-label">LinkedIn</span>
        </a>
      </div>

      <!-- Mobile burger -->
      <button class="burger" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Menú móvil"
        id="nav-burger" :class="{ open: mobileOpen }">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" class="mobile-menu glass" id="mobile-menu">
        <a v-for="link in links" :key="link.href" :href="link.href" class="mobile-link" @click="mobileOpen = false">{{
          link.label }}</a>
        <div class="mobile-divider"></div>
        <a href="https://github.com/eriihub" target="_blank" rel="noopener"
          class="mobile-link mobile-social github-mobile" @click="mobileOpen = false">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub ↗
        </a>
        <a href="https://es.linkedin.com/in/erika-sof%C3%ADa-ruiz-de-almir%C3%B3n-trelles-894b65364" target="_blank"
          rel="noopener" class="mobile-link mobile-social linkedin-mobile" @click="mobileOpen = false">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn ↗
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('inicio')

const links = [
  { href: '#inicio', label: 'Inicio', section: 'inicio' },
  { href: '#sobre-mi', label: 'Sobre mí', section: 'sobre-mi' },
  { href: '#trayectoria', label: 'Trayectoria', section: 'trayectoria' },
  { href: '#skills', label: 'Skills', section: 'skills' },
  { href: '#proyectos', label: 'Proyectos', section: 'proyectos' },
  { href: '#contacto', label: 'Contacto', section: 'contacto' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 40

  // Scroll spy logic
  const docHeight = document.documentElement.scrollHeight
  const winHeight = window.innerHeight

  // If at the very bottom, activate the last section
  if (window.scrollY + winHeight >= docHeight - 50) {
    activeSection.value = links[links.length - 1].section
    return
  }

  // Otherwise, find which section is currently in the upper half of the viewport
  for (const link of links) {
    const el = document.getElementById(link.section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= winHeight * 0.4 && rect.bottom >= winHeight * 0.4) {
        activeSection.value = link.section
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  // Run once on mount to set initial state
  onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(7, 7, 15, 0.88);
  backdrop-filter: blur(28px) saturate(200%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
  padding: 12px 0;
  border-bottom: 1px solid rgba(200, 150, 245, 0.2);
  box-shadow: 0 4px 30px rgba(130, 60, 200, 0.12);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--clr-text);
  text-decoration: none;
  letter-spacing: -0.01em;
  margin-right: auto;
  flex-shrink: 0;
}

.logo-char {
  color: var(--clr-violet);
  font-size: 1.1em;
}

.logo-name {
  background: linear-gradient(135deg, var(--clr-lilac), var(--clr-rose-lila));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-sparkle {
  color: var(--clr-rose-lila);
  font-size: 0.7em;
  animation: float-char 3s ease-in-out infinite;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2px;
}

.nav-link {
  padding: 7px 12px;
  border-radius: 99px;
  font-size: 0.84rem;
  font-weight: 400;
  color: var(--clr-text-muted);
  transition: var(--transition);
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  color: var(--clr-lilac);
  background: rgba(180, 110, 245, 0.12);
}

/* CTA icons */
.nav-ctas {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.nav-icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 99px;
  border: 1.5px solid rgba(200, 150, 245, 0.35);
  background: rgba(180, 110, 245, 0.08);
  color: var(--clr-lilac);
  font-size: 0.82rem;
  font-weight: 500;
  transition: var(--transition);
  white-space: nowrap;
}

.nav-icon-btn:hover {
  background: rgba(180, 110, 245, 0.2);
  border-color: var(--clr-violet-soft);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px var(--clr-glow);
  color: var(--clr-text);
}

.nav-icon-btn--linkedin {
  color: var(--clr-blue-gal);
  border-color: rgba(150, 170, 255, 0.32);
  background: rgba(100, 120, 255, 0.07);
}

.nav-icon-btn--linkedin:hover {
  background: rgba(100, 120, 255, 0.18);
  border-color: var(--clr-blue-gal);
  box-shadow: 0 4px 16px rgba(100, 120, 255, 0.3);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 8px;
  border-radius: 8px;
  transition: var(--transition);
  cursor: pointer;
}

.burger:hover {
  background: rgba(180, 110, 245, 0.1);
}

.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--clr-lilac);
  border-radius: 2px;
  transition: var(--transition);
  transform-origin: center;
}

.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 12px;
  right: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(200, 150, 245, 0.25);
  background: rgba(10, 8, 20, 0.92);
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  box-shadow: 0 16px 60px rgba(100, 40, 200, 0.25), 0 4px 20px rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.mobile-link {
  padding: 12px 16px;
  border-radius: var(--radius-md);
  color: var(--clr-text-muted);
  font-size: 0.92rem;
  font-weight: 400;
  transition: var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-link:hover {
  color: var(--clr-lilac);
  background: rgba(180, 110, 245, 0.12);
}

.mobile-divider {
  height: 1px;
  background: rgba(200, 150, 245, 0.15);
  margin: 6px 0;
  border-radius: 1px;
}

.mobile-social {
  font-weight: 500;
}

.github-mobile {
  color: var(--clr-violet-soft);
}

.linkedin-mobile {
  color: var(--clr-blue-gal);
}

.github-mobile:hover {
  background: rgba(180, 110, 245, 0.12);
}

.linkedin-mobile:hover {
  background: rgba(100, 120, 255, 0.12);
  color: var(--clr-blue-gal);
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.97);
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-links {
    gap: 0;
  }

  .nav-link {
    padding: 7px 9px;
    font-size: 0.82rem;
  }

  .icon-label {
    display: none;
  }

  .nav-icon-btn {
    padding: 8px 10px;
  }
}

@media (max-width: 768px) {

  .nav-links,
  .nav-ctas {
    display: none;
  }

  .burger {
    display: flex;
  }

  .nav-logo {
    margin-right: 0;
  }

  .nav-inner {
    gap: 0;
    justify-content: space-between;
  }
}
</style>
