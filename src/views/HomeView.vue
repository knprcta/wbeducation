<script setup>
import { useTopics } from '@/composables/topics'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import UISearchButton from '@/components/UISearchButton.vue'
import BaseLink from '@/components/BaseLink.vue'
import LessonIcon from '@/components/icons/LessonIcon.vue'
import ExamIcon from '@/components/icons/ExamIcon.vue'
import AddEduIcon from '@/components/icons/AddEduIcon.vue'
import VideoIcon from '@/components/icons/VideoIcon.vue'
import MentorIcon from '@/components/icons/MentorIcon.vue'
import GameIcon from '@/components/icons/GameIcon.vue'

const { topics } = useTopics()
const lessonLink = topics.value[0].instruction_set[0].slug
</script>

<template>
  <div>
    <div class="lg:pt-10">
      <div>
        <h1
          class="hidden text-4xl font-bold text-purple-600 dark:text-purple-500 sm:block lg:text-5xl lg:leading-[3.5rem]"
        >
          WB education
        </h1>
        <p
          class="text-4xl font-bold text-zinc-900 dark:text-zinc-200 lg:text-5xl lg:leading-[3.5rem]"
        >
          Ваш верный спутник в работе
        </p>
        <p class="pt-4 text-xl lg:text-2xl">Здесь вы найдёте ответы на интересующие вас вопросы.</p>
      </div>

      <div class="hidden grid-cols-3 lg:grid gap-8 mt-8">
        <UISearchButton
          type="button"
          class="flex items-center rounded-xl px-4 py-3 text-sm leading-6 text-zinc-400 shadow-sm ring-1 ring-zinc-900/10 hover:ring-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:ring-zinc-700"
        >
          <MagnifyingGlassIcon class="mr-3 h-5 w-5" />
          Поиск...
        </UISearchButton>
      </div>

      <div
        class="mt-4 grid grid-cols-2 grid-rows-3 gap-4 sm:mt-6 sm:gap-6 md:mt-8 md:grid-cols-3 md:grid-rows-2 md:gap-8"
      >
        <BaseLink
          :to="'/instructions/' + lessonLink"
          class="rounded-xl border border-zinc-900/10 bg-zinc-50 hover:bg-gray-100 dark:border-transparent dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          <div class="flex h-full flex-col items-center justify-between p-3 sm:gap-2 sm:p-5">
            <LessonIcon class="h-12 w-12 text-purple-600 dark:text-purple-500 sm:h-20 sm:w-20" />
            <p class="text-center text-sm font-bold text-zinc-900 dark:text-zinc-200 sm:text-lg">
              Уроки
            </p>
          </div>
        </BaseLink>

        <div
          class="rounded-xl border border-zinc-900/10 bg-zinc-50 opacity-50 dark:border-transparent dark:bg-zinc-800"
        >
          <div class="flex h-full flex-col items-center justify-between p-3 sm:gap-2 sm:p-5">
            <ExamIcon class="h-12 w-12 text-purple-600 dark:text-purple-500 sm:h-20 sm:w-20" />
            <p class="text-center text-sm font-bold text-zinc-900 dark:text-zinc-200 sm:text-lg">
              В разработке
            </p>
          </div>
        </div>
        <div
          class="rounded-xl border border-zinc-900/10 bg-zinc-50 opacity-50 dark:border-transparent dark:bg-zinc-800"
        >
          <div class="flex h-full flex-col items-center justify-between p-3 sm:gap-2 sm:p-5">
            <AddEduIcon class="h-12 w-12 text-purple-600 dark:text-purple-500 sm:h-20 sm:w-20" />
            <p class="text-center text-sm font-bold text-zinc-900 dark:text-zinc-200 sm:text-lg">
              В разработке
            </p>
          </div>
        </div>
        <div
          class="rounded-xl border border-zinc-900/10 bg-zinc-50 opacity-50 dark:border-transparent dark:bg-zinc-800"
        >
          <div class="flex h-full flex-col items-center justify-between p-3 sm:gap-2 sm:p-5">
            <VideoIcon class="h-12 w-12 text-purple-600 dark:text-purple-500 sm:h-20 sm:w-20" />
            <p class="text-center text-sm font-bold text-zinc-900 dark:text-zinc-200 sm:text-lg">
              В разработке
            </p>
          </div>
        </div>
        <div
          class="rounded-xl border border-zinc-900/10 bg-zinc-50 opacity-50 dark:border-transparent dark:bg-zinc-800"
        >
          <div class="flex h-full flex-col items-center justify-between p-3 sm:gap-2 sm:p-5">
            <MentorIcon class="h-12 w-12 text-purple-600 dark:text-purple-500 sm:h-20 sm:w-20" />
            <p class="text-center text-sm font-bold text-zinc-900 dark:text-zinc-200 sm:text-lg">
              В разработке
            </p>
          </div>
        </div>
        <div
          class="rounded-xl border border-zinc-900/10 bg-zinc-50 opacity-50 dark:border-transparent dark:bg-zinc-800"
        >
          <div class="flex h-full flex-col items-center justify-between p-3 sm:gap-2 sm:p-5">
            <GameIcon class="h-12 w-12 text-purple-600 dark:text-purple-500 sm:h-20 sm:w-20" />
            <p class="text-center text-sm font-bold text-zinc-900 dark:text-zinc-200 sm:text-lg">
              В разработке
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
