<template>
     <div class="playlistinfo layout clearifx">
        <div class="clearfix">
            <div class="avatar">
                <img :src="artist.picUrl" alt>
                <a class="play" @click="addAll">播放</a>
            </div>
            <div class="info">
                <h2>&gt; {{ artist.name }}</h2>
                <div class="introduce">
                    <p>{{ artist.briefDesc }}</p>
                </div>
            </div>
        </div>
        <p class="title">
            歌曲列表
            <span class="trackCount">{{ hotSongs.length }}首歌</span>
        </p>
        <table>
            <thead>
                <th></th>
                <th></th>
                <th>歌曲标题</th>
                <th>歌手</th>
                <th>专辑</th>
            </thead>
            <tbody>
                <tr v-for="(song,index) in hotSongs" :key="index">
                    <td>{{ index }}</td>
                    <td @click="addSong(song.id)">
                        <span class="iconfont icon-start"></span>
                    </td>
                    <td>
                        <router-link :to="{ name: 'SongInfo', params: { id: song.id }}">
                            {{ song.name }}
                        </router-link>
                    </td>
                    <td>
                        <router-link v-for="(ar,index) in song.ar" :key="index" :to="{ name: 'SingerInfo', params: { id: ar.id }}">
                            {{ar.name}}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'AlbumInfo', params: { id: song.al.id }}">
                            {{ song.al.name }}
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
            artist: [],
            hotSongs: []
        }
    },
    mounted(){
        (async ()=>{
            const res = await get('/artists?id=',this.$router.currentRoute.params.id);
            if(res.code === 200){
                this.artist = res.artist;
                this.hotSongs = res.hotSongs;
            }
        })()
    },
    methods:{
        addAll() {
            const ids = this.hotSongs.map(hotSong => {
                return hotSong.id;
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
