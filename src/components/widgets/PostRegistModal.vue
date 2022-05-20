<template>
  <Modal :isOpen="isOpen" :handleClose="handleClose"> hoge </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/widgets/Modal.vue'
const props = defineProps<{
  isOpen: boolean
  handleClose: () => void
}>()
</script>
