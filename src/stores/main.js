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

  function toogleTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return { isOpen, open, close, toogleTheme };
});

export default useMainStore;
