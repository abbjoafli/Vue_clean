<template>
 <v-row
    align="center"
    justify="space-around"
  >
    <v-btn depressed>
      Normal
    </v-btn>
    <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      depressed
      color="error"
    >
      Error
    </v-btn>
    <v-btn
      depressed
      disabled
    >
      Disabled
    </v-btn>


<!-- <ExampleComp MSG="apa apa"  /> -->
<br>
<br>
{{page}}
{{names}}
  </v-row>


</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import ExampleComp from '../components/ExampleComp.vue'
export default {


  computed: {
    ...mapGetters('example',['page','names']),
  },
  components: { ExampleComp },
    methods: {}
}
</script>
<style>

</style>