<template>
  <v-app>



>
 <v-app-bar color="deep-purple" dark app   src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"  >
 
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      
      <v-toolbar-title class="headline text-uppercase">
        <span>Starter</span>
        <span class="font-weight-light">base</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn
    v-for="route in routes"
    :key="route.name"
    :disabled="page==route.path"
       @click="changePage(route.path);$router.push(route.path)"
      >
      {{route.name}}
          </v-btn>
 </v-app-bar>

    <v-content>
     <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
  },
    computed: {
    ...mapGetters('example',['page']),
  },
   methods: {

    ...mapActions('example', ['changePage']),

   }
   ,
  data () {
    return {
      addnew:false,
      routes: [{name: "Home", path:"/home"} ,{name: "About", path:"/about"}]
      //
    }
  }
}
</script>
