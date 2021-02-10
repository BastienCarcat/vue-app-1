<template>
  <div>
    <v-card outlined class="mb-12">
      <v-card-title>
        <span class="headline">Nouvel entrainement</span>
      </v-card-title>
      <v-spacer />
      <v-card-text>
        <v-form ref="formWorkout">
          <v-container>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  v-model="name"
                  label="Nom de l'entrainement *"
                  required
                  :rules="ruleRequired"
                />
              </v-col>
              <v-col cols="4">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formatDate"
                      label="Date *"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      required
                      :rules="ruleRequired"
                      value="test"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    :value="date"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <!-- <v-row class="d-flex justify-center">
                <v-col cols="4" class="d-flex justify-center">
                  <AddExercice />
                </v-col>
              </v-row> -->
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
      </v-card-actions>
    </v-card>
    <v-btn color="primary" @click="validate">
      Continuer
    </v-btn>
    <v-btn text @click="$router.push('/')">
      Retour
    </v-btn>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("fr");
export default {
  name: "AddWorkout",
  data: () => ({
    name: "",
    ruleRequired: [(v) => !!v || "Ce champ est obligatoire"],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
  computed: {
    formatDate() {
      return moment(this.date).format("L");
    },
  },
  methods: {
    validate: function() {
      if (this.$refs.formWorkout.validate()) {
        this.$store.commit("addWorkout", {
          id: this.$uuid.v4(),
          name: this.name,
          date: moment(this.date).format("LL"),
        });
        this.$emit("nextStep");
      }
    },
    reset() {
      this.$refs.formWorkout.reset();
    },
  },
};
</script>
