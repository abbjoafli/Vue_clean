<template>
  <v-card
    class="mx-auto"
    max-width="344"
    v-if="pokemon!=null"
  >
    <v-img
      :src="pokemon.sprites.front_default"
      height="200px"
    ></v-img>

    <v-card-title>
      {{pokemon.name}}
    </v-card-title>

    <v-card-subtitle>
         {{pokemon.types[0].type.name}}

    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
          @click="show = !show"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'expand_less' : 'expand_more' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
      {{pokemon}}
         
          </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {

  mounted() {
    this.$axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((result) => {
      this.pokemon = result.data;
    });
  },
methods(){

},
  
    // h
data() {//All data som ska finnas i komponenten
    return {
     name: '',
      show: false,
      pokemon: null,
     
    }
  },

}
</script>
<style>

</style>