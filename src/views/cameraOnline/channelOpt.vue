<template>
  <div class="camera">
    <div class="camera_tools">工具栏</div>
    <div class="grid_main">
      <div class="grid_main_item">
        {{ channel }}
      </div>
      <div class="grid_main_item">
        {{ channel }}
      </div>
      <div class="grid_main_item">
        {{ channel }}
      </div>
      <div class="grid_main_item">
        {{ channel }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  channel: Number // 1 - 4 频道
})
</script>

<style lang="scss" scoped>
.camera {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .grid_main {
    flex: 1;
    color: #fff;
    display: grid;
    grid-gap: 4px;
    grid-auto-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    .grid_main_item {
      background: #333;
      iframe {
        border: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>