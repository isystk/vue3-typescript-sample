<template>
  <Layout>
    <v-card>
      <v-card-title>{{ $t('2番目のページです') }}</v-card-title>
      <v-card-text>
        {{ count }}
      </v-card-text>
    </v-card>
  </Layout>
</template>

<script setup lang="ts">
import { inject, computed} from "vue";
import Layout from '@/layouts/default.vue'
import {RootStoreKey} from '@/store'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const rootStore = inject(RootStoreKey);
const count = computed(() => rootStore?.count);
</script>
