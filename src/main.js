import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,
{
  // size:  'mini', // set element-ui default size
}
);

Vue.config.productionTip = false


new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
