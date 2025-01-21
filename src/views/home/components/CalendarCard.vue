<script setup>
import { ref } from 'vue';

const value = ref(new Date());
</script>

<template>
  <el-card shadow="hover">
    <el-calendar v-model="value" />
  </el-card>
</template>

<style scoped></style>
