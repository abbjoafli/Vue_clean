<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Movies</span>
        <span class="font-weight-light"> Super database</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn
        flat
        target="_blank"
        @click="addnew= !addnew"
      >
      
        <span  v-if="addnew!==true" class="mr-2">Lägg till film</span>
        <span  v-else class="mr-2">Kolla filmer</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    <div v-if="addnew!==true">
     
    <ExampleComp MSG="apa apa apa" />
      </div>
          <div v-else>
     
      </div>
    </v-content>
  </v-app>
</template>

<script>
import ExampleComp from './components/ExampleComp'

export default {
  name: 'App',
  components: {
    ExampleComp
  },
  data () {
    return {
      addnew:false,
      //
    }
  }
}
</script>
