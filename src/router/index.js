import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from "@/views/NotFound";
import StartPage from "@/views/StartPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/start',
    name: 'blank',
    component: StartPage
  },
  {
    path: '/startPage',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: "*",
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
