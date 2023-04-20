<template>
  <div class="app_tabs">
    <el-tabs
      type="card"
      class="tabs_bar_wrapper light_blue"
    >
      <!-- :model-value="route.path" -->
      <el-tab-pane
        v-for="menu in tabList"
        :label="menu.meta.title"
        :key="menu.path"
        :name="menu.path"
      >
        <template #label>
          <router-link
            :to="menu.path"
            v-if="menu.meta.title"
            class="tab_pane_link"
          >
            {{ menu.meta.title }}
          </router-link>
        </template>
      </el-tab-pane>
    </el-tabs>

    <!-- <div class="handle">
      <el-dropdown placement="bottom">
        <div class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              icon="el-icon-refresh-left"
              @click="pageReload"
            >重新加载</el-dropdown-item>
            <el-dropdown-item
              icon="el-icon-circle-close"
              :disabled="currentDisabled"
              @click="closeCurrentRoute"
            >关闭当前标签</el-dropdown-item>
            <el-dropdown-item
              icon="el-icon-circle-close"
              :disabled="tabList.length < 3"
              @click="closeOtherRoute"
            >关闭其他标签</el-dropdown-item>
            <el-dropdown-item
              icon="el-icon-circle-close"
              :disabled="tabList.length <= 1"
              @click="closeAllRoute"
            >关闭所有标签</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-tooltip
        class="item"
        effect="dark"
        :content="contentFullScreen ? '退出全屏' : '内容全屏'"
        placement="bottom"
      >
        <i
          class="el-icon-full-screen"
          @click="onFullscreen"
        ></i>
      </el-tooltip>
    </div> -->
  </div>
</template>

<script setup>
// import { useSlots, h } from "vue";
// const slots = useSlots();
// const props = defineProps(['modelValue', 'type'])
const tabList = [
  {
    path: 'dynamic-table1',
    name: 'DynamicTable1',
    meta: { title: '菜单1' }
  },
  {
    path: 'dynamic-table2',
    name: 'DynamicTable2',
    meta: { title: '菜单2' }
  },
  {
    path: 'dynamic-table3',
    name: 'DynamicTable3',
    meta: { title: '菜单3' }
  },
]
</script>

<style lang="scss" scoped>
.app_tabs {
  --app_tabs_padding: 0 10px;
  padding: var(--app_tabs_padding);

  :deep(.tabs_bar_wrapper) {
    height: 38px;
    margin: 0 10px;
    width: calc(100% - 46px);

    .tab_pane_link {
      width: 100%;
      height: 100%;
      display: block;
      font-size: 14px;
      font-weight: 520;
      color: var(--header_tag_item_color);
    }

    .el-tabs__header {
      border: none;
      // border-bottom: 1px solid #e8f4ff;
    }
    .el-tabs__nav {
      border-bottom: none;
      box-sizing: border-box;
      border-radius: 4px 4px 0 0;
      border: 1px solid transparent;
      -webkit-box-sizing: border-box;
    }

    .el-tabs__item {
      border: 0;
      height: 38px;
      margin-top: 6px;
      margin-right: -18px;
      line-height: 38px;
      outline: none;
      user-select: none;
      text-align: center;
      padding: 0 30px 0 30px;
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
      &:hover {
        padding: 0 32px 0 32px;
        color: var(--el-color-primary);
        background: #eceef1 !important;
        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
      }
      &.is-active {
        padding: 0 32px 0 32px;
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
}
</style>