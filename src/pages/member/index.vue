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
import Layout from '@/layouts/default.vue'
import { useI18n } from 'vue-i18n'
import {ref} from "vue";
const { t } = useI18n()
const count = ref<number>(0)

</script>
