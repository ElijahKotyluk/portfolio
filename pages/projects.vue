<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex xs12
    sm8
    md6>
      <project-card></project-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

  export default{
    data() {
      return {
        items: [
          { text: 'Vue.js' },
          { text: 'Moment.js' },
          { text: 'Python3'},
          { text: 'Flask' }
        ]
      }
    },
    components: {
      ProjectCard
    }
  }
</script>
