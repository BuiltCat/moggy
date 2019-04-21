<template>
    <div class="page playlist clearfix layout">
        <figure v-for="(playitem, index) in playlists" :key="index">
            <img :src="playitem.coverImgUrl" alt>
            <figcaption>
                <p class="playlist-article">
                    <router-link
                        :to="{ name: 'playlistinfo', params: { id: playitem.id }}"
                    >{{ playitem.name }}</router-link>
                </p>
                <p>by: {{ playitem.creator.nickname }}</p>
            </figcaption>
        </figure>
    </div>
</template>
<script>
import { get } from "../utils/model";
export default {
    name: "playlist",
    data(){
        return {
            playlists: []
        }
    },
    mounted() {
        (async () => {
            const res = await get(
                "/top/playlist/highquality",
                "?before=1503639064232&limit=35"
            );
            window.addEventListener('scroll',this.handleScroll)
            if(res.code === 200){
                console.log( res.playlists)
                this.playlists = res.playlists;
            }
        })();
    },
    methods:{
        handleScroll(){
            (async()=>{
                if(document.documentElement.scrollTop + window.innerHeight >=document.documentElement.offsetHeight){
                    
                    const res = await get(
                        "/top/playlist/highquality",
                        `?before=${this.playlists[this.playlists.length-1].updateTime}&limit=1000`
                    );
                    if(res.code === 200){
                        this.playlists = this.playlists.concat(res.playlists);
                    }

                }
            })()
        }
    }
};
</script>
<style>
.playlist.page{
    margin-top: 30px;
}
.playlist .playlist-title {
    margin: 30px 10px;
    border-bottom: 2px solid #42b983;
}
.playlist h2 {
    text-align: left;
    margin-right: 30px;
}
.playlist .playlist-title a {
    float: right;
    width: 30px;
}
.playlist .playlist-article {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.playlist figure {
    display: inline-block;
    width: 200px;
    margin-bottom: 20px;
}
.playlist a {
    color: #000;
    text-decoration: none;
}
.playlist figure img {
    width: 100px;
}
</style>
