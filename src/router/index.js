import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CameraView from '../views/CameraView.vue'
import RamleeView from '../views/RamleeView.vue'
import NoDetect from '../views/NoDetect.vue'
import SalomaView from '../views/SalomaView.vue'
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/camera',
    name: 'camera',
    component: CameraView
  },
  {
    path: '/pramlee',
    name: 'pramlee',
    component: RamleeView
  },
  {
    path: '/saloma',
    name: 'saloma',
    component: SalomaView
  },
  {
    path: '/no-detect',
    name: 'nodetect',
    component: NoDetect
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router