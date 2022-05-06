<template>
  <v-app>
    <Header />
    <div class="contents">
      <slot />
    </div>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
