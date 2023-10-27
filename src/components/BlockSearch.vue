<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import BaseLink from '@/components/BaseLink.vue'
import BaseModal from '@/components/BaseModal.vue'
import BaseSpinner from '@/components/BaseSpinner.vue'
import LogoFullIcon from '@/components/icons/LogoFullIcon.vue'
import { useSearch } from '@/composables/search'

const route = useRoute()
const { isOpen, query, result, isFetching, closeSearch } = useSearch()

watch(route, () => {
  closeSearch()
})
</script>

<template>
  <BaseModal :isOpen="isOpen" :onClose="closeSearch" class="z-50"
    ><header
      class="relative flex items-center border-b border-zinc-900/10 px-4 dark:border-zinc-300/10"
    >
      <form class="flex flex-1 items-center">
        <label for="input">
          <BaseSpinner v-if="isFetching" class="h-5 w-5" />
          <MagnifyingGlassIcon v-else class="h-5 w-5" />
        </label>
        <input
          v-model="query"
          class="mx-4 h-14 flex-auto appearance-none bg-transparent text-sm placeholder:text-zinc-400 focus:outline-none dark:placeholder:text-zinc-600"
          aria-autocomplete="both"
          id="input"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          enterkeyhint="go"
          spellcheck="false"
          placeholder="Найти инструкцию"
          maxlength="64"
          type="search"
        />
      </form>
      <button
        @click="closeSearch"
        class="appearance-none rounded px-2 py-1 text-xs tracking-tighter shadow-sm ring-1 ring-zinc-900/5 hover:shadow hover:ring-zinc-900/10 dark:bg-zinc-600 dark:ring-0"
      >
        ESC
      </button>
    </header>
    <div v-if="query.length" class="flex-auto overflow-auto bg-white dark:bg-zinc-800">
      <div v-if="result.length">
        <p class="mx-6 mb-4 pt-6 font-semibold text-zinc-900 dark:text-zinc-200">
          Результаты поиска:
        </p>
        <ul class="pb-6">
          <li
            v-for="instruction in result"
            :key="instruction"
            class="border-b border-zinc-900/10 dark:border-zinc-300/10"
          >
            <BaseLink
              :to="'/instructions/' + instruction.slug"
              class="block px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-700/20"
            >
              <div class="relative flex min-w-0 flex-col items-start">
                <span
                  class="mb-1 flex-auto truncate rounded-full bg-zinc-100 px-1.5 text-xs font-semibold text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-400"
                >
                  {{ instruction.topic_name }}
                </span>
                <span
                  class="w-full flex-auto truncate text-sm leading-6 text-zinc-700 dark:text-zinc-400"
                >
                  {{ instruction.header }}
                </span>
              </div>
            </BaseLink>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="px-6 py-16 text-center">
          <span v-if="isFetching">Загрузка...</span>
          <span v-else>
            <span>Нет результатов по запросу "</span>
            <strong class="font-normal text-zinc-900 dark:text-zinc-200">
              {{ query }}
            </strong>
            <span>"</span>
          </span>
        </p>
      </div>
    </div>
    <div v-else>
      <p class="px-6 py-16 text-center">Введите поисковый запрос</p>
    </div>
    <footer class="flex justify-end border-t border-zinc-900/10 px-3 py-4 dark:border-zinc-300/10">
      <LogoFullIcon class="h-5 text-purple-600 dark:text-purple-500" /></footer
  ></BaseModal>
</template>

<style scoped>
#input::-webkit-search-cancel-button,
#input::-webkit-search-decoration,
#input::-webkit-search-results-button,
#input::-webkit-search-results-decoration {
  display: none;
}
</style>
