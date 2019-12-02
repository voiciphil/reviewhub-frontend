<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title class="headline">
        <span
          v-on:click="home"
        >
          Review Hub
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
      >
        <a href="http://localhost:80/login">{{ user }}</a>
      </v-btn>
    </v-app-bar>

    <v-content
      class="mt-10"
    >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    user: 'sign in'
  }),
  methods: {
    home () {
      this.$router.push('/')
    },
    created () {
      this.user = this.$store.getters.getUser
    }
  }
}
</script>
