<template>
    <div style="width: 80%; margin: auto;">
      <h1>Posts</h1>
      <div v-if="posts.length > 0">
      <table style="width: 90%; margin: auto;">
        <tr>
          <td>User</td>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts">
          <td v-if="post.user">{{ post.user }}</td>
          <td v-else>Anonymous</td>
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link>
            <span @click="deletePost(post._id)">Delete</span>
          </td>
        </tr>
      </table>
        <br>
        <el-button type="success"><router-link to="/post/new">Write</router-link></el-button>
      </div>
      <div v-else>
        <h3>No Posts... broo...</h3>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Post",
    data () {
      return {
        posts: {}
      }
    },
    created () {
      this.getPosts ()
    },
    methods: {
      async refreshPosts () {
        await this.getPosts()
      },
      async getPosts () {
        await this.$http.get('/api/posts')
          .then((response) => {
            this.posts = response.data.posts
          })
      },
      async deletePost (id) {
        await this.$http.delete('/api/posts/delete/' + id, {id: id})
          .then((response) => {
            alert(response.data.message)
          })
          .catch((response) => {
            alert('오류가 발생했습니다')
          })
        await this.refreshPosts()
      }
    }
  }
</script>

<style scoped>
  a {
    color: black;
    font-style: normal;
  }
</style>
