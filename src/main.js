import "bootswatch/dist/darkly/bootstrap.min.css";
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import IconsPlugin from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
