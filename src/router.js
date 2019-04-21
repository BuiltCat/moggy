import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayListInfo from './views/PlayListInfo.vue'
import PlayList from './views/PlayList.vue'
import Top from './views/Top.vue'
import Search from './views/Search.vue'
import SingerInfo from './views/SingerInfo.vue'
import AlbumInfo from './views/AlbumInfo.vue'
import SongInfo from './views/SongInfo.vue'

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
    }, {
      path: '/Top/:id',
      name: 'Top',
      component: Top
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }, {
      path: '/SingerInfo/:id',
      name: 'SingerInfo',
      component: SingerInfo
    }, {
      path: '/AlbumInfo/:id',
      name: 'AlbumInfo',
      component: AlbumInfo
    }, {
      path: 'SongInfo/:id',
      name: 'SongInfo',
      component: SongInfo
    }
  ]
})
