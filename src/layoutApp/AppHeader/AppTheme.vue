<template>
  <div class="setting">
    <el-icon @click="setVisible">
      <Setting />
    </el-icon>
    <AppSettingDrawer v-model="visible" />
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { style } from '@/styles/themeStyle.js'
import AppSettingDrawer from './AppSettingDrawer.vue'
import { Setting } from '@element-plus/icons-vue'
console.log(`style`, style)

const visible = ref(false)

function setVisible() {
  visible.value = !visible.value
  console.log(`this`, visible.value)
}

function setTheme() {
  const setAppTheme = style['default']
  const body = document.getElementsByTagName('body')[0]
  // 设置全局顶部body上的class名称，即为主题名称，便于自定义配置符合当前主题的样式统一入口
  body.className = 'default'
  // 设置主题色
  // body.style.setProperty('--system-primary-color', state.primaryColor)
  for (const i in setAppTheme) {
    const item = setAppTheme[i]
    for (const y in item) {
      const cssVarName = '--' + i + '_' + y
      body.style.setProperty(cssVarName, item[y])
    }
  }
}

onMounted(()=>{
  setTheme()
})
</script>
  
<style scoped>
</style>