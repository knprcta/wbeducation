<script setup>
import { ref, onMounted } from "vue";
import api from "../utils/api.js";

const inst = ref([]);

onMounted(() => {
  api
    .get("instructions/1")
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
  <div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
    <!-- <Menu /> -->
    <div class="lg:pl-[19.5rem]">
      <div
        class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
        <header id="header" class="relative z-20">
          <div>
            <p class="text-wb-default mb-2 text-sm font-semibold leading-6">
              Для начала
            </p>
            <div class="flex items-center">
              <h1
                class="inline-block text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200 sm:text-3xl">
                Начало рабочего дня
              </h1>
            </div>
          </div>
          <p class="mt-2 text-lg text-neutral-700 dark:text-neutral-400">
            С чего стоит начать смену. Проблема с учетной записью.
          </p>
        </header>
        <div
          class="aboba prose prose-neutral dark:prose-dark relative z-20 mt-8"
          v-html="inst.content"></div>
      </div>
    </div>
  </div>
</template>

<!-- <style>
.aboba h4 {
  @apply text-red-500;
}
</style> -->
