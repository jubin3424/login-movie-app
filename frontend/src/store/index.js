import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appTitle: 'My Awesome App',
    user: null,
    error: null,
    loading: false,
    login_error: false,
    path: '',
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', {email: firebaseUser.user.email})
          commit('setLoading', false)
          commit('setError', null)
          router.push('/home')
        })
    },
    async signInWithGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
        .then((firebaseUser) => {
          this.state.user = firebaseUser.user
          // router.push(this.state.path)
          window.open(this.state.path, "_self")
        })
        .catch(err => alert(err))
    },
    async userSignIn ({commit}, payload) {
      await commit('setLoading', true)
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', {email: firebaseUser.user.email})
          commit('setLoading', false)
          commit('setError', null)
          // router.push(this.state.path)
          // window.location.reload()
          // var addr = window.location.hostname
          window.open(this.state.path, "_self")
          // this.$store.state.login_
          // error = false
        })
        .catch(error => {
          commit('setError', error.message)
          commit('setLoading', false)
          // this.$store.state.login_error = true
          if (error.code === 'auth/wrong-password')
            alert('비밀번호가 틀렸습니다.')
          else
            alert('존재하지 않는 아이디입니다.')
        })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
    },
    async userSignOut ({commit}) {
      await confirm('로그아웃 하시겠습니까?')
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    getUserName () {
      return firebase.auth().currentUser
    }
  }
})
