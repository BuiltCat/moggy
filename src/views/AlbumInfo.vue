<template>
    <div class="playlistinfo layout clearifx">
        <div class="clearfix">
            <div class="avatar">
                <img :src="album.picUrl" alt>
            </div>
            <div class="info">
                <h2>{{ album.name }}</h2>
                <p class="introduce">{{ album.description }}</p>
            </div>
        </div>
        <p class="title">
            歌曲列表
            <span class="trackCount">{{ songs.length }}首歌</span>
        </p>
        <ul class="play-list">
            <li @click="addAll">播放全部</li>
            <li @click="addSong(song.id)" v-for="(song,index) in songs" :key="index" class="clearfix">
                <span class="avatar"><img :src="song.al.picUrl" alt="picUrl"></span>
                <p>
                    <span>
                        {{song.name}}
                    </span>
                    <span>
                        <router-link v-for="(ar,index) in song.ar" :key="index" :to="{ name: 'SingerInfo', params: { id: ar.id }}">
                            {{ar.name}}
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'AlbumInfo', params: { id: song.al.id }}">
                            {{song.al.name}}
                        </router-link>
                    </span>
                </p>
            </li>
        </ul>
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
