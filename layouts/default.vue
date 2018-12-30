<template>
  <v-app dark>
    <v-toolbar
      class="pa-0"
      fixed
      app>
      <!-- toolbar title -->
      <v-toolbar-title>
        <v-btn
        outline
        flat
        active-class
        ripple
        class="title font-weight-light text-lowercase"
        to="/">{{ title.name }}</v-btn>
      </v-toolbar-title>

      <!-- toolbar nav -->
      <v-toolbar-items class="hidden-xs-only">
          <v-btn
            v-for="(item, i) in menu"
            :key="i"
            :to="item.to"
            class="body-2"
            flat
            color="rgb(135, 134, 134)"
            active-class
            ripple
            router
            exact>
            {{ item.title }}
          </v-btn>
      </v-toolbar-items>

      <!-- a little space -->
      <v-spacer></v-spacer>

      <!-- menu for mobile devices -->
      <v-menu class="hidden-sm-and-up">
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

      <v-btn
      @click.stop="rightDrawer = !rightDrawer">
        <v-list-tile-action>
          <v-icon>folder_open</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="projects.title" />
        </v-list-tile-content>
      </v-btn>

    <!-- nuxt content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      fixed
      app
    >
      <v-spacer></v-spacer>
      <span>&copy; Elijah Kotyluk 2018</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        menu: [
          { icon: 'apps', title: 'About Me', to: '/' },
          { icon: 'bubble_chart', title: 'Skills', to: '/skills' },
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
    }
  }
</script>

<style>
.v-toolbar__content {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
