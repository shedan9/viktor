<script setup>
import AppLayout from '@/components/layout/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <el-empty :image-size="200">
      <template #description>
        <h1>404</h1>
      </template>
    </el-empty>
  </AppLayout>
</template>

<style scoped></style>
