<script setup>
import { useAlert } from "../composables/alert";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const { isAlertOpen, errCode, errText } = useAlert();

function reload() {
  window.location.reload();
}
</script>

<template>
  <TransitionRoot :show="isAlertOpen" as="template">
    <Dialog as="div" class="relative z-[60]">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-200"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div
          class="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity dark:bg-neutral-900/90"></div>
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-200"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="transform transition ease-in-out duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 backdrop-blur-sm dark:bg-neutral-800">
              <div class="flex flex-col items-center gap-3">
                <div
                  class="flex flex-col items-center rounded-full bg-red-100 p-2 dark:bg-red-900">
                  <ExclamationTriangleIcon class="h-14 w-14 text-red-300" />
                </div>
                <h2
                  class="text-lg font-extrabold text-neutral-900 dark:text-neutral-100">
                  Ошибка {{ errCode }}
                </h2>
                <p>{{ errText }}</p>
                <button
                  @click="reload"
                  class="rounded bg-red-500 px-3 py-2 text-white dark:bg-red-900">
                  Перезагрузить
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
