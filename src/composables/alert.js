import { ref } from "vue";

const isAlertOpen = ref(false);
const errCode = ref("");
const errText = ref("");

export function useAlert() {
  function openAlert(code, text) {
    isAlertOpen.value = true;
    errCode.value = code;
    errText.value = text;
  }

  function reset() {
    isAlertOpen.value = false;
    errCode.value = "";
    errText.value = "";
  }

  return { isAlertOpen, errCode, errText, openAlert, reset };
}
