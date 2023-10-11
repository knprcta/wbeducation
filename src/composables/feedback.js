import { ref } from "vue";
import { useApi } from "./api";

const { submitFeedbackData } = useApi();

export function useFeedback() {
  const name = ref("");
  const id = ref("");
  const message = ref("");
  const isFetching = ref(false);

  const submitFeedback = async () => {
    isFetching.value = true;
    try {
      await submitFeedbackData({
        first_name: name.value,
        employee_id: id.value,
        message: message.value,
      });
    } finally {
      name.value = "";
      id.value = "";
      message.value = "";
      isFetching.value = false;
    }
  };

  return { name, id, message, submitFeedback };
}
