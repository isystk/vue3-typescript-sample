<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="toggleMenu" />

    <Logo />

    <v-spacer />

    <v-list density="compact" theme="dark" nav>
      <v-list-item
        two-line
        prepend-avatar="/images/user_dummy.png"
        title="Jane Smith"
        subtitle="Logged in"
      >
        <template #append>
          <v-list-item-avatar end>
            <v-btn size="small" variant="text" icon="mdi-menu-down" />
          </v-list-item-avatar>
          <v-list-item> ログアウト </v-list-item>
        </template>
      </v-list-item>
    </v-list>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list density="compact">
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          @click="selectItem(item)"
        >
          <v-list-item-avatar start>
            <v-icon :icon="item.icon" />
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Url } from '@/constants/url'
import Logo from '@/components/Logo.vue'

const router = useRouter()
const drawer = ref(false)

type Item = {
  text: string
  icon: string
  link: string
}
const items: Item[] = [
  { text: 'ログイン', icon: 'mdi-login-variant', link: Url.LOGIN },
  { text: 'マイページ', icon: 'mdi-account', link: Url.MEMBER },
]

const toggleMenu = () => {
  drawer.value = !drawer.value
}

const selectItem = (item: Item) => {
  router.push(item.link)
  drawer.value = true
}
</script>
