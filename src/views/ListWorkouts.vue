<template>
  <v-container>
    <!-- <v-card>
      <v-card-title> -->
    <span class="headline">Ma liste d'entrainements :</span>
    <!-- </v-card-title>
      <v-spacer />
      <v-card-text class="v-text" v-scroll.self="onScroll"> -->
    <!-- <v-container> -->
    <!-- <v-row>
            <v-col
              v-for="workout in workouts"
              :key="workout.id"
              class="d-flex child-flex"
              cols="4"
            > -->
    <br />
    <span class="center" v-if="workouts.length === 0"
      >La liste d'entrainement est vide.</span
    >
    <WorkoutCards
      v-else
      :workout="workout"
      v-for="workout in workouts"
      :key="workout.id"
    />
    <!-- </v-col>
          </v-row> -->
    <!-- <v-col v-for="(ex, index) in exercices" :key="index">
            <div>{{ ex.idWorkout }}</div>
          </v-col> -->
    <!-- </v-container> -->
    <!-- </v-card-text>
      <v-card-actions> -->
    <!-- <v-spacer /> -->
    <v-btn
      class="btn"
      outlined
      fab
      color="primary"
      @click="$router.push('/stepper')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!-- </v-card-actions>
    </v-card> -->
  </v-container>
</template>

<script>
import WorkoutCards from "@/components/WorkoutCards.vue";

export default {
  name: "Home",
  data: () => ({
    scrollInvoked: 0,
  }),
  components: {
    WorkoutCards,
  },
  computed: {
    workouts() {
      return this.$store.state.workouts;
    },
    // exercices() {
    //   return this.$store.getters.getExerciceByWorkout(3);
    // },
  },
  methods: {
    onScroll() {
      this.scrollInvoked++;
    },
  },
};
</script>

<style scoped>
/* .v-text {
  height: 70vh;
} */
.btn {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 10px;
}
.center {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
