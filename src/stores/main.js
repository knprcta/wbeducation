import { defineStore } from "pinia";
import { ref } from "vue";

const useMainStore = defineStore("main", () => {
  const isOpen = ref(false);
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }

  return { isOpen, open, close };
});

export default useMainStore;
