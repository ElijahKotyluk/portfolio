<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex xs12
    sm8
    md6>
      <v-card
      class="mt-5 elevation-12"
      width="50vh"
      >
      <v-toolbar>
        <v-spacer />
        <v-card-title class="headline">
          Skills
        </v-card-title>
        <v-spacer />
      </v-toolbar>
      <p class="ma-2 pl-2 mt-4">
        Can't see parts of your tech-stack on this list? No worries!
      </p>
      <p class="ml-2 pl-2">
        Depending on the project, I use more technologies than listed below.
      </p>
      <div>
        <polar-area></polar-area>
      </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PolarArea from '~/components/polar-area'

export default {
  data() {
    return {

    }
  },
  components: {
    PolarArea
  }
}
</script>
