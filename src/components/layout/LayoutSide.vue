<script setup>
import { ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Fold,
  Expand,
} from '@element-plus/icons-vue';

const isCollapse = ref(false);

function toggleExpand() {
  isCollapse.value = !isCollapse.value;
}

function handleOpen() {}

function handleClose() {}
</script>

<template>
  <div class="side-menu-container" :class="{ 'is-collapse': isCollapse }">
    <el-menu
      router
      default-active="2"
      class="app-side-menu"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><IconMenu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><Document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>

      <el-button class="expand-button" @click="toggleExpand">
        <el-icon :size="16">
          <Expand v-show="isCollapse" />
          <Fold v-show="!isCollapse" />
        </el-icon>
      </el-button>
    </el-menu>
  </div>
</template>

<style scoped>
.side-menu-container {
  flex-basis: 250px;
}

.side-menu-container.is-collapse {
  flex-basis: 64px;
}

.expand-button {
  position: absolute;
  bottom: 0;
  height: 42px;
  width: 100%;
}

.app-side-menu {
  position: relative;
  height: 100%;
}
</style>
