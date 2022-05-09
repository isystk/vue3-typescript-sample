<template>
  <v-footer
    class="bg-indigo-lighten-1 text-white text-center d-flex flex-column"
    color="primary"
  >
    <!--    <div>-->
    <!--      <v-btn-->
    <!--          v-for="icon in icons"-->
    <!--          :key="icon"-->
    <!--          class="mx-4 text-white"-->
    <!--          :icon="icon"-->
    <!--          variant="text"-->
    <!--      ></v-btn>-->
    <!--    </div>-->

    <div class="text-white pt-0">© 2020 isystk&apos;s sample</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>
