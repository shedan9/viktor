import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  const userInfo = ref(null);
  const theme = ref('light');

  return { userInfo, theme };
});
