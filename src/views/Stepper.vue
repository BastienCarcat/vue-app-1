<template>
  <v-container class="center">
    <v-stepper v-model="stepper" vertical class="stepper" flat>
      <v-stepper-step :complete="stepper > 1" step="1">
        Ajouter un entrainement
      </v-stepper-step>
      <v-stepper-content step="1">
        <AddWorkout @nextStep="nextStep" />
        <!-- <v-btn color="primary" @click="nextStep">
        Continue
      </v-btn>
      <v-btn text> Cancel</v-btn> -->
      </v-stepper-content>
      <v-stepper-step :complete="stepper > 2" step="2">
        Ajouter un exercice
      </v-stepper-step>
      <v-stepper-content step="2">
        <AddExercice />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import AddExercice from "../components/form/AddExercice";
import AddWorkout from "../components/form/AddWorkout";
export default {
  name: "Stepper",
  data: () => ({
    stepper: 1,
  }),
  methods: {
    nextStep() {
      this.stepper += 1;
    },
  },

  components: {
    AddExercice,
    AddWorkout,
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
.stepper {
  width: 800px;
  min-width: 500px;
}
</style>
