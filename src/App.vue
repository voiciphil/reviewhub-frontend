<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>ReviewHub</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-content>
      <RepoList/>
    </v-content>
  </v-app>
</template>

<script>
import RepoList from './components/RepoList'

export default {
  name: 'App',

  components: {
    RepoList
  },

  data: () => ({
    //
  })
}
</script>
