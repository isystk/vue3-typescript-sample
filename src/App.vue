<template>
  <router-view />
</template>

<script setup lang="ts">
import { provideStore } from '@/store/index'
provideStore()
</script>
