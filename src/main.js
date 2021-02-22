import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import ForkeMeOnGithub from 'fork-me-on-github-vue';
import i18n from '@/plugins/i18n';
import VueI18n from "vue-i18n";

Vue.use(ForkeMeOnGithub);
Vue.use(VueI18n);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }
  i18n.locale = language
  next()
})

new Vue({
  i18n,
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
