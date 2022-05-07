<template>
  <Layout>
    <v-card>
      <v-card-title>{{ $t('404 Not Found') }}</v-card-title>
      <v-card-text>
        {{ $t('お探しのページは見つかりませんでした。') }}
      </v-card-text>
    </v-card>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
