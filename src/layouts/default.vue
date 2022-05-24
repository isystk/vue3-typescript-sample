<template>
  <v-app>
    <Header :store="store" />
    <v-main>
      <Suspense>
        <template #default>
          <slot />
        </template>
        <template #fallback> loading... </template>
      </Suspense>
    </v-main>
    <Footer :store="store" />
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/pages/Header.vue'
import Footer from '@/components/pages/Footer.vue'
import MainService from '@/services/main'
const props = defineProps<{
  store: MainService
}>()
</script>
