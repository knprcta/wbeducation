<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { HomeIcon } from '@heroicons/vue/20/solid'
import BaseLink from '@/components/BaseLink.vue'
import UISearchButton from '@/components/UISearchButton.vue'

defineProps(['topics', 'handler'])
</script>

<template>
  <nav class="relative lg:text-sm lg:leading-6">
    <div class="pointer-events-none sticky top-0 -ml-0.5 hidden lg:block">
      <div class="h-10 bg-white dark:bg-zinc-900"></div>
      <div class="pointer-events-auto relative bg-white dark:bg-zinc-900">
        <UISearchButton
          type="button"
          class="flex w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-zinc-400 shadow-sm ring-1 ring-zinc-900/10 hover:ring-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:ring-zinc-700"
        >
          <MagnifyingGlassIcon class="mr-3 h-5 w-5" />
          Поиск...
        </UISearchButton>
      </div>
      <div class="h-8 bg-gradient-to-b from-white dark:from-zinc-900"></div>
    </div>
    <BaseLink
      to="/"
      @click="handler"
      class="group mb-4 flex items-center font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 lg:text-sm lg:leading-6"
    >
      <div
        class="mr-4 rounded-md p-2 shadow-sm ring-1 ring-zinc-900/5 group-hover:shadow group-hover:shadow-purple-600/50 group-hover:ring-zinc-900/10 dark:bg-zinc-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-purple-500 dark:group-hover:shadow-none lg:dark:bg-zinc-800"
      >
        <HomeIcon class="h-3 w-3 dark:group-[.active]:fill-white" />
      </div>
      <span>
        Главная
      </span>
    </BaseLink>
    <ul>
      <li v-for="topic in topics" :key="topic" class="mt-8">
        <h2 class="mb-3 font-semibold text-zinc-900 dark:text-zinc-200">
          {{ topic.header }}
        </h2>
        <ul
          class="space-y-2 border-l border-zinc-200 dark:border-zinc-700 lg:border-zinc-100 lg:dark:border-zinc-800"
        >
          <li v-for="link in topic.instruction_set" :key="link">
            <BaseLink
              :to="'/instructions/' + link.slug"
              @click="handler"
              class="-ml-px block border-l pl-4"
              active-class="border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500"
              inactive-class="border-transparent text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
            >
              {{ link.header }}
            </BaseLink>
          </li>
          <li v-if="topic.has_question === true">
            <BaseLink
              :to="'/tests/' + topic.id"
              @click="handler"
              class="-ml-px block border-l pl-4"
              active-class="border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500"
              inactive-class="border-transparent text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-300"
            >
              Тест
            </BaseLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
