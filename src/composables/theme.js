import { ref, watch, onMounted } from "vue";

const option = ref(null);
const darkModeActive = ref(false);

export function useTheme() {

  function updateTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      darkModeActive.value = true;
    } else {
      document.documentElement.classList.remove("dark");
      darkModeActive.value = false;
    }
  }

  onMounted(() => {
    const theme = localStorage.theme;
    if (theme === "light" || theme === "dark") {
      option.value = theme;
    } else {
      option.value = "system";
    }
    updateTheme();
  });

  watch(option, () => {
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const mqd = window.matchMedia("(prefers-color-scheme: dark)");
    if (option.value === "system") {
      localStorage.removeItem("theme");
      mql.addEventListener("change", (e) => e.matches && updateTheme());
      mqd.addEventListener("change", (e) => e.matches && updateTheme());
    } else {
      localStorage.theme = option.value;
      mql.removeEventListener("change", (e) => e.matches && updateTheme());
      mqd.removeEventListener("change", (e) => e.matches && updateTheme());
    }
    updateTheme();
  });

  return {
    darkModeActive,
    option,
  };
}
