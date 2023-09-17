<template>
  <div
    class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 pt-8 lg:block">
    <nav class="relative lg:text-sm lg:leading-6">
      <ul>
        <slot></slot>
      </ul>
    </nav>
  </div>
</template>
