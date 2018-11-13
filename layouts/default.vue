<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      :width="200"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      :width="200"
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
          v-for="(project, i) in projects"
          :key="i"
          router
          exact
          :href="project.href"
        >
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
      <span>&copy; Elijah Kotyluk 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Home', to: '/' },
          { icon: 'bubble_chart', title: 'Projects', to: '/projects' },
          { icon: 'email', title: 'Contact', to: '/contact'}
        ],
        projects: [
          { icon: 'today', title: 'vue-moment-calendar', href: 'https://github.com/ElijahKotyluk/Vue-Moment-Calendar'},
          { icon: 'search', title: 'nyt-react-search', href: 'https://github.com/ElijahKotyluk/NYT-react-search'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ElijahKotyluk.com'
      }
    }
  }
</script>
