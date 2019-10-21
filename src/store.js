import Vue from 'vue'
import Vuex from 'vuex'
import { get } from './utils/model'
import { getLyric } from './utils/tool'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songs: [],
        ids: [],
        lyric: [],
        songNum: 0,
        currentTime: 0,
        duration: 0,
        audio: {},
        isPlay: true
    },
    getters: {

    },
    mutations: {
        getSongs(state, payload) {
            state.songs = payload.songs;
            state.ids = state.songs.map(song => {
                return song.id
            })
        },
        removeSong(state, payload){
            state.songs.splice(payload.id,1)
            state.ids = state.songs.map(song => {
                return song.id
            })
            if(payload.id < payload.songNum){
                state.songNum = payload.songNum - 1
            }else{
                state.songNum = payload.songNum
            }
        },
        addSong(state, payload) {
            state.songs = state.songs.concat(payload.songs);
            state.songNum = state.songs.length - 1;
            state.ids = state.songs.map(song => {
                return song.id
            })
        },
        getLyric(state, payload) {
            state.lyric = getLyric(payload.lyric)
        },
        changeSong(state, payload) {
            state.songNum = payload.num;
        },
        getCurrentTime(state, currentTime) {
            state.currentTime = currentTime.currentTime
        },
        getDuration(state, duration) {
            state.duration = duration.duration
        },
        getAudio(state, audio){
            state.audio = audio.audio
        },
        getIsPlay(state, isPlay){
            state.isPlay = isPlay.isPlay
        }
    },
    actions: {
        async getSongs(context, payload) {
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
                const res = await get('/song/detail?ids=', payload.id)
                if (res.code === 200) {
                    context.commit('addSong',
                        {
                            songs: res.songs
                        })
                }
            } else {
                context.commit('changeSong',
                    {
                        num: songLocate
                    })
            }
        },
        async getLyric(context, payload) {
            const res = await get('/lyric?id=', payload.id)
            if (res.code === 200) {
                if (res.hasOwnProperty('uncollected') || res.hasOwnProperty('nolyric')) {
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
        },
        getCurrentTime(context, currentTime) {
            context.commit('getCurrentTime',
                {
                    currentTime: currentTime.currentTime
                })
        },
        getDuration(context, duration) {
            context.commit('getDuration', {
                duration: duration.duration
            })
        },
        getAudio(context, audio){
            context.commit('getAudio', {
                audio: audio.audio
            })
        },
        getIsPlay(context, isPlay){
            context.commit('getIsPlay', {
                isPlay: isPlay.isPlay
            })
        }
    }
})
