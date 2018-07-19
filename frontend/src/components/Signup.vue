<template>
  <div>
  <h1>Sign Up</h1>
    <el-row>
      <el-col :span="12" :offset="6">
  <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <!--<el-form-item label="UserId" prop="userID">-->
    <!--<el-input v-model="ruleForm.userID"></el-input>-->
    <!--</el-form-item>-->
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email" v-on:keyup.enter.native="userSignUp"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" auto-complete="off" v-on:keyup.enter.native="userSignUp"></el-input>
    </el-form-item>
    <el-form-item label="PasswordConfirm" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" v-on:keyup.enter.native="userSignUp"></el-input>
    </el-form-item>
    <!--<el-form-item label="PhoneNumber" prop="number">-->
    <!--<el-input v-model="ruleForm.number" placeholder="'-'는 제외하고 입력."></el-input>-->
    <!--</el-form-item>-->
    <el-form-item>
      <el-button type="primary" @click.prevent="userSignUp">Submit</el-button>
    </el-form-item>
  </el-form>
        <br>
        <h2 v-model="alert">{{ error }}</h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
      name: "Signup",
      data () {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          callback();
        }
      };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Please input the password again'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('Two inputs don\'t match!'));
          } else {
            callback();
          }
        };
          return {
            alert: false,
            ruleForm: {
              // userID: '',
              email: '',
              pass: '',
              checkPass: '',
              // number: ''
            },
            rules: {
              email: [
                { required: true, trigger: 'blur' }
              ],
              pass: [
                { validator: validatePass, trigger: 'blur'},
                { required: true }
              ],
              checkPass: [
                { validator: validatePass2, trigger: 'blur'},
                { required: true }
              ]
            }
        }
      },
    methods: {
        async userSignUp () {
          if (this.ruleForm.pass !== this.ruleForm.checkPass) {
            console.log('password 불일치')
          }
          await this.$store.dispatch('userSignUp', { email: this.ruleForm.email, password: this.ruleForm.pass })
        },
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
      error (value) {
        if (value) {
          this.alert = true
        }
      },
      alert (value) {
          if (!value) {
            this.$store.commit('setError', null)
          }
      }
    }
    }
</script>

<style scoped>

</style>
