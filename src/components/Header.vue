<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="toggleMenu" />

    <Logo />

    <v-spacer />

    <v-btn variant="text" icon="mdi-dots-vertical" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list :items="items" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';

const drawer = ref(false)
const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
]

const toggleMenu = () => {
  drawer.value = !drawer.value
}
</script>
