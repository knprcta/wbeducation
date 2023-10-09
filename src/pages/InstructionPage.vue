<script setup>
import { watchEffect } from "vue";
import { useInstruction } from "../composables/instruction";

const props = defineProps(["slug"]);

const { instruction, getInstruction } = useInstruction();

watchEffect(() => {
  getInstruction(props.slug);
});
</script>

<template>
  <div v-if="instruction.id">
    <div class="relative z-20">
      <div>
        <p
          class="mb-2 text-sm font-semibold leading-6 text-wb-dark dark:text-wb-light">
          {{ instruction.topic_name }}
        </p>
        <div class="flex items-center">
          <h1
            class="inline-block text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200 sm:text-3xl">
            {{ instruction.header }}
          </h1>
        </div>
      </div>
      <p class="mt-2 text-lg text-neutral-700 dark:text-neutral-400">
        {{ instruction.description }}
      </p>
    </div>
    <div
      class="prose prose-neutral relative z-20 mb-24 mt-8 dark:prose-dark"
      v-html="instruction.content"></div>
  </div>
</template>
