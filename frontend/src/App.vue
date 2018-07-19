<template>
  <div id="app">
    <div id="nav-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <el-menu-item index="1"><router-link to="home">Home</router-link></el-menu-item>
        <el-menu-item index="2" v-if="!isAuthenticated"><router-link to="signup_main">Sign Up</router-link></el-menu-item>
        <el-menu-item index="3" v-if="!isAuthenticated"><router-link to="signin_main">Sign In</router-link></el-menu-item>
        <el-menu-item index="3" v-if="isAuthenticated" @click="userSignOut">Sign Out</el-menu-item>
        <el-menu-item index="4"><router-link to="/movie">Movie List</router-link></el-menu-item>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>


  export default {
    data () {
      return {
        // appTitle: 'Awesome App',
        sidebar: false,
        activeIndex: '1',
      }
    },
    computed: {
      appTitle () {
        return this.$store.state.appTitle
      },
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      async userSignOut () {
        await this.$store.dispatch('userSignOut')
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  a {
    text-decoration: none;
  }

</style>
