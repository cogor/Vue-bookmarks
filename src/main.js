import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.use(VueFire)
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "DOMAIN",
  databaseURL: "URL",
  projectId: "ID",
  storageBucket: "BUCKET",
  messagingSenderId: "ID"
})
export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
