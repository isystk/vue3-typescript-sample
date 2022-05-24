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
import { useHead } from '@vueuse/head'
import Header from '@/components/pages/Header.vue'
import Footer from '@/components/pages/Footer.vue'
import MainService from '@/services/main'
import { computed } from 'vue'
const props = defineProps<{
  store: MainService | undefined
  title: string
  description?: string
}>()
import { name, description } from '../../package.json'
useHead({
  title: computed(() => `${props.title || ''} | ${name}`),
  meta: [
    {
      name: `description`,
      content: computed(() => `${props.description || ''}${description}`),
    },
  ],
})
</script>
