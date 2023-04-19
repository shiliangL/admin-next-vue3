<template>
  <el-container class="layout">
    <el-aside class="layout_aside">
      <AppMenu></AppMenu>
    </el-aside>
    <el-container class="layout_container">
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-main>
        <AppRouterBody></AppRouterBody>
      </el-main>
      <el-footer>
        <AppFooter></AppFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppFooter from './AppFooter/index.vue'
import AppRouterBody from './AppRouterBody/index.vue'

</script>

<style lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .el-header{
    --el-header-height: 50px;
    --el-header-padding: 0 18px;
  }
}
</style>