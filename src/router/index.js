import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// 電表類
import electric from '../views/electric.vue';
// 水表類
import water from '../views/water.vue';
// 瓦斯表類
import gas from '../views/gas.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/electric',
    name:'electric',
    component:electric
  },
  {
    path:'/water',
    name:'water',
    component:water
  },
  {
    path:'/gas',
    name:'gas',
    component:gas
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
