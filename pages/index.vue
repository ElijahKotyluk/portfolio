<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>

      <v-container
      column
      justify-space-around
      align-content-space-between>

        <!-- avatar -->
        <v-avatar
        class="elevation-12 img-zoom"
        size="200">
          <img src="../static/mee.png" alt="avatar" />
        </v-avatar>

        <div class="text-xs-center">
          <p class="display-1 pt-3">
            Elijah Kotyluk
          </p>
        </div>

        <!-- social links -->
        <div class="text-xs-center">
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
        transform: scale(.3,.3);
    }
    50% {
        transform: scale(1.1,1.1);
    }
    100% {
        transform: scale(1,1);
    }
}

.img-zoom {
	animation: zoom-in-out 1s;
}
</style>
