import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workouts: [],
    exercices: [
      // {
      //   idWorkout: 3,
      //   exercices: ["test"],
      // },
    ],
  },
  getters: {
    getExerciceByWorkout: (state) => (id) => {
      let exercices = [];
      state.exercices.forEach((ex) => {
        if (ex.idWorkout === id) {
          exercices = ex.exercices;
        }
      });
      console.log("exercices", exercices);
      return exercices;
    },
    test: (state) => {
      return state.exercices[0];
    },
  },
  mutations: {
    addWorkout: (state, payload) => {
      state.workouts.push(payload);
    },
    addExercices: (state, payload) => {
      state.exercices.push(payload);
    },
  },
  actions: {
    // addWorkout: (context) => {
    //   context.commit("addWorkout");
    // },
  },
  modules: {},
});
