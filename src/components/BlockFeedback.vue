<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useFeedback } from '../composables/feedback'
import BaseModal from '@/components/BaseModal.vue'

const { isOpen, name, id, message, closeFeedback, submitFeedback } = useFeedback()
</script>

<template>
  <BaseModal :isOpen="isOpen" :onClose="closeFeedback" class="z-50">
    <div class="relative w-full p-6">
      <button
        @click="closeFeedback"
        class="absolute right-6 top-6 flex h-8 w-8 items-center justify-center hover:text-zinc-600 dark:hover:text-zinc-300"
      >
        <XMarkIcon class="h-6 w-6" />
      </button>
      <h2
        class="mb-6 mt-10 text-center text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        Обращение в поддержку
      </h2>
      <form @submit.prevent="submitFeedback" class="space-y-6">
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-200"
          >
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
              class="focus:ring-zinc-400 dark:focus:ring-zinc-600 block w-full rounded-md border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-1 focus:ring-inset dark:bg-zinc-700/30 dark:text-zinc-200 dark:ring-transparent sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="id"
            class="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-200"
          >
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
              class="focus:ring-zinc-400 dark:focus:ring-zinc-600 block w-full rounded-md border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-1 focus:ring-inset dark:bg-zinc-700/30 dark:text-zinc-200 dark:ring-transparent sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-200"
          >
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
              class="focus:ring-zinc-400 dark:focus:ring-zinc-600 block w-full rounded-md border-0 px-3 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-1 focus:ring-inset dark:bg-zinc-700/30 dark:text-zinc-200 dark:ring-transparent sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="pt-6">
          <button
            type="submit"
            class="bg-purple-600 focus-visible:outline-purple-600 dark:bg-purple-500/70 focus-visible:dark:outline-purple-500/70 mb-6 flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  </BaseModal>
</template>
