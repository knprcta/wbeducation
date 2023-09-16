<script setup>
import { ref, onMounted } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";

const disclosure = ref([]);
const hideOther = (id) => {
  disclosure.value.filter((d, i) => i !== id).forEach((c) => c());
};

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
  <Disclosure
    v-for="(topic, index) in topics"
    v-slot="{ open, close }"
    as="li"
    class="mt-12 lg:mt-8">
    <DisclosureButton
      :ref="(el) => (disclosure[index] = close)"
      @click="hideOther(index)"
      class="flex w-full justify-between">
      <h5
        class="text-left font-semibold text-neutral-900 dark:text-neutral-200">
        {{ topic.header }}
      </h5>
      <ChevronUpIcon
        :class="open ? 'rotate-180 transform' : ''"
        class="h-5 w-5 flex-shrink-0 text-inherit" />
    </DisclosureButton>
    <DisclosurePanel class="px-4 pt-4 text-sm">
      <a v-for="link in topic.instruction_set" class="block" href="#">
        {{ link.header }}
      </a>
    </DisclosurePanel>
  </Disclosure>
</template>
