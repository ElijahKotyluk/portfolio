<template>
  <v-app dark>
    <v-toolbar
      class="pa-0"
      fixed
      app>
      <!-- toolbar title -->
      <v-toolbar-title>
        <v-btn class="title font-weight-light text-lowercase"
               to="/"
               outline
               flat
               active-class
               ripple>
          {{ title.name }}
        </v-btn>
      </v-toolbar-title>

      <!-- toolbar nav -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menu" :key="item.id"
               @click="$vuetify.goTo(item.id, { offset: -10 })"
               color="rgba(255, 255, 255, 1)"
               class="body-2"
               active-class
               ripple
               flat>{{ item.title }}</v-btn>
      </v-toolbar-items>

      <!-- a little space -->
      <v-spacer></v-spacer>

      <!-- menu for mobile devices -->
      <v-menu class="hidden-sm-and-up pr-4">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.id" @click="$vuetify.goTo(item.id, { offset: -85 })">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <!-- nuxt content -->
    <v-content id="app-container">
          <nuxt />
    </v-content>

    <v-footer
      fixed
      app
    >
      <v-spacer></v-spacer>
      <span>&copy; Elijah Kotyluk 2019</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            title: 'About Me',
            id: '#app-container'
          },
          {
            title: 'Tech',
            id: '#tech'
          },
          {
            title: 'Timeline',
            id: '#timeline'
          }
        ],
        title: {
          name: 'ElijahKotyluk.com'
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
