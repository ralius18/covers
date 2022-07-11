import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ffc107",
        secondary: "#17a2b8"
      },
      dark: {
        primary: {
          base: "#ffc107",
          lighten1: "#ffd68c",
          lighten2: "#ffe9c1"
        },
        secondary: "#17a2b8",
        anchor: "#ffe9c1",
        background: {
          base: "#121212",
          lighten1: "#252627"
        },
        dark_background: "#121212"
      },
    }
  }
});
