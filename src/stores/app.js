import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('APP_STORE ', () => {
  const isCollapse = ref(false)

  function SET_COLLAPSE_MENU() {
    isCollapse.value = !isCollapse.value
  }

  return { isCollapse, SET_COLLAPSE_MENU }
})
