<template>
  <div>
    <div class="login-box">
    <el-row>
      <el-col>
        <el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm" style="margin: auto; width:350px;">
          <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email" v-on:keyup.enter.native="userSignIn"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off" v-on:keyup.enter.native="userSignIn"></el-input>
          </el-form-item>
          <el-form-item>
          </el-form-item>
          <el-button type="primary" @click.prevent="userSignIn">Sign In</el-button>
        </el-form>
        <br>
        <!--<div @login_error="alarm"></div>-->
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Signin",
      data () {
          return {
            ruleForm: {
              email: '',
              pass: '',
              checkPass: '',
            },
            watching_url : window.location.href,
            full_paths : ''
          }
      },
      methods: {
          async userSignIn () {
            await this.$store.dispatch('userSignIn', { email: this.ruleForm.email, password: this.ruleForm.pass })
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
      computed: {
        error () {
          return this.$store.state.error
        },
        loading () {
          return this.$store.state.loading
        }
      },
      watch: {
        '$route': 'get_next_path',
        error(value) {
          if (value) {
            this.alert = true
          }
        },
        alert(value) {
          if (!value) {
            this.$store.commit('setError', null)
          }
        }
      }
    }
</script>

<style scoped>

</style>
