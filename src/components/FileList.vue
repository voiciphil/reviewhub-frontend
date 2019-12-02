<template>
  <div>
    <v-row
      cols="12"
      class="mx-10"
    >
      <v-col
        cols="4"
      >
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>File List</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-item-group>
              <template v-for="(f, i) in files">
                <v-list-item
                  v-bind:key="f.file"
                  v-on:click="go(i)"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="f.file"
                    >
                    </v-list-item-title>
                  </v-list-item-content>
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
      <v-col
        cols="8"
      >
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>Comment</v-toolbar-title>
          </v-toolbar>
          <v-card
            outlined
            tile
            v-for="(com, i) in comments"
            v-bind:key="i"
          >
            <v-card-text>
              <div>{{ com.user }}</div>
              <div
                class="text--primary"
              >
                {{ com.comment }}
              </div>
            </v-card-text>
          </v-card>
          <v-footer>
            <v-row
              flex
              cols="12"
              justify="center"
            >
              <v-col
                cols="10"
              >
                <v-textarea
                  solo
                  class="mt-7"
                  v-model="comment"
                >
                </v-textarea>
              </v-col>
              <v-col
                cols="2"
              >
                <v-btn
                  outlined
                  class="mt-7 mx-auto"
                  height="117"
                  v-on:click="giveComment"
                >
                  comment
                </v-btn>
              </v-col>
            </v-row>
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
      files: [],
      repo: '',
      comments: [],
      comment: ``,
      repoid: -1
    }
  },
  methods: {
    giveComment () {
      if (this.comment !== '') {
        this.$http.post('http://localhost:80/comment', {
          post_idx: this.repoid,
          content: this.comment,
          user_name: this.repo.split('/')[0]
        }).then((result) => {
          this.comments.push({
            comment: this.comment,
            user: this.repo.split('/')[0]
          })
          this.comment = ``
        })
      }
    },
    go (index) {
      const url = `https://github.com/${this.repo}/blob/${this.files[index].branch}/${this.files[index].file}`
      window.open(url)
    }
  },
  created () {
    this.repoid = this.$store.getters.getId
    this.repo = this.$store.getters.getRepoName
    this.$http.get(`http://localhost:80/file/${this.repoid}`).then((result) => {
      this.files = []
      for (let i = 0; i < result.data.length; i++) {
        this.files.push({
          file: result.data[i].file_name,
          branch: result.data[i].branch_info
        })
      }
    })
    this.$http.get(`http://localhost:80/comment/${this.repoid}`).then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        this.comments.push({
          comment: result.data[i].content,
          user: result.data[i].user_name
        })
      }
    })
  }
}
</script>

<style>

</style>
