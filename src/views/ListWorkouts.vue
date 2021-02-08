<template>
  <div class="home">
    <v-row>
      <v-col
        v-for="workout in workouts"
        :key="workout.id"
        class="d-flex child-flex"
        cols="4"
      >
        <WorkoutCards :workout="workout" />
      </v-col>
    </v-row>

    <v-btn outlined fab color="primary" @click="$router.push('/stepper')">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-col v-for="(ex, index) in exercices" :key="index">
      <div>{{ ex.idWorkout }}</div>
    </v-col>
  </div>
</template>

<script>
import WorkoutCards from "@/components/WorkoutCards.vue";

export default {
  name: "Home",
  components: {
    WorkoutCards,
  },
  computed: {
    workouts() {
      return this.$store.state.workouts;
    },
    exercices() {
      return this.$store.getters.getExerciceByWorkout(3);
    },
  },
};
</script>
