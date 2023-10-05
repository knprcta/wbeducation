<script setup>
import Logo from "./Logo.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import ThemeToggle from "./ThemeToggle.vue";
</script>

<template>
  <div
    id="header"
    class="sticky top-0 z-40 w-full flex-none border-b border-neutral-900/10 bg-white/95 backdrop-blur supports-[backdrop-blur]:bg-white/60 dark:border-neutral-300/10 dark:bg-neutral-900/95 lg:z-50">
    <div class="mx-auto max-w-6xl">
      <div class="p-4 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-baseline gap-1">
            <Logo class="h-6 w-[136px]" />
          </div>
          <div class="flex gap-3">
            <button
              class="flex h-7 w-7 items-center justify-center hover:text-neutral-600 dark:hover:text-neutral-300 lg:hidden">
              <MagnifyingGlassIcon class="h-6 w-6" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
