import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "AIzaSyAj0Oa_laTChAEfOcTdO_T0ZJq95LsVJRE",
  authDomain: "vue-bookmarks-r2d2.firebaseapp.com",
  databaseURL: "https://vue-bookmarks-r2d2.firebaseio.com",
  projectId: "vue-bookmarks-r2d2",
  storageBucket: "vue-bookmarks-r2d2.appspot.com",
  messagingSenderId: "812613136029"
})
export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
