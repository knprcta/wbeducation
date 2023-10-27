<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
defineOptions({
  inheritAttrs: false
})
defineProps({
  isOpen: Boolean,
  onClose: Function
})
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog
      v-bind="$attrs"
      @close="onClose"
      class="fixed inset-0 flex h-screen w-screen flex-col bg-black/30 p-4 backdrop-blur-sm dark:bg-zinc-900/90 sm:p-6 md:p-[10vh] lg:p-[12vh]"
    >
      <TransitionChild
        as="template"
        enter="ease-in-out duration-200"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogPanel
          class="mx-auto my-0 flex min-h-0 w-full max-w-2xl flex-col rounded-lg bg-white dark:bg-zinc-800"
        >
          <slot></slot>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
