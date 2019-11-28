<template>
  <div class="body">
    <v-card
      outlined
      class="mx-auto mt-10"
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
        class="mx-10 mt-n5"
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
        class="mx-10 mt-n5"
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
          <v-list disabled dense>
            <v-list-item-group>
              <v-list-item
                v-for="(file, i) in files"
                v-bind:key="i"
              >
                {{ file }}
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <v-row
        flex
        class="mb-10 mt-10"
        justify="center"
      >
        <v-btn
          outlined
        >
          regist
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
      selectedRepo: '',
      selectedBranch: '',
      fileName: ''
    }
  },
  methods: {
    addFile () {
      if (this.fileName !== '' && this.files.indexOf(this.fileName) === -1) {
        this.files.push(this.fileName)
      }
      this.fileName = ''
    },
    getBranch () {
      this.branches = []
      this.selectedBranch = ''
      this.$http.get('https://api.github.com/repos/' + this.selectedRepo + '/branches').then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          this.branches.push(result.data[i].name)
        }
      })
    }
  },
  created () {
    const user = ''
    this.$http.get('https://api.github.com/users/' + user + '/repos').then((result) => {
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
