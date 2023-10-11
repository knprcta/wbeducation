<script setup>
import { watch } from "vue";
import AppLink from "./AppLink.vue";
import Preloader from "./Preloader.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { useSearch } from "../composables/search";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";

const route = useRoute();
const { isOpen, query, result, isFetching, closeSearch } = useSearch();

watch(route, () => {
  closeSearch();
});
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog
      @close="closeSearch"
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
          class="mx-auto my-0 flex min-h-0 w-full max-w-2xl flex-col rounded-lg bg-white dark:bg-neutral-800">
          <header
            class="relative flex items-center border-b border-neutral-900/10 px-4 dark:border-neutral-300/10">
            <form class="flex flex-1 items-center">
              <label for="input">
                <Preloader v-if="isFetching" class="h-5 w-5" />
                <MagnifyingGlassIcon v-else class="h-5 w-5" />
              </label>
              <input
                v-model="query"
                class="mx-4 h-14 flex-auto appearance-none bg-transparent text-sm placeholder:text-inherit focus:outline-none"
                aria-autocomplete="both"
                id="input"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                enterkeyhint="go"
                spellcheck="false"
                placeholder="Найти инструкцию"
                maxlength="64"
                type="search" />
            </form>
            <button
              @click="closeSearch"
              class="appearance-none rounded px-2 py-1 text-xs tracking-tighter shadow-sm ring-1 ring-neutral-900/5 hover:shadow hover:ring-neutral-900/10 dark:bg-neutral-600 dark:ring-0">
              ESC
            </button>
          </header>
          <div
            v-if="query.length"
            class="flex-auto overflow-auto bg-white dark:bg-neutral-800">
            <div v-if="result.length">
              <p
                class="mx-6 mb-4 pt-6 font-semibold text-neutral-900 dark:text-neutral-200">
                Результаты поиска:
              </p>
              <ul class="pb-6">
                <li
                  v-for="instruction in result"
                  class="border-b border-neutral-900/10 dark:border-neutral-300/10">
                  <AppLink
                    :to="'/instructions/' + instruction.slug"
                    v-bind="$attrs"
                    class="block px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-700/20">
                    <div class="relative flex min-w-0 flex-col items-start">
                      <span
                        class="mb-1 flex-auto truncate rounded-full bg-neutral-100 px-1.5 text-xs font-semibold text-neutral-700 dark:bg-neutral-700/50 dark:text-neutral-400">
                        {{ instruction.topic_name }}
                      </span>
                      <span
                        class="w-full flex-auto truncate text-sm leading-6 text-neutral-700 dark:text-neutral-400">
                        {{ instruction.header }}
                      </span>
                    </div>
                  </AppLink>
                </li>
              </ul>
            </div>
            <div v-else>
              <p class="px-6 py-16 text-center">
                <span v-if="isFetching">Загрузка...</span>
                <span v-else>
                  <span>Нет результатов по запросу "</span>
                  <strong
                    class="font-normal text-neutral-900 dark:text-neutral-200">
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
          <footer
            class="flex justify-end border-t border-neutral-900/10 px-3 py-4 dark:border-neutral-300/10">
            <Logo class="h-5" />
          </footer>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
#input::-webkit-search-cancel-button,
#input::-webkit-search-decoration,
#input::-webkit-search-results-button,
#input::-webkit-search-results-decoration {
  display: none;
}
</style>
