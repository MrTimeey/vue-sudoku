import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import NotFound from "@/views/NotFound";
import StartPage from "@/views/StartPage";
import GamePage from "@/views/GamePage";
import ResultPage from "@/views/ResultPage";
import i18n from '../plugins/i18n'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`,
    name: 'blank',
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'home',
        redirect: `/${i18n.locale}/startPage`,
      },
      {
        path: 'startPage',
        name: 'StartPage',
        component: StartPage
      },
      {
        path: 'game',
        name: 'GamePage',
        component: GamePage,
        beforeEnter: requireGameStarted
      },
      {
        path: '/game',
        name: 'ResultPage',
        component: ResultPage,
        beforeEnter: requireGameStarted
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

function requireGameStarted (to, from, next) {
  if (store.state.game.sudokuBoard !== undefined) {
    next()
  } else {
    next({name:'StartPage'})
  }
}

export default router
