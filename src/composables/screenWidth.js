import { ref, onMounted, onUnmounted } from 'vue'

export function useScreenWidth() {
  const width = ref(0)

  function update() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })
  onUnmounted(() => window.removeEventListener('resize', update))

  return { width }
}
