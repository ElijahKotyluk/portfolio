<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <v-card
        class="mt-5 elevation-12"
        width="50vh">
        <v-toolbar>
          <v-spacer />
          <v-toolbar-title class="headline">
            Contact Me
          </v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <!-- Form -->
        <v-form method="post"
          action="https://formspree.io/elijah@elijahkotyluk.com"
          id="nativeForm"
          v-model="valid">
          <input type="hidden" name="_next" value="https://elijahkotyluk.com" />
          <v-text-field
            class="pa-3 mt-2"
            outline
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
            name="mail"></v-text-field>
          <v-textarea
            class="pa-3"
            outline
            label="Message"
            v-model="message"
            :rules="messageRules"
            required
            name="message"></v-textarea>
          <v-btn @click="submit" :disabled="!valid">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Contact',
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
