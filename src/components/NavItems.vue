<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/20/solid";
import AppLink from "./AppLink.vue";
defineProps(["topics", "handler"]);
</script>

<template>
  <nav class="relative lg:text-sm lg:leading-6">
    <div class="pointer-events-none sticky top-0 -ml-0.5 hidden lg:block">
      <div class="h-10 bg-white dark:bg-neutral-900"></div>
      <div class="pointer-events-auto relative bg-white dark:bg-neutral-900">
        <button
          type="button"
          class="flex w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-neutral-400 shadow-sm ring-1 ring-neutral-900/10 hover:ring-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:ring-neutral-700">
          <MagnifyingGlassIcon class="mr-3 h-5 w-5" />
          Поиск...
          <span class="ml-auto flex-none pl-3 text-xs font-semibold">⌘K</span>
        </button>
      </div>
      <div class="h-8 bg-gradient-to-b from-white dark:from-neutral-900"></div>
    </div>
    <AppLink
      to="/"
      @click="handler"
      v-bind="$attrs"
      class="group mb-4 flex items-center font-medium lg:text-sm lg:leading-6"
      active-class="active"
      inactive-class="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300">
      <div
        class="mr-4 rounded-md p-2 shadow-sm ring-1 ring-neutral-900/5 group-hover:shadow group-hover:shadow-wb-dark/50 group-hover:ring-neutral-900/10 group-[.active]:shadow-wb-dark/50 dark:bg-neutral-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-wb-light dark:group-hover:shadow-none dark:group-[.active]:bg-wb-light dark:group-[.active]:shadow-none lg:dark:bg-neutral-800">
        <HomeIcon class="h-3 w-3 dark:group-[.active]:fill-white" />
      </div>
      <span
        class="group-[.active]:text-wb-dark group-[.active]:dark:text-wb-light">
        Главная
      </span>
    </AppLink>
    <ul>
      <li v-for="topic in topics" class="mt-8">
        <h2 class="mb-3 font-semibold text-neutral-900 dark:text-neutral-200">
          {{ topic.header }}
        </h2>
        <ul
          class="space-y-2 border-l border-neutral-200 dark:border-neutral-700 lg:border-neutral-100 lg:dark:border-neutral-800">
          <li v-for="link in topic.instruction_set">
            <AppLink
              :to="'/instructions/' + link.slug"
              @click="handler"
              v-bind="$attrs"
              class="-ml-px block border-l border-transparent pl-4"
              active-class="border-wb-dark dark:border-wb-light text-wb-dark dark:text-wb-light"
              inactive-class="text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300">
              {{ link.header }}
            </AppLink>
          </li>
          <li v-if="topic.has_question === true">
            <AppLink
              :to="'/tests/' + topic.id"
              @click="handler"
              v-bind="$attrs"
              class="-ml-px block border-l border-transparent pl-4"
              active-class="border-wb-dark dark:border-wb-light text-wb-dark dark:text-wb-light"
              inactive-class="text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300">
              Тест
            </AppLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
