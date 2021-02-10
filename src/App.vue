<template>
  <v-app>
    <v-app-bar app>
      <!-- <v-btn icon fab color="red" @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn> -->
      <v-toolbar-title>Carnet de suivis d'entrainement</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 && this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss"></style>
