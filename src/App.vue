<template>
  <div class="galaxy-bg"></div>

  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <TrayectoriaSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
import { watchEffect } from 'vue'
import { useLanguage } from './composables/useLanguage.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TrayectoriaSection from './components/TrayectoriaSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const { lang } = useLanguage()

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.title = lang.value === 'es' ? 'Portfolio de Erika 𑣲⋆.𐙚 ̊' : "Erika's Portfolio 𑣲⋆.𐙚 ̊"
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        lang.value === 'es'
          ? 'Portfolio personal de Erika — Desarrolladora multiplataforma'
          : 'Personal portfolio of Erika — Multiplatform developer'
      )
    }
  }
})
</script>

<style scoped>
main {
  position: relative;
  z-index: 1;
}
</style>
