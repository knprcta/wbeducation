<script setup>
import WBHeader from "./components/WBHeader.vue";
import MobileMenuHL from "./components/MobileMenuHL.vue";
import MenuContentHL from "./components/MenuContentHL.vue";
import Content from "./components/Content.vue";
import MenuContent from "./components/MenuContent.vue";
</script>

<template>
  <WBHeader />
  <MobileMenuHL><MenuContent /></MobileMenuHL>
  <Content />
</template>
