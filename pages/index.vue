<template>


      <!-- Intro Container -->
      <v-container
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
          </v-flex>

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- About Me -->
          <v-container fluid>
            <v-flex xs12 sm24 md12>
              <about-me id="about-me"></about-me>
              <div class="text-xs-center">
                <vuetify-logo></vuetify-logo>
                <logo></logo>
              </div>
            </v-flex>
          </v-container>

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- Skills -->
          <v-flex xs12 sm24 md12>
            <skills id="skills"></skills>
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

export default {
  components: {
    Logo,
    VuetifyLogo,
    AboutMe,
    Skills,
    Contact
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
