<template>
  <div class="app_router_body">
    <router-view v-slot="{ Component }">
      <transition v-if="mainNeedAnimation" name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </transition>
      <keep-alive v-else :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
import { useAppSettingStore } from '@/stores/appSetting'

const appSettingStore = useAppSettingStore()
const mainNeedAnimation = computed(() => appSettingStore.state.mainNeedAnimation)

const cachedViews = ref([])
 
</script>

<style lang="scss">
.app_router_body {
  --padding: 10px;
  width: calc(100% - var(--padding));
  height: calc(100% - var(--padding));
  background: var(--container_background);
}
</style>