import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/domain/Login'
import Viceri from '@/components/viceri/Viceri'
import Duvidas from '@/components/viceri/Duvidas'
import Suporte from '@/components/viceri/Suporte'
import Valores from '@/components/viceri/Valores'
import Cadastro from '@/components/domain/Cadastro'
import Squads from '@/components/organizacao/Squads'
import Squad from '@/components/organizacao/Squad'
import Tribos from '@/components/organizacao/Tribos'
import Tribo from '@/components/organizacao/Tribo'
import EasterEgg from '@/components/viceri/EasterEgg'
import Gerenciar from '@/components/domain/Gerenciar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/viceri', name: 'Viceri', component: Viceri },
    { path: '/tribos', name: 'Tribos', component: Tribos },
    { path: '/tribos/:name', name:'Tribo', component: Tribo},
    { path: '/tribos/squads/:id', name: 'Squad', component: Squad },
    { path: '/squads', name: 'Squads', component: Squads }, 
    { path: '/duvidas', name: 'Dúvidas', component: Duvidas },
    { path: '/suporte', name: 'Suporte', component: Suporte },
    { path: '/valores', name: 'Valores', component: Valores },
    { path: '/cadastro', name: 'Cadastro', component: Cadastro },
    { path: '/gerenciar', name: 'Gerenciar', component: Gerenciar },
    { path: '/easteregg', name: 'Easter Egg', component: EasterEgg }
  ]
})
