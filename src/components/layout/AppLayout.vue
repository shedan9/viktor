<script setup>
import LayoutHeader from '@/components/layout/LayoutHeader.vue';
import LayoutSide from '@/components/layout/LayoutSide.vue';
</script>

<template>
  <div class="container">
    <LayoutHeader />
    <div class="main-container">
      <LayoutSide />
      <el-scrollbar class="scroll-container">
        <main>
          <slot />
        </main>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  height: calc(100vh - 60px);
}

.scroll-container {
  flex: 1;
}

main {
  padding: 24px;
}
</style>
