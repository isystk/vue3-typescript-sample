<template>
  <Layout>
    <Box :breadcrumbs="[{ text: 'ログイン' }]" :small="true">
      <v-card>
        <v-card-title>{{ $t('2番目のページです') }}</v-card-title>
        <v-card-text>
          {{ posts }}
        </v-card-text>
      </v-card>
    </Box>
  </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Layout from '@/layouts/default.vue'
import { injectStore } from '@/store'
import { useI18n } from 'vue-i18n'
import Box from '@/components/Box.vue'
const { t } = useI18n()
const main = injectStore()
const posts = computed(() => main?.post?.posts)
</script>
