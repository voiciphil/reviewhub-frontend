<template>
  <div>
    <v-row
      cols="12"
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
              <template v-for="(file, i) in files">
                <v-list-item
                  v-bind:key="file"
                  v-on:click="go(i)"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="file"
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
          <v-toolbar>
            <v-toolbar-title>Comment</v-toolbar-title>
          </v-toolbar>
          <v-list
            disabled
            two-lines
          >
            <v-list-item-group>
              <template v-for="(comment, i) in comments">
                <v-list-item
                  v-bind:key="comment"
                >
                  <v-list-item-content>
                    <v-list-item-subtitle
                      v-text="comment.user"
                    >
                    </v-list-item-subtitle>
                    <v-list-item-title
                      v-text="comment.comment"
                    >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider
                  v-if="i < comments.length - 1"
                  v-bind:key="i"
                >
                </v-divider>
              </template>
            </v-list-item-group>
          </v-list>
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
      files: ['frontend/src/components/ImageList.vue', 'frontend/src/components/Input.vue', 'backend/controllers/image.js'],
      repo: '',
      branch: '',
      comments: [],
      comment: ''
    }
  },
  methods: {
    giveComment () {
      if (this.comment !== '') {
        this.comments.push({
          comment: this.comment,
          user: ''
        })
        this.comment = ''
      }
    },
    go (index) {
      const url = 'https://github.com/' + this.repo + '/blob/' + this.branch + '/' + this.files[index]
      window.open(url)
    }
  }
}
</script>

<style>

</style>
