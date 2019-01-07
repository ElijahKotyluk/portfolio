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
          iconColor: 'rgba(12, 183, 207, .3)',
          title: 'Dec, 2018',
          cardText: 'Started back up at Ribosome as a Full-Stack Dev, contracting and prototyping'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .3)',
          title: 'Nov, 2018',
          cardText: 'Graduated from UC Berkeley Coding Bootcamp'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .3)',
          title: 'May, 2018',
          cardText: 'Began UC Berkeley Coding Bootcamp'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .3)',
          title: 'Nov, 2017',
          cardText: 'Began my first job at Ribosome as a Jr. Dev'
        },
        {
          icon: 'ac_unit',
          color: 'rgba(18, 18, 18, .7)',
          iconColor: 'rgba(12, 183, 207, .3)',
          title: 'Feb, 2017',
          cardText: 'Began my journey as a developer'
        }
      ]
    }
  }
}
</script>

<style>
.theme--dark.v-timeline:before {
  background: rgba(12, 183, 207, .3);
}
</style>
