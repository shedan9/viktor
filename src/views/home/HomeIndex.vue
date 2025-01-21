<script setup>
import AppLayout from '@/components/layout/AppLayout.vue';
import StatCard from '@/views/home/components/StatCard.vue';
import TableCard from '@/views/home/components/TableCard.vue';
import CalendarCard from '@/views/home/components/CalendarCard.vue';
import FormCard from '@/views/home/components/FormCard.vue';
</script>

<template>
  <AppLayout>
    <StatCard />
    <el-row gutter="12" style="margin-top: 12px">
      <el-col :span="12">
        <FormCard />
      </el-col>
      <el-col :span="12">
        <CalendarCard />
      </el-col>
    </el-row>
    <TableCard />
  </AppLayout>
</template>

<style scoped></style>
