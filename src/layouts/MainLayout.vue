<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import BlockSearch from '@/components/BlockSearch.vue'
import BlockFeedback from '@/components/BlockFeedback.vue'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="route.meta.empty">
      <component :is="Component" />
    </template>
    <template v-else
      ><AppHeader v-if="!route.meta.noHeader" />
      <div class="mx-auto w-full max-w-6xl flex-grow px-4 sm:px-6 md:px-8">
        <AppSidebar v-if="!route.meta.noSidebar" />
        <div :class="{ 'lg:pl-[19.5rem]': !route.meta.noSidebar }">
          <div
            :class="[
              { 'max-w-3xl': !route.meta.noSidebar },
              'mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10'
            ]"
          >
            <component :is="Component" />
          </div>
        </div>
      </div>
      <AppFooter
        v-if="!route.meta.noSidebar"
        :class="{ 'lg:pl-[19.5rem]': !route.meta.noSidebar }"
      />
      <BlockSearch />
      <BlockFeedback />
    </template>
  </router-view>
</template>
