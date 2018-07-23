<template>
  <div>
  <h1>{{ post.title }}</h1>
    <div class="container">
    <div style="text-align: right">{{ post.created_at }}</div><br>
    <div style="padding: 30px; width:80%; margin:auto; background-color: #E5E5E5">{{ post.description }}</div><br>

    <span>{{ post.written_by }}</span>
    </div>

    <el-button type="success" @click="$router.go(-1)">Back</el-button>
    <el-button type="default"><router-link to="/post">List</router-link></el-button>
  </div>
</template>

<script>
    export default {
      name: "PostDetail",
      data () {
        return {
          post: {}
        }
      },
      created () {
        var id = this.$route.params.id;
        this.$http.get(`/api/posts/${id}`)
          .then((response) => {
            this.post = response.data
          })
      }
    }
</script>

<style scoped>
.container {
  width:70%;
  margin: auto;
}
</style>
