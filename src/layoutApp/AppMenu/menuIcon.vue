<template>
  <el-icon class="el-svg-icon">
    <component :is="Grid" />
  </el-icon>
  <!-- <svg-icon v-else-if="meta?.icon" :icon-class="meta?.icon" class="nav-icon" /> -->
</template>

<script setup>
// import * as ElSvg from '@element-plus/icons-vue'
import { Grid } from '@element-plus/icons-vue'
defineProps({
  meta: { type: Object, default: null }
})
</script>

<style scoped lang="scss">
.el-svg-icon {
  width: 1em;
  height: 1em;
  right: 3px;
  font-size: 18px;
  position: relative;
  text-align: left !important;
}
</style>