import { ref } from 'vue'
import { useApi } from './api'

const { getTopicsData } = useApi()
const topics = ref([])

export function useTopics() {
  const isFetching = ref(false)

  const getTopics = async () => {
    isFetching.value = true
    try {
      const response = await getTopicsData()
      topics.value = response
    } finally {
      isFetching.value = false
    }
  }

  return { topics, isFetching, getTopics }
}
