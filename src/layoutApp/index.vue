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
        <AppRouter></AppRouter>
      </el-main>
      <el-footer>
        <AppFooter></AppFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useAppSettingStore } from '@/stores/appSetting'
import AppMenu from './AppMenu/index.vue'
import AppTabs from './AppTabs/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppFooter from './AppFooter/index.vue'
import AppRouter from './AppRouter/index.vue'

const appSettingStore = useAppSettingStore()
const showTabs = computed(()=> (appSettingStore.state.showTabs))
const isCollapse = computed(()=> (appSettingStore.state.isCollapse))


</script>

<style lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .el-aside {
    transition: 0.3s;
    overflow-x: hidden;
    transition: all .3s cubic-bezier(.645,.045,.355,1),border 0s,color .1s,font-size 0s;

    --el-menu-item-height: var(--header_height);
    --el-menu-text-color: var(--menu_textColor);
    --aside_right_border_color: #dcdfe6;
    --el-menu-border-color: #00000000;
  }

  .el-header {
    --el-header-padding: 0 0;
    --el-header-height: var(--header_height);

    --el-text-color-regular: #fff;
    --el-text-color-primary: #fff;
    background-color: var(--header_background);
  }

  .el-main {
    --el-main-padding: 10px;
    // background: var(--container_background);
  }

  .el-footer {
    --el-footer-height: 30px;
    --el-footer-padding: 0 10px;
  }
}
</style>