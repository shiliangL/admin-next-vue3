<template>
  <div class="app_router_body">
    AppRouterBody
    <div style="font-size: 20px">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <!-- 你需要直接提供它们 -->
      <Edit style="width: 1em; height: 1em; margin-right: 8px" />
      <Share style="width: 1em; height: 1em; margin-right: 8px" />
      <Delete style="width: 1em; height: 1em; margin-right: 8px" />
      <Search style="width: 1em; height: 1em; margin-right: 8px" />
    </div>
  </div>
</template>
  
<script setup>
import { Edit, Share, Delete, Search } from '@element-plus/icons-vue'
</script>

<style lang="scss">
.app_router_body {
  height: 100%;
  width: 100%;
  background: var(--container_background);
}
</style>