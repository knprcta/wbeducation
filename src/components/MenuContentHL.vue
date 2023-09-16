<script setup>
import { ref, onMounted } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
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
    v-for="topic in topics"
    as="li"
    v-slot="{ open }"
    class="mt-12 lg:mt-8">
    <DisclosureButton class="flex w-full justify-between">
      <h5
        class="font-semibold text-left text-neutral-900 dark:text-neutral-200">
        {{ topic.header }}
      </h5>
      <ChevronUpIcon
        :class="open ? 'rotate-180 transform' : ''"
        class="h-5 w-5 text-inherit flex-shrink-0" />
    </DisclosureButton>
    <DisclosurePanel class="px-4 pt-4 text-sm">
      <a v-for="link in topic.instruction_set" class="block" href="#">
        {{ link.header }}
      </a>
    </DisclosurePanel>
  </Disclosure>
</template>
