<template>
  <div class="app_router_body">
    <router-view v-slot="{ Component }">
      <!--has transition  setting by settings.mainNeedAnimation-->
      <transition v-if="settings.mainNeedAnimation" name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </transition>
      <!-- no transition -->
      <keep-alive v-else :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
  
<script setup>
import { ref, reactive } from 'vue'
const cachedViews = ref()
const settings = reactive({
  mainNeedAnimation: true
})
</script>

<style lang="scss">
.app_router_body {
  --padding: 10px;
  width: calc(100% - var(--padding));
  height: calc(100% - var(--padding));
  background: var(--container_background);
}
</style>