<template>
  <div class="app_menu">
    <div class="app_menu_logo">next-admin</div>
    <el-scrollbar class="app_menu_scrollbar">
      <el-menu
        mode="vertical"
        class="app_sidebar_menu"
        :collapse="isCollapse"
        :default-active="activeMenu"
        :collapse-transition="true"
        background-color="var(--menu_background)"
      >
        <menu-item
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
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'
import { useAppSettingStore } from '@/stores/appSetting'
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const appSettingState = useAppSettingStore()
const isCollapse = computed(() => appSettingState.state.isCollapse)
const routesList = reactive([
  {
    path: '/',
    meta: { title: 'Basic Demo', icon: 'eye-open' },
    alwaysShow: true,
    children: [
      {
        path: 'about',
        name: 'about',
        meta: { title: 'about' }
      },
      {
        path: 'pinia',
        name: 'pinia',
        meta: { title: 'pinia' }
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
        meta: {
          title: 'KeepAlive Group',
          cacheGroup: ['KeepAliveGroup', 'SecondChild', 'ThirdChild']
        }
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
  .app_menu_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--header_height);
    color: var(--menu_textColor);
    background: var(--menu_background);
  }
  .app_sidebar_menu {
    overflow: hidden;
    .el-menu--inline {
      --el-menu-hover-bg-color: var(--menu_hoverBackground) !important;
    }
  }
  .app_menu_scrollbar {
    flex: 1;
    background: var(--menu_background);
    border-right: 1px solid var(--menu_background);
  }
}

.el-menu-item {
  position: relative;
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:after {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    height: 100%;
    width: 3px;
    position: absolute;
    background: var(--el-color-primary);
    transform: scaleY(0.0001);
    transition: opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:hover {
    &::after {
      opacity: 1;
      transform: scaleY(1);
    }
  }
}

.el-menu-item.is-active {
  &::after {
    opacity: 1;
    transform: scaleY(1);
  }
  background: var(--menu_hoverBackground);
}
</style>