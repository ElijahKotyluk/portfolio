<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>

      <v-container>
        <!-- avatar -->
        <v-avatar
        class="elevation-12"
        size="200">
          <img src="../static/mee.png" alt="avatar" />
        </v-avatar>

        <!-- social links -->
        <div class="text-xs-center">
          <a
          href="https://www.linkedin.com/in/elijahkotyluk"
          target="_blank">
            <fa :icon="['fab', 'linkedin']" style="font-size: 25px" />
          </a>
          <a
          href="https://twitter.com/ElijahDavidK"
          target="_blank">
            <fa :icon="['fab', 'twitter']" style="font-size: 25px" />
          </a>
          <a
          href="https://github.com/ElijahKotyluk"
          target="_blank">
            <fa :icon="['fab', 'github']" style="font-size: 25px"/>
          </a>
        </div>
      </v-container>

 <!--
      <v-card
      class="mt-5 elevation-12"
      width="50vh">
        <v-toolbar>
          <v-spacer />
          <v-card-title class="headline">
            Elijah Kotyluk
          </v-card-title>
          <v-spacer />
        </v-toolbar>
        <v-card-title class="headline justify-center mt-3">
        </v-card-title>
        <v-card-text>
          <div class="text-xs-center">
            <p>Hello, I'm a self-taught software developer in his 20's.</p>
            <p>Want to check out what I'm working on? <a
              href="https://github.com/ElijahKotyluk"
              target="_blank">github</a>.</p>
          </div>
          <div class="text-xs-right">
            <em><small>&mdash; Elijah Kotyluk</small></em>
          </div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <div class="text-xs-center">
            <a
            href="https://www.linkedin.com/in/elijahkotyluk"
            target="_blank">
              <fa :icon="['fab', 'linkedin']" style="font-size: 25px" />
            </a>
            <a
            href="https://twitter.com/ElijahDavidK"
            target="_blank">
              <fa :icon="['fab', 'twitter']" style="font-size: 25px" />
            </a>
            <a
            href="https://github.com/ElijahKotyluk"
            target="_blank">
              <fa :icon="['fab', 'github']" style="font-size: 25px"/>
            </a>
          </div>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/skills">Continue</v-btn>
        </v-card-actions>
      </v-card>
    -->
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
