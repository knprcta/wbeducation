<template>
  <div class="fixed inset-0 z-50 overflow-y-auto lg:hidden">
    <div
      class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80"></div>
    <div
      class="relative min-h-screen w-80 max-w-[calc(100%-3rem)] bg-white p-6 dark:bg-neutral-800">
      <button
        type="button"
        class="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
        tabindex="0">
        <svg viewBox="0 0 10 10" class="h-2.5 w-2.5 overflow-visible">
          <path
            d="M0 0L10 10M10 0L0 10"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"></path>
        </svg>
      </button>
      <nav class="relative lg:text-sm lg:leading-6">
        <ul>
          <slot></slot>
        </ul>
      </nav>
    </div>
  </div>
</template>
