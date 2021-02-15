import Vue from 'vue'
import App from './App.vue'
import ForkeMeOnGithub from 'fork-me-on-github-vue';

Vue.use(ForkeMeOnGithub);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
