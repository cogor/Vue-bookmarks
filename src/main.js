import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "DOMAIN",
  databaseURL: "URL",
  projectId: "ID",
  storageBucket: "BUCKET",
  messagingSenderId: "ID"
})
export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
