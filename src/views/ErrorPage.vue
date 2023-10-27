<script setup>
defineProps({
  code: {
    default: 404
  },
  text: {
    default: 'Страница не найдена'
  }
})
</script>

<template>
  <div class="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
    <h1
      class="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-200 sm:mr-6 sm:border-r sm:border-zinc-900/10 sm:pr-6 sm:text-3xl sm:dark:border-zinc-300/10"
    >
      {{ code }}
    </h1>
    <h2 class="mt-2 text-lg text-zinc-700 dark:text-zinc-400 sm:mt-0">
      {{ text }}
    </h2>
  </div>
</template>
<style>
body {
  display: flex;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
