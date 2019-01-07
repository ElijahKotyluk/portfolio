<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex xs12
    sm8
    md6>
    <p class="headline text-xs-center pt-3">
      Technologies
    </p>
      <div class="pb-4 pt-2">
        <radar style="position: relative; height:50vh; width:100vw"></radar>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Radar from '~/components/radar'

export default {
  data() {
    return {

    }
  },
  components: {
    Radar
  }
}
</script>
