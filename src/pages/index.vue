<template>
  <Layout>
    <v-card>
      <v-card-title>{{ $t('私のトップページです') }}</v-card-title>
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size
        screens.
      </v-card-text>
    </v-card>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
