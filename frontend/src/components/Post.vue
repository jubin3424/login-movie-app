<template>
    <div style="width: 80%; margin: auto;">
      <h1>Posts</h1>
      <div v-if="posts.length > 0">
      <table style="width: 90%; margin: auto;">
        <tr>
          <td style="background-color: lightgray" width="130">User</td>
          <td style="background-color: lightsteelblue">Title</td>
          <!--<td style="background-color: lightsalmon">Description</td>-->
          <td style="background-color: lightyellow" width="200">When</td>
          <td style="background-color: lightgoldenrodyellow" width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts">
          <td v-if="post.written_by">{{ post.written_by }}</td>
          <td v-else>Anonymous</td>
          <td>
            <router-link :to="{ name: 'PostDetail', params: { id:post._id }}">{{ post.title }}</router-link></td>
          <!--<td>{{ post.description }}</td>-->
          <td>{{ post.created_at.split('T')[0] }} {{ post.created_at.split('T')[1].slice(0,5) }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link>
            <span @click="deletePost(post._id)">Delete</span>
          </td>
        </tr>
      </table>
        <br>
      </div>
      <div v-else>
        <i class="el-icon-loading" style="font-size: 2rem;"></i>
        <h4>게시글을 불러오고 있습니다..</h4>
      </div>
      <el-button type="success"><router-link to="/newpost">Write</router-link></el-button>

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
