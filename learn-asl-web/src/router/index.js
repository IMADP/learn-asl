import Vue from 'vue'
import Router from 'vue-router'
import LearnASL from '@/components/LearnASL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LearnASL',
      component: LearnASL
    }
  ]
})
