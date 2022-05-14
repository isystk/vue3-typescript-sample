<template>
  <v-app-bar class="overflow-visible" color="primary" prominent>
    <Logo />
    <v-spacer />

    <template v-if="isLogined">
      <v-app-bar-nav-icon
        variant="text"
        class="visible md:invisible"
        @click.stop="toggleMenu"
        v-if="isLogined"
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
                :title="username"
                subtitle="Logged in"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item.text"
              :title="item.text"
              :prepend-icon="item.icon"
              @click="item.func"
            ></v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </template>
    <template v-else>
      <router-link :to="Url.LOGIN">
        {{ t('ログイン') }}
      </router-link>
    </template>
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
          @click="item.func"
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {computed, ref} from 'vue'
import { useRouter } from 'vue-router'
import { Url } from '@/constants/url'
import Logo from '@/components/Logo.vue'
import { injectStore } from '@/store'
const main = injectStore()

const router = useRouter()
const drawer = ref(false)

const toggleMenu = () => {
  drawer.value = !drawer.value
}

const isLogined = main?.auth.signCheck()
const {username} = main?.auth.user || {}

const items = computed(() => {
  return [
    isLogined ? { text: 'ログアウト', icon: 'mdi-login-variant', func: () => main?.auth.signOut() }: { text: 'ログイン', icon: 'mdi-login-variant', func: () => router.push(Url.LOGIN) },
    { text: 'マイページ', icon: 'mdi-account', func: () => router.push(Url.MEMBER) },
  ]
})
</script>
