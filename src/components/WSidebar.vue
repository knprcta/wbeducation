<script setup>
import WNav from "./WNav.vue";
import useMainStore from "../stores/main.js";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const store = useMainStore();
</script>

<template>
  <div
    class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block">
    <WNav />
  </div>
  <TransitionRoot :show="store.isOpen" as="template">
    <Dialog
      as="div"
      @close="store.close"
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
          <WNav />
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
