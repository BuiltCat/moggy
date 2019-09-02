<template>
    <div class="playlistinfo layout clearifx">
        <div class="clearfix">
            <div class="avatar">
                <img :src="album.picUrl" alt>
                <a class="play" @click="addAll">播放</a>
            </div>
            <div class="info">
                <h2>&gt; {{ album.name }}</h2>
                <div class="introduce">
                    <p>{{ album.description }}</p>
                </div>
            </div>
        </div>
        <p class="title">
            歌曲列表
            <span class="trackCount">{{ songs.length }}首歌</span>
        </p>
        <table>
            <thead>
                <th></th>
                <th></th>
                <th>歌曲标题</th>
                <th>歌手</th>
            </thead>
            <tbody>
                <tr v-for="(song,index) in songs" :key="index">
                    <td>{{ index }}</td>
                    <td @click="addSong(song.id)">
                        <span class="iconfont icon-start"></span>
                    </td>
                    <td>
                        <router-link :to="{ name: 'SongInfo', params: { id: song.id }}">
                            {{song.name}}
                        </router-link>
                    </td>
                    <td>
                        <router-link v-for="(ar,index) in song.ar" :key="index" :to="{ name: 'SingerInfo', params: { id: ar.id }}">
                            {{ar.name}}
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { get } from "../utils/model"
export default {
    data(){
        return {
            album: [],
            songs: []
        }
    },
    mounted(){
        (async ()=>{
            const res = await get('/album?id=',this.$router.currentRoute.params.id);
            if(res.code === 200){
                this.album = res.album;
                this.songs = res.songs;
            }
        })()
    },
    methods:{
        addAll() {
            const ids = this.songs.map(song => {
                return song.id;
            });
            this.addPlayList(ids);
        },
        addSong(id) {
            this.$store.dispatch("addSong", {
                id: id
            });
        },
        addPlayList(ids) {
            this.$store.dispatch("getSongs", {
                ids: ids
            });
        }
    }
}
</script>

<style>

</style>
