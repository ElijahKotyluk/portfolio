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
          @click="$vuetify.goTo('#app-container', { offset: -85 })">
          {{ title.name }}
      </v-btn>
      </v-toolbar-title>

      <!-- toolbar nav -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          @click="$vuetify.goTo('#avatar', { offset: -85 })"
          class="body-2"
          flat
          color="rgba(255, 255, 255, 1)"
          active-class
          ripple>
          {{ menu[0].title }}
        </v-btn>
        <v-btn
          @click="$vuetify.goTo('#tech', { offset: -85 })"
          class="body-2"
          flat
          color="rgba(255, 255, 255, 1)"
          active-class
          ripple>
          {{ menu[1].title }}
        </v-btn>
        <v-btn
          @click="$vuetify.goTo('#timeline', {offset: -85 })"
          class="body-2"
          flat
          color="rgba(255, 255, 255, 1)"
          active-class
          ripple>
          {{ menu[2].title }}
        </v-btn>

        <v-dialog>

        </v-dialog>

      </v-toolbar-items>

      <!-- a little space -->
      <v-spacer></v-spacer>

      <!-- menu for mobile devices -->
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

    <!-- nuxt content -->
    <v-content>
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
          { title: 'About Me' },
          { title: 'Tech' },
          { title: 'Timeline' }
        ],
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
