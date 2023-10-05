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

  return { isAlertOpen, errCode, errText, openAlert };
}
