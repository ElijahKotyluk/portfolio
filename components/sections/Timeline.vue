<template>
  <v-container id="timeline">
    <p class="text-xs-center headline">
      Timeline
    </p>
    <v-timeline>
      <v-timeline-item
        v-for="(item, i) in items"
        :color="item.color"
        :icon="item.icon"
        :iconColor="item.iconColor"
        :key="i">
        <v-card :color="item.color">
          <v-card-title class="title justify-center">{{ item.title }}</v-card-title>
          <v-card-text class="black font-weight-medium text-xs-center">
            <p>{{ item.cardText }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: 'Timeline',
  data () {
    return {
      items: [
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .5)',
          title: 'Nov, 2018',
          cardText: 'riboso.me: Full-Stack Dev. - Contracting & Prototyping'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .5)',
          title: 'Nov, 2018',
          cardText: 'Graduated UC Berkeley Coding Bootcamp'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .5)',
          title: 'May, 2018',
          cardText: 'UC Berkeley Coding Bootcamp'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .5)',
          title: 'Nov, 2017',
          cardText: 'riboso.me: Junior Developer'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .5)',
          title: 'Feb, 2017',
          cardText: 'The month I decided I wanted to learn programming'
        }
      ]
    }
  }
}
</script>

<style>
.theme--dark.v-timeline:before {
  background: rgba(12, 183, 207, .5);
}
</style>
