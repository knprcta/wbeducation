<script setup>
import { onMounted } from "vue";
import { useCurrentPage } from "../composables/currentPage";

const { update } = useCurrentPage();

onMounted(() => {
  update({
    title: "Главная",
  });
});
</script>

<template>
  <div>
    <h1
      class="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
      Добро пожаловать на&nbsp;WB&nbsp;Education
    </h1>
    <p
      class="mx-auto mt-6 text-lg text-neutral-600 dark:text-neutral-400 lg:text-xl">
      Очень надеемся, что данный портал станет вашим верным спутником в работе.
      Здесь вы сможете найти ответы на все интересующие вас вопросы.
    </p>
    <div class="mt-6 flex justify-center space-x-6 text-sm sm:mt-10"></div>
  </div>
</template>
