<script setup>
import { onMounted } from 'vue'
import { useTheme } from '@/composables/theme'
import { useTopics } from '@/composables/topics'
import MainLayout from '@/layouts/MainLayout.vue'
import BaseSpinner from '@/components/BaseSpinner.vue'

const { isFetching, getTopics } = useTopics()

useTheme()

onMounted(() => {
  getTopics()
})
</script>

<template>
  <div v-if="isFetching" class="fixed inset-0 h-full w-full">
    <div class="fixed left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 lg:w-1/6">
      <BaseSpinner />
    </div>
  </div>
  <MainLayout v-else />
</template>
