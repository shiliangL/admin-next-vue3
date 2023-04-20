<template>
  <div class="app_menu">
    <div class="app_menu_logo">
      <!-- logo -->
    </div>
    <el-scrollbar class="app_menu_scrollbar">
      <el-menu
        mode="vertical"
        :collapse="isCollapse"
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
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const appStore = useAppStore()
const isCollapse = computed(() => appStore.isCollapse)
const routesList = reactive([
{
  path: '/basic-demo',
  meta: { title: 'Basic Demo', icon: 'eye-open' },
  alwaysShow: true,
  children: [
    {
      path: 'hook',
      name: 'Hook',
      meta: { title: 'Hook' }
    },
    {
      path: 'pinia',
      name: 'Pinia',
      meta: { title: 'Pinia' }
    },
    {
      path: 'mock',
      name: 'Mock',
      meta: { title: 'Mock' }
    },
    {
      path: 'svg-icon',
      name: 'SvgIcon',
      meta: { title: 'Svg Icon' }
    },
    {
      path: 'parent-children',
      name: 'Parent',
      meta: { title: 'Parent Children' }
    },
    {
      path: 'keep-alive-group',
      name: 'KeepAliveGroup',
      meta: { title: 'KeepAlive Group', cacheGroup: ['KeepAliveGroup', 'SecondChild', 'ThirdChild'] }
    },
    {
      path: 'second-child',
      name: 'SecondChild',
      hidden: true,
      meta: { title: 'SecondChild', activeMenu: '/basic-demo/second-keep-alive' }
    },
    {
      path: 'third-child',
      name: 'ThirdChild',
      hidden: true,
      meta: { title: 'ThirdChild', activeMenu: '/basic-demo/second-keep-alive' }
    },
    {
      path: 'tab-keep-alive',
      name: 'TabKeepAlive',
      meta: { title: 'Tab KeepAlive', cachePage: true, closeTabRmCache: true }
    },
    //third-keep-alive
    {
      path: 'third-keep-alive',
      name: 'ThirdKeepAlive',
      meta: { title: 'Third KeepAlive', cachePage: true, leaveRmCachePage: false },
      alwaysShow: true,
      children: [
        {
          path: 'second-children',
          name: 'SecondChildren',
          meta: { title: 'SecondChildren', cachePage: true, leaveRmCachePage: true }
        },
        {
          path: 'third-children',
          name: 'ThirdChildren',
          meta: { title: 'ThirdChildren', cachePage: true, leaveRmCachePage: false }
        }
      ]
    },
    {
      path: 'worker',
      name: 'Worker',
      meta: { title: 'Worker' }
    }
  ]
}
])

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