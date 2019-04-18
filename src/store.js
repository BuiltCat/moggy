import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { get } from './utils/model'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    ids: [],
    lyric: [],
    songNum: 0
  },
  getters: {

  },
  mutations: {
    getSongs(state,payload) {
      state.songs = payload.songs;
      state.ids = state.songs.map(song => {
        return song.id
      })
    },
    addSong(state, payload) {
      state.songs = state.songs.concat(payload.songs);
      state.songNum = state.songs.length - 1;
      state.ids = state.songs.map(song => {
        return song.id
      })
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
    },
    changeSong(state, payload) {
      state.songNum = payload.num;
    }
  },
  actions: {
    async getSongs(context,payload) {
      const res = await get('/song/detail?ids=', payload.ids)
      if (res.code === 200) {
        context.commit('getSongs',
        {
          songs: res.songs
        })
      }
    },
    async addSong(context, payload) {
      const songLocate = this.state.ids.indexOf(payload.id)
      if (songLocate < 0) {
        const res = await get('/song/detail?ids=',payload.id)
        if (res.code === 200) {
          context.commit('addSong',
          {
            songs: res.songs
          })
        }
      }else{
        context.commit('changeSong',
          {
            num: songLocate
          })
      }
    },
    async getLyric(context, payload) {
      const res = await get('/lyric?id=', payload.id)
      if (res.code === 200) {
        if (res.hasOwnProperty('uncollected')||res.hasOwnProperty('nolyric')) {
          context.commit('getLyric',
            {
              lyric: '[00:00.000] 暂无歌词\n'
            })
        } else {
          context.commit('getLyric',
            {
              lyric: res.lrc.lyric
            })
        }
      }
    }
  }
})
