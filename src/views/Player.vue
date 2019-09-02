<template>
    <div class="moggy-player">
        <div class="header">
            <span class="iconfont icon-p-left" @click="previous"></span>
            <p class="title">{{song}}</p>
        </div>
        <div class="avatar">
            <img :src="picUrl" alt="歌曲图片">
        </div>
        <ul class="lyric">
            <li v-for="(lyr,index) in lyric" :key="index">{{lyr.lyr}}</li>
        </ul>
        <div class="progress clearfix">
            <span>{{currentTime}}</span>
            <span>{{duration}}</span>
            <div class="progress-bar">
                <div class="progress-inner" :style="progress"></div>
            </div>
        </div>
        <div></div>
    </div>
</template>
<script>
import store from "@/store"
import { mapState } from "vuex"
import defaultPicUrl from "@/assets/picUrl.jpg"
import { s_2_hs } from "../utils/tool"

export default {
    class: "moggy-player",
    mounted(){
    },
    computed: {
        ...mapState(["songs", "lyric", "songNum"]),
        song() {
            if (this.songs.length) {
                return this.songs[this.songNum].name;
            } else {
                return "当前未播放歌曲";
            }
        },
        singer() {
            if (this.songs.length) {
                return this.songs[this.songNum].ar
                    .map(key => {
                        return key.name;
                    })
                    .toString();
            } else {
                return "暂无";
            }
        },
        songUrl() {
            if (this.songs.length) {
                return this.getSongUrl(this.songs[this.songNum].id);
            } else {
                return "";
            }
        },
        picUrl() {
            if (this.songs.length) {
                return this.songs[this.songNum].al.picUrl;
            } else {
                return defaultPicUrl
            }
        },
        currentTime() {
            return s_2_hs(this.$store.state.currentTime)
        },
        duration() {
            return s_2_hs(this.$store.state.duration)
        },
        progress(){
            return {
                width: `${(this.$store.state.currentTime/this.$store.state.duration)*100}%`
            }
        }
    },
    methods:{
        previous(){
             this.$router.go(-1)
        }
    },store
}
</script>
<style>
.moggy-player#main{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 2;
    margin: 0px;
}
.moggy-player .header{
    height: 60px;
    line-height: 60px;
}
.moggy-player .header .iconfont{
    float: left;
    text-align: center;
    width: 60px;
    font-size: 36px;
    vertical-align: middle;
}
.moggy-player .header .title{
    vertical-align: middle;
    margin: 0 60px;
    font-size: 20px;
    color: #1d1d1d;
    font-weight: 400;
}
.moggy-player .avatar {
    padding: 40px;
}
.moggy-player .avatar img{
    width: 210px;
    border: 5px solid #f2f2f2;
}
.moggy-player .lyric{
    height: 200px;
    overflow: hidden;
}
.moggy-player .lyric li{
    height: 40px;
    line-height: 40px;
    color: #373737;
    font-weight: 400;
}
.moggy-player .progress span{
    float: right;
    width: 40px;
    font-size: 12px;
    vertical-align: middle;
    color: #999999;
}
.moggy-player .progress span:first-child{
    float: left;
}
.moggy-player .progress .progress-bar{
    background-color: #f2f2f2;
    height: 4px;
    margin: 0 40px;
    border-radius: 100px;
    transform: translateY(5px);
}
.moggy-player .progress .progress-inner{
    background-color: #42b983;
    height: 100%;
    width: 0;
}
</style>