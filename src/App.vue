<script setup>
import { onBeforeMount } from "vue";
import WHeader from "./components/WHeader.vue";
import MainLayout from "./layouts/MainLayout.vue";
import useMainStore from "./stores/main.js";

const store = useMainStore();

onBeforeMount(() => {
  store.toogleTheme();
});
</script>

<template>
  <WHeader />
  <MainLayout />
</template>
