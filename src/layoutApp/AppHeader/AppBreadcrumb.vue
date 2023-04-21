<template>
  <el-breadcrumb class="app_breadcrumb" separator="/">
    <transition-group v-if="mainNeedAnimation" name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index === levelList.length - 1"
          class="no_redirect"
        >
          {{ item.meta?.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta?.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
    <template v-else>
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index === levelList.length - 1"
          class="no_redirect"
        >
          {{ item.meta?.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta?.title }}</a>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { compile } from 'path-to-regexp'
import { useRoute, useRouter } from 'vue-router'
import { useAppSettingStore } from '@/stores/appSetting'

const appSettingStore = useAppSettingStore()
const mainNeedAnimation = computed(() => appSettingStore.state.mainNeedAnimation)

const route = useRoute()
const router = useRouter()

const levelList = ref([])

function getBreadcrumb() {
  // only show routes with has meta.title
  let matched = route.matched.filter((item) => item.meta?.title)
  //如果首页Dashboard,如果没有，添加Dashboard路由到第一个路由
  const isHasDashboard = matched[0]?.name?.toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
  if (!isHasDashboard) {
    matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
  }
  //过滤面包屑显示的数组
  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
}

function pathCompile(path) {
  const { params } = route
  const toPath = compile(path)
  return toPath(params)
}

function handleLink(item) {
  const { redirect, path } = item
  if (redirect) return router.push(redirect)
  if (path) return router.push(pathCompile(path))
}

//监听路由路径刷新 面包屑显示数组
watch(
  () => route.path,
  () => getBreadcrumb(),
  { immediate: true }
)
</script>

<style scoped>
</style>