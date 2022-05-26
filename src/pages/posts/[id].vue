<template>
  <Layout
    :store="main"
    :title="post.title"
  >
    <div v-if="loading">
      Loading..
    </div>
    <div v-else>
      <pages-box :breadcrumbs="[{ text: post.title }]">
        <v-card class="mx-auto">
          <v-img :src="post.photo" />

          <p class="pb-3">
            {{ post.description }}
          </p>
        </v-card>
      </pages-box>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { onBeforeMount, computed, ref } from 'vue'
import Layout from '@/layouts/default.vue'
import { injectStore } from '@/store'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Post } from '@/services/post'
const { t } = useI18n()
const main = injectStore()
const route = useRoute()
const id = ref<string>()
const loading = ref<boolean>(true)

onBeforeMount(async () => {
  id.value = route.params.id + ''
  // 投稿詳細の取得
  await main?.post?.readPost(id.value + '')
  loading.value = false
})

const post = computed<Post>(() => {
  if (!id.value) {
    return {
      userId: '',
      title: '',
      description: '',
      photo: '',
    }
  }
  return main?.post?.posts[id.value].data
})
</script>
