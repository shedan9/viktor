<script setup>
import { useRoute } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import { Sunny, Moon } from '@element-plus/icons-vue';

const route = useRoute();
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-menu
    router
    :default-active="route.path"
    class="app-head-menu"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="/" route="/">
      <img
        style="height: 32px"
        src="@/assets/img/logo.svg"
        alt="Element logo"
      />
      <h1 class="title">Viktor</h1>
    </el-menu-item>
    <el-menu-item index="/setting" route="/setting"
      >Setting Center</el-menu-item
    >

    <el-button class="theme-btn" text size="small" @click="toggleDark()">
      <el-icon size="20">
        <Moon v-show="isDark" />
        <Sunny v-show="!isDark" />
      </el-icon>
    </el-button>

    <el-dropdown>
      <div class="user-avatar">
        <el-avatar
          :size="36"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-menu>
</template>

<style scoped>
.app-head-menu {
  .title {
    margin-left: 12px;
  }

  > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }

  .theme-btn {
    width: 80px;
    height: 100%;
    margin-left: 12px;
  }

  .user-avatar {
    display: flex;
    align-items: center;
    padding: 0 24px;
  }
}
</style>
