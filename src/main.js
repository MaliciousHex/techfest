// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint semi: ["error", "never"] */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)
/* eslint-disable */
import store from './store'

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})