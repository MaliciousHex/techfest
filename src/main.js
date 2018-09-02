// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint semi: ["error", "never"] */
import Vue from 'vue'
import router from './router'
import App from './components/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // components: { App },
  // template: '<App/>',
})
