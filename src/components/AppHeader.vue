<script setup>
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import UISearchButton from '@/components/UISearchButton.vue'
import UIThemeSwitcher from '@/components/UIThemeSwitcher.vue'
import LogoFullIcon from '@/components/icons/LogoFullIcon.vue'
import { useFeedback } from '@/composables/feedback'

const { openFeedback } = useFeedback()
</script>

<template>
  <div
    id="header"
    class="sticky top-0 z-40 w-full flex-none border-b border-zinc-900/10 bg-white/95 backdrop-blur supports-[backdrop-blur]:bg-white/60 dark:border-zinc-300/10 dark:bg-zinc-900/95 lg:z-50"
  >
    <div class="mx-auto max-w-6xl">
      <div class="p-4 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-baseline gap-1">
            <LogoFullIcon class="h-6 text-purple-600 dark:text-purple-500" />
          </div>
          <div class="flex items-center gap-6">
            <div
              class="border-r border-zinc-900/10 pr-6 text-sm font-semibold leading-6 text-zinc-700 dark:border-zinc-300/10 dark:text-zinc-200"
            >
              <button
                @click="openFeedback"
                class="flex items-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                <QuestionMarkCircleIcon class="h-6 w-6" />
              </button>
            </div>
            <UISearchButton
              class="flex h-7 w-7 items-center justify-center text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 lg:hidden"
            >
              <MagnifyingGlassIcon class="h-6 w-6" />
            </UISearchButton>
            <UIThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
