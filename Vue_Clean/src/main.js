import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import App from './App.vue'



import axios from 'axios'
Vue.prototype.$axios = axios

import store from './store/'

new Vue({
      el: '#app',
      router,
      vuetify,
      store,
      components: { App },
      render: h => h(App)
    }).$mount('#app')
