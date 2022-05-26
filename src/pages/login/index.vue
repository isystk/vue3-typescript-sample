<template>
  <Layout
    :store="main"
    title="ログイン"
  >
    <pages-box
      :breadcrumbs="[{ text: $t('ログイン') }]"
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
            <ErrorMessage
              class="text-red"
              name="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              パスワード
            </label>
            <Field
              name="password"
              type="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :class="{ 'is-invalid': errors.password }"
            />
            <ErrorMessage
              class="text-red"
              name="password"
            />
          </div>
          <div class="mb-4">
            <v-btn
              depressed
              color="primary"
              type="submit"
            >
              ログイン
            </v-btn>
          </div>
        </div>
      </VeeForm>
      <router-link :to="Url.SIGNUP">
        {{ t('会員登録はこちら') }}
      </router-link>
    </pages-box>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
import { injectStore } from '@/store'
const main = injectStore()
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { Url } from '@/constants/url'
import router from '@/router'

const schema = Yup.object().shape({
  email: Yup.string()
    .required('メールアドレスを入力してください')
    .email('メールアドレスを正しく入力してください'),
  password: Yup.string().required('パスワードを入力してください'),
})

type FormValues = {
  email: string
  password: string
}

const onSubmit = async (values: FormValues) => {
  console.log(values)
  try {
    const { email, password } = values
    const user = await main?.auth.signIn(email, password)
    console.log(user)
    if (user) {
      await router.push(Url.MEMBER)
    }
  } catch (e) {
    alert(e.message)
  }
}
</script>
