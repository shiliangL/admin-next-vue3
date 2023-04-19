
<template>
 <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { onMounted } from 'vue'
import request from '@/utils/request'
import { RouterView } from 'vue-router'
import locale from 'element-plus/lib/locale/lang/zh-cn'

request({
  url: '/table/list',
  method: 'get',
  baseURL: '/mock',
}).then((res) => {
  console.log(`res`, res);
})

fetch('/mock/table/list',{
  method:'get'
}).then(res=> res.json()).then((res) => {
  console.log(`sb`, res);
})

onMounted(()=>{
  console.log('onMounted');
})
</script>
 