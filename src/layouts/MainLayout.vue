<script setup>
import WSidebar from "../components/WSidebar.vue";
</script>

<template>
  <div class="overflow-hidden">
    <div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <WSidebar />
      <div class="lg:pl-[19.5rem]">
        <div
          class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
