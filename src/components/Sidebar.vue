<script setup>
import { ref } from "vue";
import NavItems from "./NavItems.vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const isMenuOpen = ref(false);
function openMenu() {
  isMenuOpen.value = true;
}

function closeMenu() {
  isMenuOpen.value = false;
}

import { useTopics } from "../composables/topics";
import { useScreenWidth } from "../composables/screenWidth";
import { useCurrentPage } from "../composables/currentPage";

const { topics } = useTopics();
const { width } = useScreenWidth();
const { topic, title } = useCurrentPage();
</script>

<template>
  <div v-if="width >= 1024">
    <div
      class="fixed inset-0 left-[max(0px,calc(50%-36rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block">
      <NavItems :topics="topics" />
    </div>
  </div>

  <div v-else>
    <Teleport to="#header">
      <div
        class="mx-4 flex items-center border-t border-neutral-900/10 py-4 dark:border-neutral-300/10 lg:hidden">
        <button
          @click="openMenu"
          type="button"
          class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300">
          <Bars3Icon class="h-6 w-6" />
        </button>
        <ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
          <li v-if="topic" class="flex items-center">
            <span>{{ topic }}</span>
            <ChevronRightIcon class="mx-1 h-4 w-4 overflow-visible" />
          </li>
          <li
            class="truncate font-semibold text-neutral-900 dark:text-neutral-200">
            {{ title }}
          </li>
        </ol>
      </div>
    </Teleport>
    <TransitionRoot :show="isMenuOpen" as="template">
      <Dialog
        as="div"
        @close="closeMenu"
        class="fixed inset-0 z-50 overflow-y-auto lg:hidden">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div
            class="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity dark:bg-neutral-900/80"></div>
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transform transition ease-in-out duration-500"
          enter-from="-translate-x-full"
          enter-to="-translate-x-0"
          leave="transform transition ease-in-out duration-500"
          leave-from="-translate-x-0"
          leave-to="-translate-x-full">
          <DialogPanel
            class="relative z-50 min-h-screen w-80 max-w-[calc(100%-3rem)] bg-white p-8 backdrop-blur-sm dark:bg-neutral-800">
            <button
              @click="closeMenu"
              class="absolute right-6 top-6 flex h-8 w-8 items-center justify-center">
              <XMarkIcon class="h-6 w-6" />
            </button>
            <NavItems :topics="topics" :handler="closeMenu" />
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
