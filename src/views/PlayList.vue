<template>
    <div class="page playlist clearfix layout">
        <figure v-for="(playitem, index) in playlists" :key="index">
             <router-link :to="{ name: 'playlistinfo', params: { id: playitem.id }}">
            <img :src="playitem.coverImgUrl" alt>
            <figcaption>
                <p class="playlist-article">
                   {{ playitem.name }}
                </p>
                <p>{{ playitem.creator.nickname }}</p>
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
                "?before=1503639064232&limit=35"
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
</style>
