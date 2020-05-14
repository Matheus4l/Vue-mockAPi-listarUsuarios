import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#e70064',
      },
    },
  },
  
});
