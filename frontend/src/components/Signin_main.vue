<template>
    <div>
      <h1>로그인</h1>
      <login></login>
      <el-button round @click="userSignUpWithGoogle">Sign in with Google</el-button>
      <h1 v-if="full_paths">{{ full_paths }}</h1>
    </div>
</template>

<script>
  import Login from './Signin'
  import { mapGetters } from 'vuex'

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
      },
      async get_next_path () {
        var full_path = await window.location.href;
        if (full_path.split('=%2F').length > 1) {
          full_path = '/' + full_path.split('=%2F')[1];
        } else full_path = '/';
        this.$store.state.path = full_path;
        this.full_paths = full_path;
      }
    },
    watch: {
      '$route': 'get_next_path'
    },
    mounted () {
      this.get_next_path();
    },
    components: {
      'login': Login
    }
  }
</script>

<style scoped>

</style>
