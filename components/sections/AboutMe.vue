<template>
  <v-container fluid>
    <v-layout
      column
      justify-center
      align-center>
      <v-flex wrap xs12 sm8 md6>
        <v-layout row>
          <v-flex xs6>
            <p class="title font-weight-medium">
              <strong>Hello</strong>
            </p>
          </v-flex>
          <v-flex xs6>
            <p class="title font-weight-medium">
              , I'm <strong>Elijah</strong>
            </p>
          </v-flex>
        </v-layout>
        <p class="subheading font-weight-medium text-xs-center">
          A self-taught developer in his 20's
        </p>
        <p class="subheading font-weight-regular text-xs-center">
          Davis, CA
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'AboutMe',
    data () {
      return {

      }
    }
  }
</script>

<style>
</style>
