// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import { store } from './store'
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import axios from 'axios'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios
// 이제 Vue앱에서 this.$http로 HTTP 요청을 할 수 있습니다.

var config = {
  apiKey: "AIzaSyAES7-opTGUip1N-Qv1fgDqXQXgMIW-lxk",
  authDomain: "presto-7de82.firebaseapp.com",
  databaseURL: "https://presto-7de82.firebaseio.com",
  projectId: "presto-7de82",
  storageBucket: "presto-7de82.appspot.com",
  messagingSenderId: "374685468497"
};
firebase.initializeApp(config);

const unsubscribe = firebase.auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
      components: {App},
      template: '<App/>',
      async created () {
        if (firebaseUser) {
          await store.dispatch('autoSignIn', firebaseUser)
        }
      }
    })
    unsubscribe()
  })
