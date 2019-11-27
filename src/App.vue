<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title class="headline">
        <span>ReviewHub</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>sign in</v-btn>
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
    //
  })
}
</script>
