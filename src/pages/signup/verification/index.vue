<template>
  <Layout :store="main" title="メールに記載の認証コードを入力して下さい">
    <pages-box
      :breadcrumbs="[{ text: $t('メールに記載の認証コードを入力して下さい') }]"
      :small="true"
    >
      <VeeForm
        v-slot="{ errors }"
        :validation-schema="schema"
        @submit="onSubmit"
      >
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
            <ErrorMessage class="text-red" name="email" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              認証コード
            </label>
            <Field
              name="verificationCode"
              type="verificationCode"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :class="{ 'is-invalid': errors.verificationCode }"
            />
            <ErrorMessage class="text-red" name="verificationCode" />
          </div>
          <div class="mb-4">
            <v-btn depressed color="primary" type="submit"> 送信する </v-btn>
          </div>
        </div>
      </VeeForm>
    </pages-box>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
import { injectStore } from '@/store'
import { Url } from '@/constants/url'
import router from '@/router'
const main = injectStore()

const schema = Yup.object().shape({
  email: Yup.string()
    .required('メールアドレスを入力してください')
    .email('メールアドレスを正しく入力してください'),
  verificationCode: Yup.string().required('認証コードを入力してください'),
})

type FormValues = {
  email: string
  verificationCode: string
}

const onSubmit = async (values: FormValues) => {
  try {
    console.log(values)
    const { email, verificationCode } = values
    const result = await main?.auth.confirmRegistration(email, verificationCode)
    console.log(result)
    await router.push(Url.MEMBER)
  } catch (e) {
    alert(e.message)
  }
}
</script>
