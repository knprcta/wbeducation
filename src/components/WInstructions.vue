<script setup>
import { ref, defineProps, watchEffect } from "vue";
import api from "../utils/api.js";

const props = defineProps(["id"]);
const inst = ref([]);

watchEffect(() => {
  api
    .get(`instructions/${props.id}`)
    .then((response) => {
      inst.value = response.data;
      console.log(inst.value);
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
});
</script>

<template>
  <header id="header" class="relative z-20">
    <div>
      <p class="mb-2 text-sm font-semibold leading-6 text-wb-default">
        Для начала
      </p>
      <div class="flex items-center">
        <h1
          class="inline-block text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200 sm:text-3xl">
          {{ inst.header }}
        </h1>
      </div>
    </div>
    <p class="mt-2 text-lg text-neutral-700 dark:text-neutral-400">
      {{ inst.description }}
    </p>
  </header>
  <div
    class="prose prose-neutral relative z-20 mt-8 dark:prose-dark"
    v-html="inst.content"></div>
</template>
