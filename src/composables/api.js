import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()
const url = import.meta.env.VITE_API_URL

const instance = axios.create({
  baseURL: url
})

function _checkRes(response) {
  if (response.status === 200 || response.status === 201) {
    return response.data
  } else {
    throw new Error(`Ошибка ${response.status}`)
  }
}

export function useApi() {
  const getTopicsData = async () => {
    try {
      const response = await instance.get('menu/')
      return _checkRes(response)
    } catch (error) {
      toast.error(error.message, { timeout: false })
    }
  }

  const getInstructionData = async (slug) => {
    try {
      const response = await instance.get(`instructions/${slug}/`)
      return _checkRes(response)
    } catch (error) {
      toast.error(error.message, { timeout: false })
    }
  }

  const getQuestionsData = async (topicId) => {
    try {
      const response = await instance.get(`questions/${topicId}/`)
      return _checkRes(response)
    } catch (error) {
      toast.error(error.message, { timeout: false })
    }
  }

  const checkAnswerData = async (answerId) => {
    try {
      const response = await instance.get(`checkanswer/${answerId}/`)
      return _checkRes(response)
    } catch (error) {
      toast.error(error.message, { timeout: false })
    }
  }

  const getSearchData = async (query) => {
    try {
      const response = await instance.get(`search/?q=${query}`)
      return _checkRes(response)
    } catch (error) {
      toast.error(error.message, { timeout: false })
    }
  }

  const submitFeedbackData = async (data) => {
    try {
      const response = await instance.post('feedback/', data)
      return _checkRes(response)
    } catch (error) {
      toast.error(error.message, { timeout: false })
    }
  }

  return {
    getTopicsData,
    getInstructionData,
    getQuestionsData,
    checkAnswerData,
    getSearchData,
    submitFeedbackData
  }
}
