<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useInstruction } from '@/composables/instruction'

const route = useRoute()
const { instruction, getInstruction } = useInstruction()

watch(
  () => route.params.slug,
  async (slug) => {
    await getInstruction(slug)
  },
  { immediate: true }
)

</script>

<template>
  <div v-if="instruction.id">
    <div class="relative z-20">
      <div class="hidden lg:block">
        <p class="mb-2 text-sm font-semibold leading-6 text-purple-600 dark:text-purple-500">
          {{ instruction.topic_name }}
        </p>
        <div class="flex items-center">
          <h1
            class="inline-block text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-200"
          >
            {{ instruction.header }}
          </h1>
        </div>
      </div>
      <p
        class="mt-2 text-lg font-bold text-zinc-900 dark:text-zinc-200 lg:font-normal lg:text-zinc-700 lg:dark:text-zinc-400"
      >
        {{ instruction.description }}
      </p>
    </div>
    <div
      class="prose prose-zinc relative z-20 mt-4 dark:prose-dark lg:mt-8"
      v-html="instruction.content"
    ></div>
  </div>
</template>
