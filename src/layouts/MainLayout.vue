<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="overflow-hidden">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
      <Sidebar />
      <div class="lg:pl-[19.5rem]">
        <div
          class="mx-auto max-w-3xl pt-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
