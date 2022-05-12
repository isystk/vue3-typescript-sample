<template>
  <Layout>
    <Box
      :breadcrumbs="[{ text: $t('ログイン') }]"
      :small="true"
    >
      <Form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div class="mt">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Username
          </label>
          <Field name="title" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :class="{ 'is-invalid': errors.title }" />
        </div>
        <p v-if="errors.title">
          {{ errors.title }}
        </p>
      </div>
      </Form>
    </Box>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/default.vue'
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    dob: Yup.string()
        .required('Date of Birth is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: Yup.string()
        .required('Accept Ts & Cs is required')
});

function onSubmit(values) {
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
}
</script>
