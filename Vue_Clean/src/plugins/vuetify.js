import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#f0853e',
    secondary: '#e8e8e8',
    accent: '#9C27B0',
    error: '#FF5252',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#F2C037',
    first: '#faf323',
    second: '#dbdbd3',
    third: '#dba339',
      },
      dark: {
        primary: colors.blue.lighten3,
        secondary: '#ff0000',
      },
  },
},
  customProperties: true,
  iconfont: 'md'
})
// new Vue({
//   theme: {
//     dark: false,
//     themes: {
//       light: {
//         primary: '#f0853e',
//     secondary: '#e8e8e8',
//     accent: '#9C27B0',
//     error: '#FF5252',
//     info: '#31CCEC',
//     success: '#21BA45',
//     warning: '#F2C037',
//     first: '#faf323',
//     second: '#dbdbd3',
//     third: '#dba339',
//       },
//       dark: {
//         primary: colors.blue.lighten3,
//         secondary: '#ff0000',
//       },
//   },
// },
//   customProperties: true,
//   iconfont: 'md'
// })



  