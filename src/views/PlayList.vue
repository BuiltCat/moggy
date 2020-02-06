<template>
    <div class="page playlistpage layout">
        <figure v-for="(playitem, index) in playlists" :key="index">
             <router-link :to="{ name: 'playlistinfo', params: { id: playitem.id }}">
            <img v-lazy="playitem.coverImgUrl" alt>
            <span class="iconfont icon-play"> {{ playitem.playCount > 10000 ? `${parseInt(playitem.playCount/10000)}万`:playitem.playCount  }} </span>
            <figcaption>
                <p class="playlist-article">
                   {{ playitem.name }}
                </p>
            </figcaption>
            </router-link>
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
                "?limit=39"
            );
            window.addEventListener('scroll',this.handleScroll)
            if(res.code === 200){
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
.playlistpage figure{
    position: relative;
    display: inline-block;
    width: 30%;
    height: 150px;
    padding: 10px;
}
.playlistpage .playlist-top3{
    margin: 20px 0;
}
.playlistpage .playlist-top3 .rank{
    text-align: left;
    border-top: 1px solid #42b983;
    border-left: 1px solid #42b983;
    color: #42b983;
}
.playlistpage figure img{
    width: 100px;
    border-radius: 10px;
}
.playlistpage figure .iconfont{
    position: absolute;
    text-align: right;
    width: 100px;
    height: 100px;
    font-size: 12px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #fff;
    top: 10px;
    left: 10px;
    background: rgba(85,85,85,0.1);
    padding:2px 5px 0 0; 
}
.playlistpage figure .playlist-article{
    display: inline-block;
    margin: 0;
    width: 100px;
    height: 40px;
    overflow: hidden;
    color: #555;
    font-size: 14px;
}
</style>
