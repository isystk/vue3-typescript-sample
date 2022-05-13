<template>
  <Layout>
    <Box :breadcrumbs="[{ text: $t('ログイン') }]" :small="true">
      <VeeForm v-slot="{ errors }" :validation-schema="schema" as="div">
        <form @submit="onSubmit" method="post" action="/api/users/">
          <div class="mt">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                メールアドレス
              </label>
              <Field
                name="email"
                type="text"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :class="{ 'is-invalid': errors.email }"
              />
            </div>
            <ErrorMessage class="text-red" name="email" />
          </div>
          <div class="mb-4">
            <button type="submit">Submit</button>
          </div>
        </form>
      </VeeForm>
    </Box>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import Box from '@/components/Box.vue'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  email: Yup.string()
    .required('メールアドレスを入力してください')
    .email('メールアドレスを正しく入力してください'),
  password: Yup.string().required('パスワードを入力してください'),
})

function onSubmit(values) {
  console.log(values)
}
</script>
