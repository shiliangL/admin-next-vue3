<template>
  <div class="app_header">
    <div class="app_header_item left">
      <div class="collapse_icon active" @click="clickChangeCollapse">
        <el-icon>
          <Expand v-if="isCollapse" />
          <Fold v-else  />
        </el-icon>
      </div>
      <AppBreadcrumb />
    </div>
    <div class="app_header_item right">
      <el-icon class="header_icon_item">
        <FullScreen />
      </el-icon>
      <el-icon class="header_icon_item">
        <CopyDocument />
      </el-icon>
      <AppTheme class="header_icon_item"></AppTheme>
      <div class="header_user_item">
        <el-dropdown>
          <span class="el-dropdown-link"> 管理员 </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppTheme from './AppTheme.vue'
import AppBreadcrumb from './AppBreadcrumb.vue'
import { useAppSettingStore } from '@/stores/appSetting'
import { Expand, Fold, FullScreen, CopyDocument } from '@element-plus/icons-vue'

const appSettingStore = useAppSettingStore()

const isCollapse = computed(()=>{
  return appSettingStore.state.isCollapse
})

function clickChangeCollapse(){
  appSettingStore.setAppSettingState({key:'isCollapse', value: !isCollapse.value })
}

</script>

<style lang="scss">
.app_header {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  .collapse_icon {
    left: 0px;
    font-size: 22px;
    margin-right: 6px;
    width: var(--el-header-height);
    height: var(--el-header-height);
    background: #1d1d1d;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app_header_item {
    display: flex;
    align-items: center;
    &.right{
      padding-right: 20px;
    }
  }

  .el-icon {
    cursor: pointer;
    --color: var(--el-text-color-primary);
  }
  .header_icon_item {
    padding: 0 6px;
  }
  .header_user_item {
    margin-left: 6px;
  }
}
</style>