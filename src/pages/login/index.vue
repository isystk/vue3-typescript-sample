<template>
  <Layout>
    <Box :breadcrumbs="[{ text: $t('ログイン') }]" :small="true">
      <div class="mt">
        <label for="name-input">氏名</label>
        <input id="name-input" v-model="form.email.$value" type="text" />
        <p v-if="form.email.$anyInvalid">
          {{ form.email.$message }}
        </p>
      </div>
    </Box>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import { useValidation } from 'vue-composable'
import { reactive } from 'vue'
type State = {
  email: string
}

const state = reactive<State>({
  email: '',
})

const required = (x) => !!x // 追加
const form = useValidation({
  email: { $value: state.email, required, $message: '必須項目です' },
})
</script>
