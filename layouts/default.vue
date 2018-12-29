<template>
  <v-app dark>
    <v-toolbar
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
      <v-toolbar-items class="hidden-sm-and-down">
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

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      :right="right"
      width="200"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Current Projects</v-list-tile-title>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile
          v-for="(project, i) in projects.list"
          :key="i"
          :href="project.href">
          <v-list-tile-action>
            <v-icon v-html="project.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="project.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      :fixed="fixed"
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
        clipped: false,
        drawer: false,
        fixed: false,
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
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: {
          name: 'ElijahKotyluk.com',
          href: 'https://elijahkotyluk.com/'
        }
      }
    }
  }
</script>
