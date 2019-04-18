import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayListInfo from './views/PlayListInfo.vue'
import PlayList from './views/PlayList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/playlistinfo/:id',
      name: 'playlistinfo',
      component: PlayListInfo
    }, {
      path: '/PlayList',
      name: 'PlayList',
      component: PlayList
    }
  ]
})
