<template>
  <div>
    <v-row>
      <v-col
        v-for="(repo, i) in repos"
        v-bind:key="i"
      >
        <v-card
          class="mx-auto"
          width="300"
          height="200"
          v-on:click="onClick(repo.link)"
        >
          <v-toolbar dark flat>
            <v-toolbar-title
              class="title text-uppercase"
            >
              {{ repo.name }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text
            class="body-1 text--primary"
          >
            {{ repo.description }}
          </v-card-text>
          <v-footer absolute>
            {{ '(' + repo.link.split('/')[3] + '/' + repo.link.split('/')[4] + ')' }}
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // link, name, description
      repos: []
    }
  },
  methods: {
    onClick (link) {
    }
  }
}
</script>

<style scoped>

</style>
