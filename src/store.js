import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { get } from './utils/model'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    lyric: []
  },
  getters: {

  },
  mutations: {
    getSongs(state,payload) {
      state.songs = payload.songs;
    },
    getLyric(state, payload) {
      const lyric = new Array();
      const tempLyric = payload.lyric.split('\n');
      tempLyric.forEach(element => {
        const time = element.substring(element.indexOf("[") + 1, element.indexOf("]")).split(':');
        lyric.push({
          time: parseFloat(time[0]*60)+parseFloat(time[1]),
          lyr: element.substring(element.indexOf("]") + 1, element.length)
        })
      });
      state.lyric = lyric;
    }
  },
  actions: {
    async getSongs(context) {
      const res = await get('/song/detail?ids=',[347230,405998841,33894312,1356981584].toString())
      if (res.code === 200) {
        context.commit('getSongs',
        {
          songs: res.songs
        })
      }
    },
    async getLyric(context, payload) {
      const res = await get('/lyric?id=', payload.id)
      if (res.code === 200) {
        context.commit('getLyric',
          {
            lyric: res.lrc.lyric
          })
      }
    }
  }
})
