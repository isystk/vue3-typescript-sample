<template>
  <Layout>
    <div v-if="loading">
      Loading..
    </div>
    <div v-else>
      <Box :breadcrumbs.sync="[{text: post.title}]" >
        <v-card
            class="mx-auto"
        >

        <h1 class="text-base md:text-2xl pb-3">
          {{post.title}}
        </h1>

        <v-img
            :src="post.photo"
            class="white--text align-end mb-3"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
        >
        </v-img>

        <p
            class="pb-3"
        >
          {{post.description}}
        </p>

        </v-card>
      </Box>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import {onBeforeMount, computed, ref} from 'vue'
import Layout from '@/layouts/default.vue'
import Box from '@/components/Box.vue'
import { injectStore } from '@/store'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const main = injectStore()
const route = useRoute()
const id = ref<string>()
const loading = ref<boolean>(true)

onBeforeMount(async () => {
  id.value = route.params.id+'';
  // 投稿詳細の取得
  await main?.post?.getPost(id.value)
  loading.value = false
})

const post = computed(() => {
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
