import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tribos from '@/components/organizacao/Tribos'
import Squads from '@/components/organizacao/Squads'
import Suporte from '@/components/viceri/Suporte'
import Login from '@/components/domain/Login'
import Viceri from '@/components/viceri/Viceri'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/viceri', name: 'Viceri', component: Viceri },
    { path: '/tribos', name: 'Tribos', component: Tribos },
    { path: '/squads', name: 'Squads', component: Squads },
    { path: '/suporte', name: 'Suporte', component: Suporte },
    { path: '/login', name: 'Login', component: Login }
  ]
})
