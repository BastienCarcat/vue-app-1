import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#495867",
        secondary: "#c18c5d",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
