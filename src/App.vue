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
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TrayectoriaSection from './components/TrayectoriaSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
main {
  position: relative;
  z-index: 1;
}
</style>
