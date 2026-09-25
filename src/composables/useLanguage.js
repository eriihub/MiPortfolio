import { ref, readonly } from 'vue'

// Singleton reactivo compartido entre todos los componentes
const lang = ref('es')

export function useLanguage() {
  function toggleLang() {
    lang.value = lang.value === 'es' ? 'en' : 'es'
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang.value
    }
  }

  function t(translations) {
    return translations[lang.value] ?? translations['es']
  }

  return {
    lang: readonly(lang),
    toggleLang,
    t,
  }
}
