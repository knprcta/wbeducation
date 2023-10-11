<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useFeedback } from "../composables/feedback";

const { name, id, message, submitFeedback } = useFeedback();

const isOpen = ref(false);
function open() {
  isOpen.value = true;
}
function close() {
  isOpen.value = false;
}

function submit() {
  submitFeedback();
  close();
}
</script>

<template>
  <div
    class="border-neutral-900/ border-r pr-6 text-sm font-semibold leading-6 text-neutral-700 dark:border-neutral-300/10 dark:text-neutral-200">
    <button
      @click="open"
      class="flex items-center hover:text-wb-dark dark:hover:text-wb-light">
      <span class="hidden sm:inline">Поддержка</span>
      <QuestionMarkCircleIcon
        class="h-6 w-6 text-neutral-800 dark:text-neutral-400 sm:hidden" />
    </button>
  </div>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog
      @close="close"
      class="fixed inset-0 z-[100] flex h-screen w-screen flex-col bg-black/30 p-4 backdrop-blur-sm dark:bg-neutral-900/90 sm:p-6 md:p-[10vh] lg:p-[12vh]">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-200"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <DialogPanel
          class="mx-auto my-0 flex w-full max-w-xl flex-col rounded-lg bg-white dark:bg-neutral-800">
          <div class="relative w-full p-6">
            <button
              @click="close"
              class="absolute right-6 top-6 flex h-8 w-8 items-center justify-center hover:text-neutral-600 dark:hover:text-neutral-300">
              <XMarkIcon class="h-6 w-6" />
            </button>
            <h2
              class="mb-6 mt-10 text-center text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Обращение в поддержку
            </h2>
            <form @submit.prevent="submit" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                  Имя
                </label>
                <div class="mt-2">
                  <input
                    v-model="name"
                    id="name"
                    name="name"
                    type="text"
                    minlength="2"
                    maxlength="20"
                    required
                    class="block w-full rounded-md border-0 px-3 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-1 focus:ring-inset focus:ring-wb-dark dark:bg-neutral-700/30 dark:text-neutral-200 dark:ring-neutral-600 dark:focus:ring-wb-light sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label
                  for="id"
                  class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                  ID сотрудника
                </label>
                <div class="mt-2">
                  <input
                    v-model="id"
                    id="id"
                    name="id"
                    type="number"
                    min="0"
                    max="10000000"
                    required
                    class="block w-full rounded-md border-0 px-3 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-1 focus:ring-inset focus:ring-wb-dark dark:bg-neutral-700/30 dark:text-neutral-200 dark:ring-neutral-600 dark:focus:ring-wb-light sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                  Сообщение
                </label>
                <div class="mt-2">
                  <textarea
                    v-model="message"
                    rows="4"
                    id="message"
                    name="message"
                    maxlength="50"
                    required
                    class="block w-full rounded-md border-0 px-3 py-2 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-1 focus:ring-inset focus:ring-wb-dark dark:bg-neutral-700/30 dark:text-neutral-200 dark:ring-neutral-600 dark:focus:ring-wb-light sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="pt-6">
                <button
                  type="submit"
                  class="mb-6 flex w-full justify-center rounded-md bg-wb-dark px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wb-dark dark:bg-wb-light/70 focus-visible:dark:outline-wb-light/70">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
