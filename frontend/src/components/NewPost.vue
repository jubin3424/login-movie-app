<template>
    <div>
      <el-row>
      <el-form style="width: 400px; margin: auto;">
        <legend><h2>New Post</h2></legend>
        <el-form-item label="Title">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="description" :autosize="{ minRows: 10 }"></el-input>
        </el-form-item>

        <el-button @click="addPost">Submit</el-button>
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
          description: ''
        }
      },
      methods: {
        addPost () {
          this.$http.post('/api/posts/new', {title: this.title, description: this.description })
            .then((response) => {
              alert(response.data.message)
              this.$router.push({ name: 'Post' })
            })
            .catch((response) => {
              alert('오류가 발생했습니다')
            })
        }
      }
    }
</script>

<style scoped>

</style>
