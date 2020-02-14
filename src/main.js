import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/root.scss';
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);

/* using inview
import inview from 'vueinview';
Vue.use(inview);
*/

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
