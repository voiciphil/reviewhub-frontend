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
          v-on:click="fileList(repo.id, repo.name)"
        >
          <v-toolbar dark flat>
            <v-toolbar-title
              class="title text-uppercase"
            >
              {{ repo.name.split('/')[1] }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text
            class="body-1 text--primary"
          >
            {{ repo.description }}
          </v-card-text>
          <v-footer absolute>
            {{ `(${repo.name})` }}
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
        Register Repository
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // link, name, description, language
      repos: [],
      languages: ['C', 'C++', 'C#', 'CSS', 'Java', 'F#', 'Fortran', 'Go', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'Perl', 'Python', 'R', 'Ruby', 'Rust', 'Shell', 'TypeScript', 'Vue'],
      selected: ''
    }
  },
  methods: {
    fileList (id, name) {
      this.$store.commit('setId', id)
      this.$store.commit('setRepoName', name)
      this.$router.push('file-list')
    },
    registRepo () {
      this.$router.push('regist-repo')
    },
    getDes (repo) {

    }
  },
  created () {
    this.repos = []
    this.$http.get('http://localhost:80/info').then((result) => {
      this.$store.commit('setUser', result.data.github)
    })
    this.$http.get('http://localhost:80/post').then((result) => {
      result.data.forEach((d) => {
        this.$http.get(`https://api.github.com/repos/${d.name}`).then((res) => {
          this.repos.push({
            id: d.idx,
            link: d.repository_info,
            name: d.name,
            description: res.data.description,
            language: d.language,
            content: d.content
          })
        })
      })
    })
  }
}
</script>

<style scoped>

</style>
