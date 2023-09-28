<script setup>
import { ref, onBeforeMount, watch } from "vue";
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

const darkModeActive = ref(false);
const option = ref(null);

function update() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    darkModeActive.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    darkModeActive.value = false;
  }
}

const options = [
  { value: "light", name: "Светлая", icon: SunIcon },
  { value: "dark", name: "Темная", icon: MoonIcon },
  { value: "system", name: "Системная", icon: ComputerDesktopIcon },
];

onBeforeMount(() => {
  const theme = localStorage.theme;
  if (theme === "light" || theme === "dark") {
    option.value = theme;
  } else {
    option.value = "system";
  }
  update();
});

watch(option, () => {
  const mql = window.matchMedia("(prefers-color-scheme: light)");
  const mqd = window.matchMedia("(prefers-color-scheme: dark)");
  if (option.value === "system") {
    localStorage.removeItem("theme");
    mql.addEventListener("change", (e) => e.matches && update());
    mqd.addEventListener("change", (e) => e.matches && update());
  } else {
    localStorage.theme = option.value;
    mql.removeEventListener("change", (e) => e.matches && update());
    mqd.removeEventListener("change", (e) => e.matches && update());
  }
  update();
});
</script>

<template>
  <Listbox v-model="option">
    <ListboxButton
      class="flex h-7 w-7 items-center justify-center hover:text-neutral-600 dark:hover:text-neutral-300">
      <MoonIcon
        v-if="darkModeActive"
        :class="[option === 'dark' ? 'text-wb-default' : '', 'h-6 w-6']" />
      <SunIcon
        v-else
        :class="[option === 'light' ? 'text-wb-default' : '', 'h-6 w-6']" />
    </ListboxButton>
    <ListboxOptions
      class="absolute right-0 top-full z-50 mt-8 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-neutral-700 shadow-lg ring-1 ring-neutral-900/10 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-0">
      <ListboxOption
        v-for="item in options"
        :value="item.value"
        v-slot="{ active, selected }">
        <li
          :class="[
            {
              'bg-neutral-50 dark:bg-neutral-600/30': active,
              'text-wb-default': selected,
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
