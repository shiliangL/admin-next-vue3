import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAppSettingStore = defineStore('APP_SETTING_STORE ', () => {
  // 系统设置
  const state = reactive({
    showTabs: true,
    isCollapse: false,
    mainNeedAnimation: true,
  })

  function setAppSettingState({ key, value }) {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }

  return { state, setAppSettingState }
})
