<template>
  <div>
  <h1>Welcome to Movie App</h1>
    <h3 v-if="isAuthenticated">Hi! {{ getUserName.displayName }}</h3>
    <el-row>
        <el-col :span="12" :offset="6">
          It's a basic SPA<br>
          Firebase 기반 로그인 인증 구현</el-col>
      </el-row><br>
    <el-button type="primary" v-if="!isAuthenticated"><router-link to="/signup">Sign Up</router-link></el-button>
    <el-button type="success" v-if="!isAuthenticated"><router-link to="/signin">Sign In</router-link></el-button>
  </div>
</template>

<script>
  export default {
    name: "Landing",
    computed: {
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      },
      getUserName () {
        return this.$store.getters.getUserName
      }
    },
  }
</script>

<style scoped>

</style>
