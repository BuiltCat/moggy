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
export default {
    data(){
        return {
            banners: [],
            playlists: []
        }
    },
    mounted(){
        axios.get('http://localhost:3000/banner').then((res,rej)=>{
            this.banners = res.data.banners;
        })
        axios.get('http://localhost:3000/top/playlist?limit=10').then((res,rej)=>{
            this.playlists = res.data.playlists;
        })
    },
    components: {
        Banner,
        Playlist
    }
}
</script>
<style>
</style>
