<template>
  <v-card class="mx-auto ma-10" max-width="600">
    <v-card-text>
      <div>Le {{ workout.date }}</div>
      <p class="display-1 text--primary">
        {{ workout.name }}
      </p>
      <p>Exercices :</p>
      <span v-if="exercices.length === 0">Aucun exercice.</span>
      <v-list-item
        v-else
        two-line
        v-for="exercice in exercices"
        :key="exercice.id"
      >
        <v-list-item-content>
          <v-list-item-title class="d-flex align-center">
            <!-- <span>{{ index + 1 }}.</span> -->
            <span class="mx-2">
              <v-img
                :src="require(`../assets/${exercice.muscle}.png`)"
                width="30px"
              ></v-img>
            </span>
            <span>{{ exercice.name }} :</span>
          </v-list-item-title>
          <v-spacer />
          <v-list-item-subtitle
            v-for="series in exercice.series"
            :key="series.id"
            class="d-flex justify-space-around"
          >
            <span class="first-txt"
              >{{ series.nbRep }} répétition(s) de {{ series.weight }} Kg
            </span>

            <span class="last-txt"
              >Volume : {{ series.nbRep * series.weight }} Kg</span
            >
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn text color="secondary">
        Voir plus
      </v-btn>
    </v-card-actions> -->
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

<style scoped>
.first-txt {
  width: 200px;
}
.last-txt {
  width: 150px;
}
</style>
