import { ref } from 'vue'
import { useApi } from './api'
import { useToast } from 'vue-toastification'

const toast = useToast()
const { submitFeedbackData } = useApi()
const isOpen = ref(false)

export function useFeedback() {
  const name = ref('')
  const id = ref('')
  const message = ref('')
  const isFetching = ref(false)

  function openFeedback() {
    isOpen.value = true
  }

  function closeFeedback() {
    isOpen.value = false
  }

  const submitFeedback = async () => {
    isFetching.value = true
    try {
      await submitFeedbackData({
        first_name: name.value,
        employee_id: id.value,
        message: message.value
      })
      toast.success('Ваше обращение отправлено!', { timeout: 2000 })
    } finally {
      name.value = ''
      id.value = ''
      message.value = ''
      isFetching.value = false
      closeFeedback()
    }
  }

  return { isOpen, name, id, message, openFeedback, closeFeedback, submitFeedback }
}
