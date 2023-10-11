<script setup>
import { watchEffect } from "vue";
import { useQuestions } from "../composables/questions";
import Preloader from "../components/Preloader.vue";

const props = defineProps(["id"]);

const {
  questions,
  currentQuestion,
  currentQuestionIndex,
  selectedAnswer,
  correctAnswersCount,
  onTimeout,
  onEnd,
  getQuestions,
  checkAnswer,
} = useQuestions();

watchEffect(() => {
  getQuestions(props.id);
});
</script>

<template>
  <div v-if="questions.length" class="relative z-20">
    <div>
      <p
        class="mb-2 text-sm font-semibold leading-6 text-wb-dark dark:text-wb-light">
        {{ currentQuestion.topic_header }}
      </p>
      <h1
        class="inline-block text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200 sm:text-3xl">
        Тест
      </h1>
    </div>
    <div
      class="relative mb-20 mt-4 rounded border border-neutral-900/10 p-4 shadow dark:border-neutral-300/10 sm:mt-8">
      <Preloader
        v-if="onTimeout"
        class="absolute right-4 top-4 h-6 w-6"></Preloader>
      <div v-if="!onEnd">
        <div
          class="w-full border-b border-neutral-900/10 pb-4 dark:border-neutral-300/10">
          <span>
            Вопрос {{ currentQuestionIndex + 1 }} из {{ questions.length }}
          </span>
        </div>

        <h2
          class="mt-4 text-xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200">
          {{ currentQuestion.question }}
        </h2>
        <ul class="mt-4 flex flex-col gap-2">
          <li v-for="answer in currentQuestion.answer_set" class="w-full">
            <button
              @click="checkAnswer(answer)"
              :class="[
                {
                  'bg-green-300 text-black dark:bg-green-800 dark:text-white':
                    selectedAnswer !== null && answer.is_true,
                  'bg-red-300 text-black dark:bg-red-800 dark:text-white':
                    answer.id === selectedAnswer && !answer.is_true,
                  'hover:border-wb-dark dark:hover:border-wb-light hover:-translate-y-1':
                    selectedAnswer === null,
                },
                'w-full rounded border border-neutral-900/10 p-3 transition-all text-left disabled:cursor-progress dark:border-neutral-300/10',
              ]"
              :disabled="selectedAnswer !== null">
              {{ answer.content }}
            </button>
          </li>
        </ul>
      </div>
      <div v-else>
        <h2
          class="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200">
          Ваш результат: {{ correctAnswersCount }} из {{ questions.length }}
        </h2>
        <p class="mt-4 text-lg">
          <span v-if="correctAnswersCount / questions.length >= 0.9">
            Отлично!
          </span>
          <span v-else-if="correctAnswersCount / questions.length >= 0.75">
            Хорошо! Вы освоили эту тему.
          </span>
          <span v-else>Вам нужно повторить материалы.</span>
        </p>
      </div>
    </div>
  </div>
</template>
