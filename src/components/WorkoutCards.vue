<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>{{ workout.date }}</div>
      <p class="display-1 text--primary">
        {{ workout.name }}
      </p>
      <p>Exercices :</p>
      <div class="text--primary">
        <ul v-for="exercice in exercices" :key="exercice.id">
          <li>{{ exercice.name }}</li>
          <ul v-for="series in exercice.series" :key="series.id">
            <li>{{ series.nbRep }}</li>
            <li>{{ series.weight }}</li>
          </ul>
        </ul>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">
        Voir plus
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "WorkoutCards",

  data: () => ({}),
  props: {
    workout: Object,
  },
  computed: {
    exercices() {
      return this.$store.getters.getExerciceByWorkout(this.workout.id);
    },
  },
};
</script>
