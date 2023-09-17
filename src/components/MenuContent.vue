<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/api.js";

const topics = ref([]);

onMounted(() => {
  api
    .get("menu/")
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
  <li
    v-for="topic in topics"
    class="border-b border-neutral-900/10 pb-6 pt-3 first:pt-0 text-sm leading-relaxed dark:border-neutral-300/10">
    <h2 class="py-1 font-bold text-neutral-900 dark:text-neutral-200">
      {{ topic.header }}
    </h2>
    <a
      v-for="link in topic.instruction_set"
      class="block py-1 font-medium"
      href="#">
      {{ link.header }}
    </a>
    <a
      v-if="topic.has_question === true"
      class="block py-1 font-medium"
      href="#">
      ТЕСТ
    </a>
  </li>
  <li
    v-for="topic in topics"
    class="border-b border-neutral-900/10 pb-6 pt-3 first:pt-0 text-sm leading-relaxed dark:border-neutral-300/10">
    <h2 class="py-1 font-bold text-neutral-900 dark:text-neutral-200">
      {{ topic.header }}
    </h2>
    <a
      v-for="link in topic.instruction_set"
      class="block py-1 font-medium"
      href="#">
      {{ link.header }}
    </a>
    <a
      v-if="topic.has_question === true"
      class="block py-1 font-medium"
      href="#">
      ТЕСТ
    </a>
  </li>
  <li
    v-for="topic in topics"
    class="border-b border-neutral-900/10 pb-6 pt-3 first:pt-0 text-sm leading-relaxed dark:border-neutral-300/10">
    <h2 class="py-1 font-bold text-neutral-900 dark:text-neutral-200">
      {{ topic.header }}
    </h2>
    <a
      v-for="link in topic.instruction_set"
      class="block py-1 font-medium"
      href="#">
      {{ link.header }}
    </a>
    <a
      v-if="topic.has_question === true"
      class="block py-1 font-medium"
      href="#">
      ТЕСТ
    </a>
  </li>
  <li
    v-for="topic in topics"
    class="border-b border-neutral-900/10 pb-6 pt-3 first:pt-0 text-sm leading-relaxed dark:border-neutral-300/10">
    <h2 class="py-1 font-bold text-neutral-900 dark:text-neutral-200">
      {{ topic.header }}
    </h2>
    <a
      v-for="link in topic.instruction_set"
      class="block py-1 font-medium"
      href="#">
      {{ link.header }}
    </a>
    <a
      v-if="topic.has_question === true"
      class="block py-1 font-medium"
      href="#">
      ТЕСТ
    </a>
  </li>
</template>
