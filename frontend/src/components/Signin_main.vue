<template>
    <div>
      <h1>로그인</h1>
      <login></login>
      <el-button round @click="userSignUpWithGoogle">Sign in with Google</el-button>
    </div>
</template>

<script>
  import Login from './Signin'
  export default {
    name: "Login",
    data () {
      return {
        watching_url : window.location.href,
        full_paths : ''
      }
    },
    methods: {
      async userSignUpWithGoogle () {
        await this.$store.dispatch('signInWithGoogle', this.full_paths)
      }
    },
    mounted () {
      var full_path = window.location.href;
      if (full_path.split('=%2F').length > 1) {
        full_path = '/' + full_path.split('=%2F')[1];
      } else full_path = '';
      this.$store.state.path = full_path;
      this.full_paths = full_path
    },
    components: {
      'login': Login
    }
  }
</script>

<style scoped>

</style>
