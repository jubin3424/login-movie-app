<template>
    <div>
      <h1>회원가입</h1>
      <el-button round><router-link to="/signup">Sign up with Email</router-link></el-button><br><br>
      <el-button round @click="userSignUpWithGoogle">Sign up with Google</el-button>
    </div>
</template>

<script>
  export default {
    name: "Signup_main",
    methods: {
      async userSignUpWithGoogle () {
        await this.$store.dispatch('signInWithGoogle')
      }
    }
  }
</script>

<style scoped>
  a {
    color: dimgrey;
  }
</style>
