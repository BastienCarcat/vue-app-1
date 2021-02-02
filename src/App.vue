<template>
  <v-app>
    <v-app-bar app color="primary"></v-app-bar>

    <v-main>
      <ListWorkout />
    </v-main>
  </v-app>
</template>

<script>
import ListWorkout from "./components/ListWorkout";

export default {
  name: "App",

  components: {
    ListWorkout,
  },

  data: () => ({
    //
  }),
};
</script>
