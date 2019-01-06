<template>
  <v-app dark>
    <v-toolbar
      class="pa-0"
      fixed
      app>
      <!-- Toolbar title -->
      <v-toolbar-title>
        <v-btn
        outline
        flat
        active-class
        ripple
        class="title font-weight-light text-lowercase"
        to="/">{{ title.name }}</v-btn>
      </v-toolbar-title>

      <!-- Toolbar nav -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          @click="$vuetify.goTo('#avatar', { offset: -100 })"
          class="body-2"
          flat
          color="rgb(135, 134, 134)"
          active-class
          ripple
          exact>
          {{ menu[0].title }}
        </v-btn>
        <v-btn
          @click="$vuetify.goTo('#skills', { offset: -100 })"
          class="body-2"
          flat
          color="rgb(135, 134, 134)"
          active-class
          ripple
          exact>
          {{ menu[1].title }}
        </v-btn>

      </v-toolbar-items>

      <!-- A little space -->
      <v-spacer></v-spacer>

      <!-- Menu for mobile devices -->
      <v-menu class="hidden-sm-and-up pr-4">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon" :to="item.to">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <!-- Nuxt content -->
    <v-content
      fill-height
      class="pt-3">
      <nuxt />
    </v-content>

    <!-- Footer -->
    <v-footer
      fixed
      app>
      <v-spacer></v-spacer>
      <span>&copy; Elijah Kotyluk 2019</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Contact from '~/components/Contact.vue'

export default {
  data() {
    return {
      dialog: false,
      menu: [
        { icon: 'apps', title: 'About Me', to: '/' },
        { icon: 'bubble_chart', title: 'Skills', },
        { icon: 'email', title: 'Contact', to: '/contact'}
      ],
      projects: {
        title: 'Projects',
        list: [
          { icon: 'today', title: 'vue-moment-calendar', href: 'https://github.com/ElijahKotyluk/Vue-Moment-Calendar'},
          { icon: 'search', title: 'nyt-react-search', href: 'https://github.com/ElijahKotyluk/NYT-react-search'},
          { icon: 'chat', title: 'vue-firebase-chat', href: 'https://github.com/ElijahKotyluk/vue-firebase-chat'}
        ]
      },
      title: {
        name: 'ElijahKotyluk.com',
        href: 'https://elijahkotyluk.com/'
      }
    }
  },
  components: {
    Contact
  }
}
</script>

<style>
.v-toolbar__content {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
