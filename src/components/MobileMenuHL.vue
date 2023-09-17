<script setup>
import { ref } from "vue";
import useMainStore from "../stores/main.js";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const store = useMainStore;
const focus = ref(null);
</script>

<template>
  <TransitionRoot :show="store().isOpen" as="template">
    <Dialog
      as="div"
      :initial-focus="focus"
      @close="store().close"
      class="fixed inset-0 z-50 overflow-y-auto lg:hidden">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div
          class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80"></div>
      </TransitionChild>

      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0 -translate-x-full"
        enter-to="opacity-100 -translate-x-0"
        leave="duration-200 ease-in"
        leave-from="opacity-100 -translate-x-0"
        leave-to="opacity-0 -translate-x-full">
        <DialogPanel
          class="relative min-h-screen w-80 max-w-[calc(100%-3rem)] bg-white p-8 dark:bg-neutral-800">
          <nav ref="focus" class="relative lg:text-sm lg:leading-6">
            <ul>
              <slot></slot>
            </ul>
          </nav>
          <!-- <button
            @click="store().close"
            type="button"
            class="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
            tabindex="0">
            <svg viewBox="0 0 10 10" class="h-2.5 w-2.5 overflow-visible">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"></path>
            </svg>
          </button> -->
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
