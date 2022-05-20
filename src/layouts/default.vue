<template>
  <v-app>
    <Header />
    <v-main>
      <Suspense>
        <template #default>
          <slot />
        </template>
        <template #fallback> loading... </template>
      </Suspense>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/pages/Header.vue'
import Footer from '@/components/pages/Footer.vue'
</script>
