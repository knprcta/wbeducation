<template>
  <div class="fixed z-50 inset-0 overflow-y-auto lg:hidden">
    <div
      class="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80"></div>
    <div
      class="relative bg-white w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-neutral-800 min-h-screen">
      <button
        type="button"
        class="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
        tabindex="0">
        <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible">
          <path
            d="M0 0L10 10M10 0L0 10"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"></path>
        </svg>
      </button>
      <nav class="lg:text-sm lg:leading-6 relative">
        <ul>
          <slot></slot>
        </ul>
      </nav>
    </div>
  </div>
</template>
