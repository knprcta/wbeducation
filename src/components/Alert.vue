<script setup>
import { watch } from "vue";
import { useAlert } from "../composables/alert";
import { useRoute } from "vue-router";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const { isAlertOpen, errCode, errText, reset } = useAlert();
const route = useRoute();

watch(route, () => {
  if (isAlertOpen.value) {
    reset();
  }
});

function reload() {
  window.location.reload();
}
</script>

<template>
  <TransitionRoot :show="isAlertOpen" as="template">
    <Dialog
      class="fixed inset-0 z-[200] flex h-screen w-screen flex-col bg-black/30 p-4 backdrop-blur-sm dark:bg-neutral-900/90 sm:p-6 md:p-[10vh] lg:p-[12vh]">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-200"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <DialogPanel
          class="mx-auto my-0 flex w-full max-w-2xl flex-col rounded-lg bg-white dark:bg-neutral-800">
          <div class="flex flex-col items-center gap-4 p-10">
            <div
              class="flex flex-col items-center rounded-full bg-red-100 p-2 dark:bg-red-900">
              <ExclamationTriangleIcon
                class="h-14 w-14 text-red-500 dark:text-red-300" />
            </div>
            <h2
              class="text-lg font-extrabold text-neutral-900 dark:text-neutral-100">
              Ошибка {{ errCode }}
            </h2>
            <p>{{ errText }}</p>
            <button
              @click="reload"
              class="rounded bg-red-500 px-3 py-2 font-semibold text-white dark:bg-red-900">
              Перезагрузить
            </button>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
