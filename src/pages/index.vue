<template>
  <Layout :store="main" title="TOP">
    <v-card class="mx-auto">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="({ data }, postId) in posts"
            :key="postId"
            cols="12"
            md="4"
          >
            <v-card>
              <router-link :to="`${Url.POSTS}/${postId}`">
                <v-img
                  :src="data.photo"
                  style="width: 92vw; height: 50vh"
                  cover
                >
                  <v-card-title class="text-white">
                    {{ data.title }}
                  </v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    size="small"
                    color="surface-variant"
                    variant="text"
                    icon="mdi-heart"
                  />
                </v-card-actions>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </Layout>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import Layout from '@/layouts/default.vue'
import { Url } from '@/constants/url'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { injectStore } from '@/store'
const main = injectStore()

onBeforeMount(async () => {
  // 投稿一覧の取得
  await main?.post?.readPosts()
})

const posts = computed(() => main?.post?.posts)
</script>
