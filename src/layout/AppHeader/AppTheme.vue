<template>
  <div class="setting">
    <el-icon @click="setVisible">
      <Setting />
    </el-icon>
    {{  visible  }}
    <AppSettingDrawer v-model="visible" />
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
    visible.value = !visible.value
    console.log(`this`, visible.value);
}
</script>
  
<style scoped>
</style>