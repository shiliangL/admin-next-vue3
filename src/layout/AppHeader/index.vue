<template>
  <div class="app_header">
    <div class="app_header_item">
      <el-icon>
        <Expand />
      </el-icon>
      <el-icon>
        <Fold />
      </el-icon>
      <AppBreadcrumb />
    </div>
    <div class="app_header_item">
      <el-icon class="header_icon_item">
        <FullScreen />
      </el-icon>
      <el-icon class="header_icon_item">
        <CopyDocument />
      </el-icon>
      <AppTheme class="header_icon_item"></AppTheme>
      <div class="header_user_item">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员
          </span>
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

<!-- {/* <el-icon><Expand /></el-icon> */} -->
<script setup>
import  AppTheme from './AppTheme.vue'
import  AppBreadcrumb from './Breadcrumb.vue'
import { Expand, Fold, FullScreen, CopyDocument } from '@element-plus/icons-vue'
</script>

<style lang="scss">
.app_header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--app_header_background);
  .app_header_item {
    display: flex;
    align-items: center;
  }
  .el-icon{
    cursor: pointer;
  }
  .header_icon_item{
    padding: 0 6px;
  }
  .header_user_item{
    margin-left: 6px;
  }
}
</style>