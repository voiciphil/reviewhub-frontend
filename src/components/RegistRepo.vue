<template>
  <div class="body">
    <v-card
      outlined
      class="ma-auto"
      max-width="600"
    >
      <v-row
        class="mx-10 mt-10"
      >
        <v-col>
          <v-select
            outlined
            label="Repository"
            v-bind:items="repos"
            v-model="selectedRepo"
            v-on:change="getBranch"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row
        class="mx-10 mt-n10"
      >
        <v-col>
          <v-select
            outlined
            label="Language"
            v-bind:items="languages"
            v-model="selectedLanguage"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row
        class="mx-10 mt-n10"
      >
        <v-col>
          <v-textarea
            outlined
            label="content"
            v-model="content"
          >
          </v-textarea>
        </v-col>
      </v-row>
      <v-row
        class="mx-10 mt-n10"
      >
        <v-col>
          <v-select
            outlined
            label="Branch"
            v-bind:items="branches"
            v-model="selectedBranch"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row
        class="mx-10 mt-n10"
        cols="12"
      >
        <v-col
          cols="10"
        >
          <v-text-field
            outlined
            placeholder="File link e.g. src/index.js"
            v-model="fileName"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="2"
        >
          <v-btn
            outlined
            primary
            height="56"
            v-on:click="addFile"
            v-on:keyup.enter="addFile"
          >
            add
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        class="mx-10 mt-n10"
      >
        <v-col>
          <v-card outlined>
            <v-list
              disabled
              dense
              outlined
            >
              <v-list-item-group>
                <template v-for="(file, i) in files">
                  <v-list-item
                    v-bind:key="i"
                  >
                    {{ `(${file.branch}) ${file.name}` }}
                  </v-list-item>
                  <v-divider
                    v-if="i < files.length - 1"
                    v-bind:key="i"
                  >
                  </v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        flex
        class="mb-10"
        justify="center"
      >
        <v-btn
          outlined
          primary
          v-on:click="regist"
        >
          register
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      repos: [],
      branches: [],
      files: [],
      languages: ['C', 'C++', 'C#', 'CSS', 'Java', 'F#', 'Fortran', 'Go', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'Perl', 'Python', 'R', 'Ruby', 'Rust', 'Shell', 'TypeScript', 'Vue'],
      content: ``,
      selectedRepo: '',
      selectedBranch: '',
      selectedLanguage: '',
      fileName: ''
    }
  },
  methods: {
    addFile () {
      if (this.fileName !== '' && this.selectedBranch !== '') {
        this.files.push({
          branch: this.selectedBranch,
          name: this.fileName
        })
      }
      this.fileName = ''
      this.selectedBranch = ''
    },
    check () {
      let flag = false
      this.$http.get(`https://api.github.com/repos/${this.selectedRepo}/contents/${this.fileName}`, {
        params: {
          ref: this.selectedBranch
        }
      }).then((result) => {
        flag = true
        console.log(flag)
      })
      console.log(flag)
      return flag
    },
    getBranch () {
      this.branches = []
      this.selectedBranch = ''
      this.$http.get(`https://api.github.com/repos/${this.selectedRepo}/branches`).then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          this.branches.push(result.data[i].name)
        }
      })
    },
    regist () {
      const post = {
        repository_info: 'https://github.com/' + this.selectedRepo,
        language: this.selectedLanguage,
        content: this.content,
        name: this.selectedRepo
      }
      this.$http.post('http://localhost:80/post', post).then((result) => {
        for (let i = 0; i < this.files.length; i++) {
          this.$http.post('http://localhost:80/file', {
            post_idx: result.data.idx,
            file_name: this.files[i].name,
            branch_info: this.files[i].branch
          }).then((result) => {
          })
        }
        this.$router.push('/')
      })
    }
  },
  created () {
    const user = this.$store.getters.getUser
    this.$http.get(`https://api.github.com/users/${user}/repos`).then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        this.repos.push(result.data[i].full_name)
      }
    })
  }
}
</script>

<style scoped>
.body {
  text-align: center;
}
</style>
