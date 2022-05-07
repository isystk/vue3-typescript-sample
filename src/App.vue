<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from "vue";
import rootStore, {RootStoreKey} from "@/store/index";
provide(RootStoreKey, rootStore());
</script>
