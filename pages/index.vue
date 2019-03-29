<template>


      <!-- Intro Container -->
      <v-container fluid class="pt-5">
        <v-layout column>
          <v-flex xs12 sm24 md12 class="pb-3">
            <!-- Avatar -->
            <v-layout column align-center>
              <v-avatar class="elevation-12 intro-zoom"
                        size="256"
                        id="avatar">
                <img src="../static/me.png" alt="avatar" />
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
                developer - 26 - Davis, CA
              </p>
            </div>

            <!-- Social Links -->
            <div class="text-xs-center intro-zoom">
                <a href="https://www.linkedin.com/in/elijahkotyluk"
                   class="pa-2 social-link"
                   target="_blank">
                  <fa :icon="['fab', 'linkedin']" style="font-size: 36px" />
                </a>
                <a href="https://twitter.com/ElijahDavidK"
                   class="pa-2 social-link"
                   target="_blank">
                  <fa :icon="['fab', 'twitter']" style="font-size: 36px" />
                </a>
                <a href="https://github.com/ElijahKotyluk"
                   class="pa-2 social-link"
                   target="_blank">
                  <fa :icon="['fab', 'gitkraken']" style="font-size: 36px"/>
                </a>
            </div>

            <!-- Animations -->
            <div class="text-xs-center pt-5">
              <p class="body-2">
                This site is powered by:
              </p>
              <v-layout row justify-center>
                <v-flex xs1>
                  <vuetify-logo></vuetify-logo>
                </v-flex>
                <v-flex xs1>
                  <logo></logo>
                </v-flex>
              </v-layout>
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
import Logo from '~/components/animations/Logo.vue';
import VuetifyLogo from '~/components/animations/VuetifyLogo.vue';
import AboutMe from '~/components/sections/AboutMe.vue';
import Skills from '~/components/sections/Skills.vue';
import Contact from '~/components/Contact.vue';
import Timeline from '~/components/sections/Timeline.vue';

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

.social-link {
  color: rgba(0, 0, 0, 0.6);
}
</style>
