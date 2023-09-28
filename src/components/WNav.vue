<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/api.js";

const topics = ref([]);

onMounted(() => {
  api
    .get("menu/")
    .then((response) => {
      topics.value = response.data;
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
});
import useMainStore from "../stores/main.js";
const store = useMainStore();
</script>

<template>
  <nav class="relative lg:text-sm lg:leading-6">
    <div class="pointer-events-none sticky top-0 -ml-0.5">
      <div
        class="pointer-events-auto relative my-10 bg-white dark:bg-neutral-900">
        <button
          type="button"
          class="hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-neutral-400 shadow-sm ring-1 ring-neutral-900/10 hover:ring-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:ring-neutral-700 lg:flex">
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            class="mr-3 flex-none">
            <path
              d="m19 19-3.5-3.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></circle>
          </svg>
          Поиск...
          <span class="ml-auto flex-none pl-3 text-xs font-semibold">⌘K</span>
        </button>
      </div>
    </div>
    <ul>
      <li v-for="topic in topics" class="mt-8">
        <h2 class="mb-3 font-semibold text-neutral-900 dark:text-neutral-200">
          {{ topic.header }}
        </h2>
        <ul
          class="space-y-2 border-l border-neutral-200 dark:border-neutral-700 lg:border-neutral-100 lg:dark:border-neutral-800">
          <li v-for="link in topic.instruction_set">
            <router-link
              custom
              v-slot="{ isActive, href, navigate }"
              :to="'/instructions/' + link.slug">
              <a
                :class="[
                  isActive
                    ? 'border-wb-default text-wb-default'
                    : 'text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300',
                  '-ml-px block border-l border-transparent pl-4',
                ]"
                :href="href"
                @click="navigate">
                {{ link.header }}
              </a>
            </router-link>
          </li>
          <li v-if="topic.has_question === true">
            <router-link
              custom
              v-slot="{ isActive, href, navigate }"
              :to="'/tests/' + topic.id">
              <a
                :class="[
                  isActive
                    ? 'border-wb-default text-wb-default'
                    : 'text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-300',
                  '-ml-px block border-l border-transparent pl-4',
                ]"
                :href="href"
                @click="navigate">
                Тест
              </a>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
