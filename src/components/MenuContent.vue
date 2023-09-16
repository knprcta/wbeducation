<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/api.js";
const topics = ref([]);
onMounted(() => {
  api
    .get("topics/")
    .then((response) => {
      topics.value = response.data;
      console.log(topics.value);
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
});
</script>

<template>
  <li v-for="topic in topics" class="mt-12 lg:mt-8">
    <h5
      class="mb-8 lg:mb-3 font-semibold text-neutral-900 dark:text-neutral-200">
      {{ topic.header }}
    </h5>
    <ul
      class="space-y-6 lg:space-y-2 border-l border-neutral-100 dark:border-neutral-700">
      <li v-for="link in topic.instruction_set">
        <a
          class="block border-l pl-4 -ml-px border-transparent hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
          href="#">
          {{ link.header }}
        </a>
      </li>
    </ul>
  </li>
</template>
