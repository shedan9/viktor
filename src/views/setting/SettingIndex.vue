<script setup>
import AppLayout from '@/components/layout/AppLayout.vue';
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus';

function handleMessageShow(type) {
  const options = {
    type,
    message: 'This is a message.',
    plain: true,
  };

  ElMessage(options);
}

function handleNotificationShow(type) {
  const options = {
    type,
    title: 'Title',
    message: 'This is a notification',
  };

  ElNotification(options);
}

function handleMessageBoxShow(type) {
  ElMessageBox[type]('This is a Message Box', 'Title');
}
</script>

<template>
  <AppLayout>
    <div style="max-width: 600px">
      <el-alert title="Success alert" type="success" />
      <el-alert title="Info alert" type="info" />
      <el-alert title="Warning alert" type="warning" />
      <el-alert title="Error alert" type="error" />
    </div>

    <div class="mt-4">
      <el-button type="success" @click="handleMessageShow('success')"
        >Message</el-button
      >
      <el-button type="info" @click="handleMessageShow('info')"
        >Message</el-button
      >
      <el-button type="warning" @click="handleMessageShow('warning')"
        >Message</el-button
      >
      <el-button type="danger" @click="handleMessageShow('error')"
        >Message</el-button
      >
    </div>

    <div class="mt-4">
      <el-button type="success" @click="handleNotificationShow('success')"
        >Notification</el-button
      >
      <el-button type="info" @click="handleNotificationShow('info')"
        >Notification</el-button
      >
      <el-button type="warning" @click="handleNotificationShow('warning')"
        >Notification</el-button
      >
      <el-button type="danger" @click="handleNotificationShow('error')"
        >Notification</el-button
      >
    </div>

    <div class="mt-4">
      <el-button @click="handleMessageBoxShow('alert')"
        >MessageBox Alert</el-button
      >
      <el-button @click="handleMessageBoxShow('confirm')"
        >MessageBox Confirm</el-button
      >
      <el-button @click="handleMessageBoxShow('prompt')"
        >MessageBox Prompt</el-button
      >
    </div>

    <div class="mt-4">
      <img
        class="img-home"
        src="@/assets/icon/home.svg"
        alt="home"
        title="img-svg"
      />
      <img
        class="img-home"
        src="@/assets/icon/home.png"
        alt="home"
        title="img-png"
      />
      <i class="icon-home svg" title="icon-svg"></i>
      <i class="icon-home png" title="icon-png"></i>
    </div>
  </AppLayout>
</template>

<style scoped>
.el-alert {
  margin: 20px 0 0;

  &:first-child {
    margin-top: 0;
  }
}

.mt-4 {
  margin-top: 20px;
}

.icon-home {
  display: inline-block;
  width: 50px;
  height: 50px;

  &.svg {
    background: url('@/assets/icon/home.svg') no-repeat center / cover;
  }

  &.png {
    background: url('@/assets/icon/home.png') no-repeat center / cover;
  }
}
</style>
