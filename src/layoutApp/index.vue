<template>
  <el-container class="layout">
    <el-aside class="layout_aside" :width="isCollapse ? '64px' : '250px'">
      <AppMenu></AppMenu>
    </el-aside>
    <el-container class="layout_container">
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <AppTabs v-show="showTabs" />
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
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import AppMenu from './AppMenu/index.vue'
import AppTabs from './AppTabs/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppFooter from './AppFooter/index.vue'
import AppRouterBody from './AppRouterBody/index.vue'

const appStore = useAppStore()
const showTabs = computed(()=> (appStore.showTabs))
const isCollapse = computed(()=> (appStore.isCollapse))


</script>

<style lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .el-aside {
    transition: 0.3s;
    overflow-x: hidden;
  }

  .el-header {
    --el-header-height: 50px;
    --el-header-padding: 0 0;

    --el-text-color-regular: #fff;
    --el-text-color-primary: #fff;
    background-color: var(--header_background);
  }

  .el-main {
    --el-main-padding: 10px;
  }

  .el-footer {
    --el-footer-height: 30px;
    --el-footer-padding: 0 10px;
  }
}
</style>