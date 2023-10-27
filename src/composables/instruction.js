import { ref } from 'vue'
import { useApi } from './api'
import { useCurrentPage } from './currentPage'

const { getInstructionData } = useApi()
const { update } = useCurrentPage()

export function useInstruction() {
  const instruction = ref({})

  const isFetching = ref(false)

  const getInstruction = async (slug) => {
    isFetching.value = true
    try {
      const response = await getInstructionData(slug)
      instruction.value = response
      update({
        topic: response.topic_name,
        title: response.header
      })
    } finally {
      isFetching.value = false
    }
  }

  return { instruction, isFetching, getInstruction }
}
