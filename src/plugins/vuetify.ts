// Styles
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#000d6d',
          background: '#fff',
          error: '#d63031',
          info: '#0984e3',
          secondary: '#fdcb6e',
          success: '#00cec9',
          surface: '#fff',
          warning: '#2d3436',
        },
        dark: false,
        variables: {},
      },
    },
  },
});

export default vuetify