<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <v-card class="mt-5">
        <v-card-title class="headline justify-center">Elijah Kotyluk</v-card-title>
        <v-card-text>
          <p>
            <h3>Hello!</h3>
          </p>
          <p>I'm Elijah, a self-taught software developer in his 20's.</p>
          <p>Want to check out what I'm working on? <a
            href="https://vuetifyjs.com"
            target="_blank">github</a>.</p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Elijah Kotyluk</small></em>
          </div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <div class="text-xs-center">
            <a
              href="https://github.com/ElijahKotyluk"
              target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" style="font-size: 25px"/></a>
            <a
              href="https://twitter.com/ElijahDavidK"
              target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" style="font-size: 25px"/></a>
            <a
              href="https://www.linkedin.com/in/elijahkotyluk"
              target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" style="font-size: 25px"/></a>
          </div>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/projects">Continue</v-btn>
        </v-card-actions>
      </v-card>
      <div class="text-xs-center mt-5">
        <h3 class="ma-3">This site is powered by:</h3>
        <logo/>
        <vuetify-logo/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/animations/Logo.vue'
import VuetifyLogo from '~/components/animations/VuetifyLogo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    Logo,
    VuetifyLogo,
    FontAwesomeIcon
  }
}
</script>
