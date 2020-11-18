import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
//librayry
import Vuebar from 'vuebar'
Vue.config.productionTip = false
Vue.use(Vuebar)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
