<template>
  <Layout>
    <Box :breadcrumbs="[{ text: $t('マイページ') }]">
      <div class="mx-auto right-5 absolute">
        <v-btn color="info" type="button" @click="registPost">新規登録</v-btn>
      </div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">タイトル</th>
            <th class="text-left">本文</th>
            <th class="text-left">画像</th>
            <th class="text-left">
              <br />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({ data }, postId) in lists.displayLists" :key="postId">
            <td>{{ data.title }}</td>
            <td>{{ data.description }}</td>
            <td>
              <v-img
                :src="data.photo"
                class="white--text align-end object-cover"
                style="width: 6vw; height: 8vh"
                :transition="false"
                cover
              />
            </td>
            <td>
              <ul>
                <li class="ma-1">
                  <v-btn depressed color="info" type="button" @click="editPost"
                    >変更</v-btn
                  >
                </li>
                <li class="ma-1">
                  <v-btn
                    depressed
                    color="error"
                    type="button"
                    @click="deletePost"
                    >削除</v-btn
                  >
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="length"
          @update:modelValue="pageChange"
        ></v-pagination>
      </div>
    </Box>
    <PostRegistModal :is-open="isOpen" :handle-close="handleClose" />
  </Layout>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import Layout from '@/layouts/default.vue'
import Box from '@/components/pages/Box.vue'
import PostRegistModal from '@/components/widgets/PostRegistModal.vue'
import { injectStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { Post } from '@/services/post'
const { t } = useI18n()
const main = injectStore()
import * as _ from 'lodash'

const lists = reactive<{ displayLists: Post[] }>({ displayLists: [] })
const page = ref(1)
const length = ref(0)
const pageSize = 3
const isOpen = ref(false)

onBeforeMount(async () => {
  await main?.post?.readPosts()
  length.value = Math.ceil(_.size(main?.post.posts) / pageSize)
  const entries = Object.entries(main?.post.posts).map(([key, value]) => value)
  lists.displayLists = _.slice(entries, 0, pageSize)
})

const pageChange = (pageNumber) => {
  const entries = Object.entries(main?.post.posts).map(([key, value]) => value)
  lists.displayLists = _.slice(
    entries,
    pageSize * (pageNumber - 1),
    pageSize * pageNumber
  )
}

const deletePost = () => {
  if (!confirm('削除します。よろしいですか？')) {
    return
  }
}

const editPost = () => {
  console.log('edit')
}

const registPost = () => {
  console.log('regist')
  isOpen.value = true
}

const handleClose = () => {
  isOpen.value = false
}
</script>
