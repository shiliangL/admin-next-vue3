<template>
  <template v-if="!item.hidden">
    <template v-if="showSidebarItem(item.children, item)">
      <MenuLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <MenuIcon :meta="onlyOneChild.meta || item.meta" />
          <template #title>{{ onlyOneChild.meta?.title }}</template>
        </el-menu-item>
      </MenuLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template v-if="item.meta" #title>
        <MenuIcon :meta="item.meta" />
        <span>{{ item.meta.title }}</span>
      </template>
      <menu-item
        :key="child.path"
        :is-nest="true"
        :item="child"
        v-for="child in item.children"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>
 
<script setup>
import { ref } from 'vue'
import MenuLink from './menuLink.vue'
import MenuIcon from './menuIcon.vue'
import { resolve } from 'path-browserify'
import { isExternal } from '@/utils/index'

const props = defineProps({
  //每一个router Item
  item: {
    type: Object,
    required: true
  },
  //用于判断是不是子Item,设置响应的样式
  isNest: {
    type: Boolean,
    default: false
  },
  //基础路径，用于拼接
  basePath: {
    type: String,
    default: ''
  }
})

const onlyOneChild = ref()
const showSidebarItem = (children = [], parent) => {
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false
    } else {
      return true
    }
  })
  if (showingChildren.length === 1 && !parent?.alwaysShow) {
    onlyOneChild.value = showingChildren[0]
    return true
  }
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noChildren: true }
    return true
  }
  return false
}

const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return resolve(props.basePath, routePath)
}
</script>

<style lang="scss" scoped>
</style>