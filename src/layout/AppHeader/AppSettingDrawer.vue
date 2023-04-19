<template>
  <el-drawer
    size="300px"
    direction="rtl"
    @closed="closed"
    :show-close="false"
    :model-value="modelValue"
  >
    <h3>整体风格设置</h3>
    <div class="theme-box">

    </div>
    <h3>主题色</h3>
    <div class="theme-box">

    </div>
    <h3>其他设置</h3>
    <div class="list">

    </div>
  </el-drawer>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
  }
})
const emit = defineEmits(['change'])
function closed(){
  emit('change', false)
}
console.log(props);
</script>