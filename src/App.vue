<script setup>
import { onMounted } from "vue";
import { useTopics } from "./composables/topics";
import { useTheme } from "./composables/theme";
import Preloader from "./components/Preloader.vue";
import Alert from "./components/Alert.vue";

const { topics, isFetching, getTopics } = useTopics();
const { option } = useTheme();

onMounted(() => {
  getTopics();
  console.log(option.value);
});
</script>

<template>
  <div v-if="isFetching" class="fixed inset-0 h-full w-full">
    <div
      class="fixed left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 lg:w-1/6">
      <Preloader />
    </div>
  </div>
  <template v-else>
    <router-view v-if="topics.length"></router-view>
  </template>
  <Alert />
</template>
