import Vue from 'vue'
import VueRouter from 'vue-router'
import routeList from "./routes";

// routes
const routes = [...routeList];

console.log(routes)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base:'/static/sm/',
  routes
})

export default router
