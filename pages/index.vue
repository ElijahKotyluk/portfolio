<template>


      <!-- Intro Container -->
      <v-container
      id="app-container"
      class="pt-5"
      fluid>
        <v-layout
        column>
          <v-flex xs12 sm24 md12
          class="pb-3">
            <!-- Avatar -->
            <v-layout column align-center>
              <v-avatar
              id="avatar"
              class="elevation-12 intro-zoom"
              size="256">
                <img src="../static/mee.png" alt="avatar" />
              </v-avatar>
            </v-layout>

            <!-- Intro Name/Title -->
            <div class="text-xs-center intro-zoom pt-2">
              <p class="display-1 pt-3">
                Elijah Kotyluk
              </p>
            </div>

            <div class="text-xs-center intro-zoom">
              <p class="subheading">
                developer - 25 - Davis, CA
              </p>
            </div>

            <!-- Social Links -->
            <div class="text-xs-center intro-zoom">
                <a
                  class="pa-2"
                  href="https://www.linkedin.com/in/elijahkotyluk"
                  target="_blank">
                  <fa :icon="['fab', 'linkedin']" style="font-size: 40px" />
                </a>
                <a
                  class="pa-2"
                  href="https://twitter.com/ElijahDavidK"
                  target="_blank">
                  <fa :icon="['fab', 'twitter']" style="font-size: 40px" />
                </a>
                <a
                  class="pa-2"
                  href="https://github.com/ElijahKotyluk"
                  target="_blank">
                  <fa :icon="['fab', 'gitkraken']" style="font-size: 40px"/>
                </a>
            </div>


            <div class="text-xs-center pt-5">
              <p class="body-2">
                This site is powered by:
              </p>
              <vuetify-logo></vuetify-logo>
              <logo></logo>
            </div>
          </v-flex>

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- Skills -->
          <v-flex xs12 sm24 md12>
            <skills id="tech"></skills>
          </v-flex>

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- Timeline -->
          <v-flex xs12 sm24 md12>
            <timeline></timeline>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import Logo from '~/components/animations/Logo.vue'
import VuetifyLogo from '~/components/animations/VuetifyLogo.vue'
import AboutMe from '~/components/sections/AboutMe.vue'
import Skills from '~/components/sections/Skills.vue'
import Contact from '~/components/Contact.vue'
import Timeline from '~/components/sections/Timeline.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    AboutMe,
    Skills,
    Contact,
    Timeline
  }
}
</script>

<style>
@keyframes zoom-in-out {
    0% {
        transform: scale(.3, .3);
    }
    50% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(1, 1);
    }
}

.intro-zoom {
	animation: zoom-in-out 1.5s;
}
</style>
