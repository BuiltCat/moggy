<template>
    <div class="playlistinfo layout clearifx">
        <div class="clearfix">
            <div class="avatar">
                <img :src="song.al.picUrl" alt>
                <a class="play" @click="addSong(song.id)">播放</a>
            </div>
            <div class="info">
                <h2>&gt; {{ song.name }}</h2>
                <div class="introduce">
                    <p>
                        歌手：
                        <span v-for="(n,index) in song.ar" :key="index">{{ n.name }}</span>
                    </p>
                    <p>所属专辑：{{ song.al.name }}</p>
                    <ul>
                        <li v-for="(l,i) in lyric" :key="i">{{ l.lyr }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { get } from "../utils/model";
import { getLyric } from "../utils/tool";
export default {
    data() {
        return {
            song: {
                al:{
                    picUrl: ''
                }
            },
            lyric: []
        };
    },
    mounted() {
        (async () => {
            const id = this.$router.currentRoute.params.id;
            const res = await get("/song/detail?ids=", id);
            const lyric = await get("/lyric?id=", id);
            if (res.code === 200) {
                this.song = res.songs[0];
            }
            if (lyric.code === 200) {
                if (
                    lyric.hasOwnProperty("uncollected") ||
                    lyric.hasOwnProperty("nolyric")
                ) {
                    this.lyric = getLyric("[00:00.000] 暂无歌词\n");
                } else {
                    this.lyric = getLyric(lyric.lrc.lyric);
                }
            }
        })();
    },
    methods:{
        addSong(id) {
            this.$store.dispatch("addSong", {
                id: id
            });
        }
    }
};
</script>

<style>
</style>
