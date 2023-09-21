<script setup>
import { computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const darkModeActive = computed(() => {
  return document.documentElement.classList.contains("dark") ? true : false;
});
</script>

<template>
  <Listbox>
    <ListboxButton
      class="flex h-7 w-7 items-center justify-center hover:text-neutral-600 dark:hover:text-neutral-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          v-if="darkModeActive"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />

        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </ListboxButton>
    <ListboxOptions
      class="absolute right-0 top-full z-50 mt-8 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-neutral-700 shadow-lg ring-1 ring-neutral-900/10 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-0">
      <ListboxOption v-slot="{ active, selected }">
        <li
          :class="[
            {
              'bg-neutral-50 dark:bg-neutral-600/30': active,
              'text-wb-default': selected,
            },
            'flex cursor-pointer items-center px-2 py-1',
          ]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mr-2 h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <span>Светлая</span>
        </li>
      </ListboxOption>
      <ListboxOption v-slot="{ active, selected }">
        <li
          :class="[
            {
              'bg-neutral-50 dark:bg-neutral-600/30': active,
              'text-wb-default': selected,
            },
            'flex cursor-pointer items-center px-2 py-1',
          ]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mr-2 h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <span>Темная</span>
        </li>
      </ListboxOption>
      <ListboxOption v-slot="{ active, selected }">
        <li
          :class="[
            {
              'bg-neutral-50 dark:bg-neutral-600/30': active,
              'text-wb-default': selected,
            },
            'flex cursor-pointer items-center px-2 py-1',
          ]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mr-2 h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <span>Системная</span>
        </li>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
