<script setup>
const activeIndex = '';

function handleSelect(value) {
  console.log(value);
}
</script>

<template>
  <el-menu
    router
    :default-active="activeIndex"
    class="app-head-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="/">
      <img
        style="height: 32px"
        src="@/assets/img/logo.svg"
        alt="Element logo"
      />
      <h1 class="title">Viktor</h1>
    </el-menu-item>
    <el-menu-item index="/setting">Setting Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

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

  .user-avatar {
    display: flex;
    align-items: center;
    padding: 0 24px;
  }
}
</style>
