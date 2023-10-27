<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useQuestions } from '@/composables/questions'
import { FaceSmileIcon, FaceFrownIcon } from '@heroicons/vue/24/outline'
import BaseSpinner from '@/components/BaseSpinner.vue'

const route = useRoute()
const {
  questions,
  currentQuestion,
  currentQuestionIndex,
  currentAnswers,
  selectedAnswer,
  correctAnswersCount,
  onTimeout,
  onEnd,
  isGoodEstimation,
  getQuestions,
  checkAnswer
} = useQuestions()

watch(
  () => route.params.id,
  async (id) => {
    await getQuestions(id)
  },
  { immediate: true }
)
</script>

<template>
  <div v-if="questions.length" class="relative z-20 w-full">
    <div class="hidden lg:block">
      <p class="mb-2 text-sm font-semibold leading-6 text-purple-600 dark:text-purple-500">
        {{ currentQuestion.topic_header }}
      </p>
      <h1
        class="inline-block text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-200"
      >
        Тест
      </h1>
    </div>
    <div
      class="relative w-full rounded-xl border border-zinc-900/10 bg-zinc-50 p-4 shadow-sm dark:border-zinc-300/10 dark:bg-zinc-800/30 lg:mt-8"
    >
      <BaseSpinner v-if="onTimeout" class="absolute right-4 top-4 h-6 w-6" />
      <div v-if="!onEnd">
        <div class="w-full border-b border-zinc-900/10 pb-4 dark:border-zinc-300/10">
          <span class="text-sm sm:text-base">
            Вопрос {{ currentQuestionIndex + 1 }} из {{ questions.length }}
          </span>
        </div>

        <h2 class="mt-4 font-extrabold tracking-tight text-zinc-900 dark:text-zinc-200 sm:text-xl">
          {{ currentQuestion.question }}
        </h2>
        <ul class="mt-4 flex flex-col gap-2 text-sm sm:text-base">
          <li v-for="answer in currentAnswers" :key="answer">
            <button
              @click="checkAnswer(answer)"
              :class="[
                {
                  'bg-green-300 text-black dark:bg-green-800 dark:text-white':
                    selectedAnswer !== null && answer.is_true,
                  'bg-red-300 text-black dark:bg-red-800 dark:text-white':
                    answer.id === selectedAnswer && !answer.is_true,
                  'bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800':
                    selectedAnswer === null
                },
                'w-full rounded-xl border border-zinc-900/10 p-3 text-left transition-all disabled:cursor-progress dark:border-zinc-300/10'
              ]"
              :disabled="selectedAnswer !== null"
            >
              {{ answer.content }}
            </button>
          </li>
        </ul>
      </div>
      <div v-else>
        <div class="w-full border-b border-zinc-900/10 pb-4 dark:border-zinc-300/10">
          <span class="text-sm sm:text-base"> Результат теста </span>
        </div>
        <div
          :class="[
            isGoodEstimation
              ? 'text-green-600 dark:text-green-500'
              : 'text-red-600 dark:text-red-500',
            'flex flex-col items-center gap-4 py-4'
          ]"
        >
          <component class="h-16 w-16" :is="isGoodEstimation ? FaceSmileIcon : FaceFrownIcon" />
          <p class="text-3xl font-bold">{{ correctAnswersCount }} из {{ questions.length }}</p>
          <p
            v-if="isGoodEstimation"
            class="text-center text-zinc-700 dark:text-zinc-200 lg:text-lg"
          >
            Отлично! Материал усвоен.
          </p>
          <p v-else class="text-center text-zinc-700 dark:text-zinc-200 lg:text-lg">
            Вам нужно повторить материалы.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
