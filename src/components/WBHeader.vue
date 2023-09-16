<template>
  <div
    class="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-neutral-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-neutral-900/10">
    <div class="max-w-8xl mx-auto max-w-">
      <div
        class="mx-4 border-b border-neutral-900/10 py-4 dark:border-neutral-300/10 lg:mx-0 lg:border-0 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-baseline gap-1">
            <img
              src="../assets/logo.svg"
              alt="logo"
              class="dark:brightness-200 dark:grayscale" />
            <span
              class="text-lg font-medium leading-none text-[#8638cf] dark:text-inherit">
              education
            </span>
          </div>
          <div class="flex gap-3">
            <button
              class="flex h-8 w-8 items-center justify-center hover:text-neutral-600 dark:hover:text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button
              class="flex h-8 w-8 items-center justify-center hover:text-neutral-600 dark:hover:text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center border-b border-neutral-900/10 p-4 dark:border-neutral-50/[0.06] lg:hidden">
      <button
        type="button"
        class="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
        <li class="flex items-center">
          Для начала
          <svg
            width="3"
            height="6"
            aria-hidden="true"
            class="mx-3 overflow-visible text-neutral-400">
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"></path>
          </svg>
        </li>
        <li
          class="truncate font-semibold text-neutral-900 dark:text-neutral-200">
          Основные понятия
        </li>
      </ol>
    </div>
  </div>
</template>
