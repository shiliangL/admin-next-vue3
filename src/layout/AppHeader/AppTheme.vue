<template>
  <div class="setting">
    <el-icon @click="setVisible">
      <Setting />
    </el-icon>
    <AppSettingDrawer :modelValue="visible" />
  </div>
</template>
  
<script setup>

import { ref } from 'vue'
import { style } from '@/styles/themeStyle.js'
import AppSettingDrawer from './AppSettingDrawer.vue'
import { Setting } from '@element-plus/icons-vue'
console.log(`style`, style);

const visible = ref(false)

function setVisible() {
  console.log(`this`, this);
  visible.value = !visible.value
}
</script>
  
<style scoped>
</style>