<template>
  <div>
    <v-row
      class="mx-auto"
      style="width: 200px"
    >
      <v-select
        outlined
        label="language"
        v-bind:items="languages"
        v-model="selected"
      >
      </v-select>
    </v-row>
    <v-row>
      <v-col
        v-for="(repo, i) in repos.filter(r => r.language === selected)"
        v-bind:key="i"
      >
        <v-card
          class="mx-auto mt-10"
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
      // link, name, description, language
      repos: [],
      languages: [],
      selected: ''
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
