<template>
  <Layout>
    <v-card>
      <v-card-title>{{ $t('私のトップページです') }}</v-card-title>
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size
        screens.
      </v-card-text>
      <button type="button" @click="innrement">count is: {{ count }}</button>
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
const innrement = () => {
  rootStore?.increment()
}
const count = computed(() => rootStore?.count);
</script>
