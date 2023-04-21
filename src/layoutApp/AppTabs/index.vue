<template>
  <div class="app_tabs">
    <el-tabs type="card" class="app_tabs_wrapper">
      <!-- :model-value="route.path" -->
      <el-tab-pane
        v-for="menu in tabList"
        :label="menu.meta.title"
        :key="menu.path"
        :name="menu.path"
      >
        <template #label>
          <!-- <router-link :to="menu.path" v-if="menu.meta.title" class="tab_pane_link">
            {{ menu.meta.title }}
          </router-link> -->
          {{ menu.meta.title }}
        </template>
      </el-tab-pane>
    </el-tabs>

    <div class="dropdown_tools">
      <el-dropdown placement="bottom">
        <el-icon><Grid /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Refresh">重新加载</el-dropdown-item>
            <el-dropdown-item :icon="Close">关闭当前标签</el-dropdown-item>
            <el-dropdown-item :icon="Close">关闭其他标签</el-dropdown-item>
            <el-dropdown-item :icon="Close">关闭所有标签</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
// import { storeToRefs } from 'pinia'
// import { resolve } from 'path-browserify'
// import { useRoute, useRouter } from 'vue-router'
// import { useTagsViewStore } from '@/store/tags-view'
// import { getCurrentInstance, nextTick, onMounted, reactive, toRefs, watch } from 'vue'
import { Grid,Refresh,Close } from '@element-plus/icons-vue'
// import { useSlots, h } from "vue";
// const slots = useSlots();
// const props = defineProps(['modelValue', 'type'])
const tabList = new Array(4).fill(0).map((item, index) => ({
  path: 'dynamic-table' + index,
  name: 'DynamicTable' + index,
  meta: { title: '菜单' + index }
}))
</script>

<style lang="scss">
.app_tabs {
  --app_tabs_padding: 0 0px;
  --el-border-color-light: #00000000;

  display: flex;
  padding: var(--app_tabs_padding);
  border-bottom: solid 1px var(--el-menu-border-color);

  a {
    display: block;
    text-decoration: none;
  }
  .app_tabs_wrapper {
    flex: 1;
    position: relative;
  }
  .el-tabs__header {
    margin: 0;
  }
  .dropdown_tools {
    width: 60px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    .el-icon {
      font-size: 18px;
    }
  }

  .el-tabs__item {
    top: 1px;
    border: 0;
    outline: none;
    user-select: none;
    position: relative;
    text-align: center;
    padding: 0 24px 0 24px !important;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    &:hover {
      padding: 0 32px 0 32px !important;
      color: var(--el-color-primary);
      background: #eceef1 !important;
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
    }
    &.is-active {
      padding: 0 32px 0 32px !important;
      color: #1890ff !important;
      background: #e8f4ff !important;
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      .tab_pane_link {
        color: #1890ff !important;
      }
    }
  }
}
</style>