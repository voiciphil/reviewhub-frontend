<template>
  <div>
    <v-row
      flex
      class="mx-auto"
      style="width: 200px"
      justify="center"
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
          v-on:click="fileList(repo.link)"
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
    <v-row
      flex
      class="mx-auto mt-10"
      justify="center"
    >
      <v-btn
        outlined
        v-on:click="registRepo"
      >
        Regist Repository
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // link, name, description, language
      repos: [{
        id: 0,
        link: 'https://github.com/voiciphil/instore',
        name: 'instore',
        description: 'Save the pictures on Instagram!',
        language: 'Vue'
      }],
      languages: ['C', 'C++', 'C#', 'CSS', 'Java', 'F#', 'Fortran', 'Go', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'Perl', 'Python', 'R', 'Ruby', 'Rust', 'Shell', 'TypeScript', 'Vue'],
      selected: ''
    }
  },
  methods: {
    fileList (link) {
      this.$router.push('file-list')
    },
    registRepo () {
      this.$router.push('regist-repo')
    }
  }
}
</script>

<style scoped>

</style>
