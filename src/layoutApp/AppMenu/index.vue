<template>
  <div class="app_menu">
    <div class="app_menu_logo">
      <!-- logo -->
    </div>
    <el-scrollbar class="app_menu_scrollbar">
      <el-menu
        mode="vertical"
        :collapse="!isCollapse"
        :default-active="activeMenu"
        :collapse-transition="false"
      >
        <AppMenuItem
          v-for="route in routesList"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import AppMenuItem from './AppMenuItem.vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import listJSON from './list.json'
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const appStore = useAppStore()
const isCollapse = computed(() => appStore.isCollapse)
const routesList = reactive(listJSON)

const routeInstance = useRoute()
const activeMenu = computed(() => {
  const { meta, path } = routeInstance
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss">
.app_menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  .app_menu_bar {
    flex: 1;
  }
}
</style>