import Vue from 'vue'
import VueRouter from 'vue-router';

import routes from './router/index';
import 'normalize.css';
import '@/style/base.scss';
import './plugins/element';
import App from './App.vue'

Vue.use(VueRouter);
const router = new VueRouter(routes);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
