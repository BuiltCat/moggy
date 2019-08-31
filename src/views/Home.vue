<template>
  <div class="home layout">
      <Banner :banners="banners"></Banner>
      <Playlist :playlists="playlists"></Playlist>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "@/components/Banner";
import Playlist from "@/components/Playlist";
import { get } from "@/utils/model"
export default {
    data(){
        return {
            banners: [],
            playlists: []
        }
    },
    mounted(){
        (async ()=>{
           const banners = await get('/banner','');
           if(banners.code === 200){
               this.banners = banners.banners;
           }
           const playlists = await get('/top/playlist','?limit=10');
           if(playlists.code === 200){
               this.playlists = playlists.playlists;
           }
        })()
    },
    components: {
        Banner,
        Playlist
    }
}
</script>
<style>
</style>
