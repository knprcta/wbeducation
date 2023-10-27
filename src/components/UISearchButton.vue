<script setup>
import { useSearch } from "@/composables/search";

const { openSearch } = useSearch();
</script>

<template>
  <button @click="openSearch()">
    <slot></slot>
  </button>
</template>
