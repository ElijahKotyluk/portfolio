<template>
  <v-layout
    column
    align-center>
    <v-flex
    xs12
    sm8
    md6>

      <!-- Intro Container -->
      <v-container fill-height>
        <v-layout
        column>
          <!-- Avatar -->
          <v-avatar
          class="elevation-12 intro-zoom"
          size="256">
            <img src="../static/mee.png" alt="avatar" />
          </v-avatar>

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
              <fa :icon="['fab', 'github']" style="font-size: 40px"/>
            </a>
          </div>
        </v-layout>
      </v-container>
    </v-flex>

    <skills></skills>
  </v-layout>
</template>

<script>
import Logo from '~/components/animations/Logo.vue'
import VuetifyLogo from '~/components/animations/VuetifyLogo.vue'
import Skills from '~/components/sections/Skills.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Skills
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
