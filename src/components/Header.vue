<template>
  <v-app-bar class="overflow-visible" color="primary" prominent>
    <Logo />
    <v-spacer />
    <v-app-bar-nav-icon
      variant="text"
      class="visible md:invisible"
      @click.stop="toggleMenu"
    />
    <v-card
      class="mx-auto top-0 right-0 invisible md:visible"
      width="300"
      absolute
    >
      <v-list density="compact" theme="dark" nav>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              two-line
              prepend-avatar="/images/user_dummy.png"
              title="Jane Smith"
              subtitle="Logged in"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item.text"
            :title="item.text"
            :prepend-icon="item.icon"
            @click="selectItem(item)"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" bottom temporary position="right">
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
