<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>

      <!-- Intro Container -->
      <v-container
      column
      justify-space-around
      align-content-space-between>

        <!-- Avatar -->
        <v-avatar
        class="elevation-12 intro-zoom"
        size="200">
          <img src="../static/mee.png" alt="avatar" />
        </v-avatar>

        <!-- Intro Name/Title -->
        <div class="text-xs-center intro-zoom">
          <p class="display-1 pt-3">
            Elijah Kotyluk
          </p>
        </div>

        <!-- Social Links -->
        <div class="text-xs-center intro-zoom">
          <a
          href="https://www.linkedin.com/in/elijahkotyluk"
          target="_blank">
            <fa :icon="['fab', 'linkedin']" style="font-size: 40px" />
          </a>
          <a
          href="https://twitter.com/ElijahDavidK"
          target="_blank">
            <fa :icon="['fab', 'twitter']" style="font-size: 40px" />
          </a>
          <a
          href="https://github.com/ElijahKotyluk"
          target="_blank">
            <fa :icon="['fab', 'github']" style="font-size: 40px"/>
          </a>
        </div>
        
      </v-container>

      <!-- Vuetify/Nuxt Animations -->
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

export default {
  components: {
    Logo,
    VuetifyLogo
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
