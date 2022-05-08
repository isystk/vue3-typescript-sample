<template>
  <Layout>
    <v-list-item
      v-for="(post, i) in posts"
      :key="i"
      :value="post"
      active-color="primary"
    >
      {{ post }}
      <v-list-item-title v-text="post.title"></v-list-item-title>
    </v-list-item>
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
import { computed, onMounted } from 'vue'
import Layout from '@/layouts/default.vue'
import { injectStore } from '@/store'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const main = injectStore()

onMounted(async () => {
  // 投稿一覧の取得
  await main?.post?.listPosts()
})

const posts = computed(() => main?.post?.posts)
</script>
