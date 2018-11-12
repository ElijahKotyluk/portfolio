<template>
  <v-layout
  column
  justify-center
  align-center>
    <v-flex xs12>
      <v-card class="elevation-12"
      width="50em">
        <v-toolbar>
          <v-toolbar-title>Contact Me</v-toolbar-title>
        </v-toolbar>
        <v-form method="post" action="https://formspree.io/elijah@elijahkotyluk.com" id="nativeForm" v-model="valid">

        <v-text-field
          class="pa-3"
          outline
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          required
          name="mail"
        ></v-text-field>
        
        <v-textarea
          class="pa-3"
          outline
          label="Message"
          v-model="message"
          :rules="messageRules"
          required
          name="message"
        ></v-textarea>

          <v-btn @click="submit" :disabled="!valid">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
         valid: false,
         message: '',
         messageRules: [
           (v) => !!v || 'Message is required',
           (v) => v.length >= 10 || 'Message must be at least 10 characters'
         ],
         email: '',
         emailRules: [
           (v) => !!v || 'E-mail is required',
           (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
         ]
       }
     },
     methods: {
       submit() {
         nativeForm.submit()
       }
     }
  }
</script>
