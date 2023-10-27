<script setup>
import { useTheme } from "@/composables/theme";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/vue/24/outline";

const { option, darkModeActive } = useTheme();

const options = [
  { value: "light", name: "Светлая", icon: SunIcon },
  { value: "dark", name: "Темная", icon: MoonIcon },
  { value: "system", name: "Системная", icon: ComputerDesktopIcon },
];
</script>

<template>
  <Listbox v-model="option">
    <ListboxButton
      class="flex h-7 w-7 items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
      <MoonIcon
        v-if="darkModeActive"
        :class="[{ 'text-purple-500': option !== 'system' }, 'h-6 w-6']" />
      <SunIcon
        v-else
        :class="[{ 'text-purple-600': option !== 'system' }, 'h-6 w-6']" />
    </ListboxButton>
    <ListboxOptions
      class="absolute right-0 top-full z-50 mt-8 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-zinc-700 shadow-lg ring-1 ring-zinc-900/10 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-0">
      <ListboxOption
        v-for="item in options"
        :key="item"
        :value="item.value"
        v-slot="{ active, selected }">
        <li
          :class="[
            {
              'bg-zinc-50 dark:bg-zinc-600/30': active,
              'text-purple-600 dark:text-purple-500': selected,
            },
            'flex cursor-pointer items-center px-2 py-1',
          ]">
          <component :is="item.icon" class="mr-2 h-6 w-6" />
          <span>{{ item.name }}</span>
        </li>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
