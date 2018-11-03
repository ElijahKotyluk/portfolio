<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex xs12
    sm8
    md6>
      <v-card>
        <v-card-title class="project-title">
          <a href="https://github.com/ElijahKotyluk/Vue-Moment-Calendar"
          target="_blank">
            Vue Moment Calendar
          </a>
        </v-card-title>
        <v-list>
          <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          v-text="item.text"
          >
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
    }
  }
</script>
