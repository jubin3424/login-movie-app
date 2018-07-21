<template>
  <div>
    <el-row>
      <el-form style="width: 400px; margin: auto;">
        <legend><h2>Edit Post</h2></legend>
        <el-form-item label="Title">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="description" :autosize="{ minRows: 10 }"></el-input>
        </el-form-item>

        <el-button @click="editPost">Submit</el-button>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "NewPost",
    data () {
      return {
        title: '',
        description: '',
        id: ''
      }
    },
    mounted () {
      this.id = this.$route.params.id
      this.$http.get(`/api/posts/${this.id}`)
        .then((response) => {
          this.title = response.data.title
          this.description = response.data.description
        })
    },
    methods: {
      editPost () {
        this.$http.put('/api/posts/edit/' + this.id, {id: this.id, title: this.title, description: this.description })
          .then((response) => {
            alert(response.data.message)
            this.$router.push({ name: 'Post' })
          })
          .catch((response) => {
            // alert('오류가 발생했습니다')
          })
      }
    }
  }
</script>

<style scoped>

</style>
