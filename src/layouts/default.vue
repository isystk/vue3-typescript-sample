<template>
  <v-app>
    <pages-header :store="store" />
    <v-main>
      <Suspense>
        <template #default>
          <slot />
        </template>
        <template #fallback>
          loading...
        </template>
      </Suspense>
    </v-main>
    <pages-footer :store="store" />
  </v-app>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
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
