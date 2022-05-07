<template>
  <v-toolbar-title>
    <router-link :to="Url.TOP">
      {{ $t('vue3-typescript-sample') }}
    </router-link>
  </v-toolbar-title>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { Url } from '@/constants/url'
</script>
