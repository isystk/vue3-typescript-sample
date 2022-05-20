<template>
  <v-dialog v-model="_isOpen">
    <v-card>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="handleClose">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
  handleClose: () => void
}>()
const _isOpen = computed(() => {
  return props.isOpen
})
</script>
