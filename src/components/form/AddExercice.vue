<template>
  <div>
    <v-card outlined class="mb-12">
      <v-card-title>
        <span class="headline">Nouvel exercice</span>
      </v-card-title>
      <v-spacer />
      <v-card-text>
        <v-form ref="formExercice">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  label="Nom de l'exercice *"
                  required
                  :rules="ruleRequired"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-autocomplete
                  v-model="muscle"
                  :items="[
                    'Jambes',
                    'Pectoraux',
                    'Dos',
                    'Bras',
                    'Epaules',
                    'Abdos',
                  ]"
                  label="Groupe musculaire *"
                  required
                  :rules="ruleRequired"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="rest"
                  label="Temps de repos *"
                  required
                  :rules="ruleRequired"
                />
              </v-col>
            </v-row>
            <v-row v-for="index in indexSeries" :key="index">
              <v-col cols="6">
                <v-text-field
                  v-model="nbRep[index]"
                  label="Nombre de répétitions *"
                  required
                  :rules="ruleRequired"
                  type="number"
                />
              </v-col>
              <v-col cols="5">
                <v-text-field
                  v-model="weight[index]"
                  label="Poids *"
                  required
                  :rules="ruleRequired"
                  type="number"
                  suffix="Kg"
                />
              </v-col>
              <v-col class="center" v-if="index === indexSeries" cols="1">
                <v-btn
                  icon
                  color="secondary"
                  @click="removeSeries"
                  :disabled="index === 1"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
              <v-col class="center" v-if="index === indexSeries" cols="12">
                <v-btn text color="secondary" @click="addSeries">
                  Ajouter une série
                </v-btn>
              </v-col>
            </v-row>
            <br />
            <small>*champs obligatoires</small>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" @click="reset">
          <v-icon left>mdi-notification-clear-all</v-icon>
          Effacer
        </v-btn>
        <v-spacer />
        <v-btn text color="primary" @click="add">
          <v-icon left>mdi-plus</v-icon>
          Ajouter
        </v-btn>
      </v-card-actions>
    </v-card>
    <div v-if="exercices.length > 0">Mes exercices :</div>
    <v-row>
      <v-col cols="12">
        <v-sheet elevation="0" class="py-2 mb-5">
          <v-chip v-for="exercice in exercices" :key="exercice.id" class="ma-2">
            {{ exercice.name }}
          </v-chip>
        </v-sheet>
      </v-col>
    </v-row>
    <v-btn color="primary" @click="validate">
      Terminer
    </v-btn>
    <!-- <v-btn text>
      Retour
    </v-btn> -->
    <!-- <v-spacer /> -->
    <small class="message">{{ message }}</small>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "AddExercice",
  data: () => ({
    name: "",
    muscle: "",
    rest: "",
    nbRep: [],
    weight: [],
    series: [],
    indexSeries: 1,
    exercices: [],
    message: "",
    ruleRequired: [(v) => !!v || "Ce champ est obligatoire"],
  }),
  methods: {
    add: function() {
      if (this.$refs.formExercice.validate()) {
        for (let index = 1; index < this.indexSeries + 1; index++) {
          const newSeries = {
            nbRep: this.nbRep[index],
            weight: this.weight[index],
          };
          this.series.push(newSeries);
        }
        const newExercice = {
          id: this.$uuid.v4(),
          name: this.name,
          muscle: this.muscle,
          rest: this.rest,
          series: this.series,
        };
        this.exercices.push(newExercice);
        this.series = [];
        this.indexSeries = 1;
        this.reset();
      }
    },
    validate: function() {
      if (!_.isEmpty(this.exercices)) {
        if (!_.isEmpty(this.$store.state.workouts)) {
          const lastWorkout = _.last(this.$store.state.workouts);
          console.log("lastWorkout", lastWorkout);
          this.$store.commit("addExercices", {
            idWorkout: lastWorkout.id,
            exercices: this.exercices,
          });
          this.$router.push("/");
        } else {
          this.message =
            "Impossible d'ajouter un exercice sur un entrainement inexistant.";
        }
      } else {
        this.message = "Veuillez ajouter au moins un exercice.";
      }
    },
    reset() {
      this.$refs.formExercice.reset();
    },
    addSeries: function() {
      this.indexSeries++;
    },
    removeSeries: function() {
      if (this.indexSeries > 1) {
        this.indexSeries--;
      }
    },
  },
};
</script>

<style scoped>
.message {
  color: var(--v-error-base);
  margin-left: 15px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
