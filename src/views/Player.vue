<template>
    <div class="moggy-player" @mousedown="closeList">
        <div class="header">
            <span class="iconfont icon-p-left" @click="previous"></span>
            <p class="title">{{song}}</p>
        </div>
        <div class="avatar">
            <img :src="picUrl" alt="歌曲图片">
        </div>
        <ul class="lyric" ref="playerLyric">
            <li v-if="lyric[this.upTime-3]">{{lyric[this.upTime-3].lyr}}</li>
            <li v-if="lyric[this.upTime-3]">{{lyric[this.upTime-2].lyr}}</li>
            <li v-if="lyric[this.upTime-3]" class="active">{{lyric[this.upTime-1].lyr}}</li>
            <li v-if="lyric[this.upTime-3]">{{lyric[this.upTime].lyr}}</li>
            <li v-if="lyric[this.upTime-3]">{{lyric[this.upTime+1].lyr}}</li>
        </ul>
        <div class="progress clearfix">
            <span>{{currentTime}}</span>
            <span>{{duration}}</span>
            <div class="progress-bar">
                <div class="progress-inner" :style="progress"></div>
            </div>
        </div>
        <div class="tool">
            <div class="space">
            </div>
            <div class="prev" @click="prev">
                <span class="iconfont icon-up"></span>
            </div>
            <div class="play" @click="play">
                <span class="iconfont" :class="this.$store.state.isPlay?'icon-pause':'icon-play'"></span>
            </div>
            <div class="next"  @click="next">
                <span class="iconfont icon-down"></span>
            </div>
            <div class="space" @click="showList">
                <span class="iconfont icon-list"></span>
            </div>
        </div>
        <div ref="list" class="list" :class="isShowList?'show':'none'" >
            <p>
                <span class="song-name">歌曲列表</span>
                <span class="close">X</span>
            </p>
            <ul>
                <li v-if="songs.length == 0">列表没有歌曲</li>
                <li v-for=" (s, index) in songs" :key="s.id" :class="songNum==index?'active':''" @click="changeSong(index,$event)">
                    <span class="song-name">{{ s.name }}</span>
                    <span class="song-ar">-{{s.ar[0].name}}</span>
                    <span class="close"  @click="removeSong(index)">X</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import store from "@/store"
import { mapState } from "vuex"
import defaultPicUrl from "@/assets/picUrl.jpg"
import { s_2_hs } from "../utils/tool"

export default {
    class: "moggy-player",
    data () {
        return{
            upTime: 0,
            isShowList: false
        }
    },
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
            if(this.lyric.length != 0 && this.lyric[this.upTime].hasOwnProperty('time')){
                if(this.$store.state.currentTime >= this.lyric[this.upTime].time){
                    this.upTime += 1;
                }
            }
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
        },
        play(){
            this.$store.state.isPlay ? this.$store.state.audio.pause() : this.$store.state.audio.play();
            this.$store.dispatch("getIsPlay",{
                isPlay: !this.$store.state.isPlay
            });
            this.upTime = 0
        },
        prev(){
            const length = this.songs.length - 1;
            if (this.songNum === 0) {
                this.$store.commit("changeSong", {
                    num: length
                });
            } else {
                this.$store.commit("changeSong", {
                    num: this.songNum - 1
                });
            }
            this.$store.dispatch('getCurrentTime',{
                    currentTime: 0
                })
            this.upTime = 0
        },
        next(){
            const length = this.songs.length - 1;
            if (this.songNum === length) {
                this.$store.commit("changeSong", {
                    num: 0
                });
            } else {
                this.$store.commit("changeSong", {
                    num: this.songNum + 1
                });
            }
            this.$store.dispatch('getCurrentTime',{
                    currentTime: 0
                })
            this.upTime = 0
        },
        showList(){
            this.isShowList = true;
        },
        closeList(e){
            if(this.isShowList){
                if(e.path.indexOf(this.$refs.list) < 0){
                    this.isShowList = false; 
                }
            }
        },
        changeSong(id, event){
            console.log(event.target.class)
            if(event.target.className == 'close'){
                return;
            }
            this.$store.commit("changeSong",{
                num: id
            })
            this.upTime = 0
        },
        removeSong(id){
            this.$store.commit("removeSong",{
                id: id,
                songNum: this.$store.state.songNum
            })
            this.upTime = 0
        }
    },store

}
</script>
<style>
@keyframes showList {
    from { height: 0px; }
    to { height: 300px; }
}
@keyframes closeList {
    from { height: 300px; }
    to { height: 0px; }
}
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
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
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
    font-size: 14px;
}
.moggy-player .lyric li.active{
    color: #42b983;
}
.moggy-player .progress{
    margin: 20px 10px;
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
.moggy-player .tool div{
    display: inline-block;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    vertical-align: middle;
    border: 1px solid #f22b1e;
}
.moggy-player .tool .space{
    border: none;
    margin-left: 30px;
}
.moggy-player .tool .play{
    width: 66px;
    height: 66px;
    background: #f22b1e;
    border-radius: 33px;
    margin: 0 30px;
}
.moggy-player .tool div::after{
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}

.moggy-player .tool div .iconfont{
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
    color: #f22b1e;
}
.moggy-player .tool .play .iconfont{
    font-size: 36px;
    color: #fff;
}
.moggy-player .list{
    position: fixed;
    animation: 1s showList;
    width: 100%;
    height: 300px;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #42b983;

}
.moggy-player .list.show{
    display: block;
}
.moggy-player .list.none{
    display: none;
}

.moggy-player .list p{
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 20px;
    padding: 0 20px;
}
.moggy-player .list ul{
    overflow: scroll;
    height: 100%;
}
.moggy-player .list li{
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
}
.moggy-player .list  .song-name{
    float: left;
    font-size: 14px;
}
.moggy-player .list  .song-ar{
    float: left;
    font-size: 12px;
    color: #999;
}
.moggy-player .list  .close{
    float: right;
}
.moggy-player .list p .song-name{
    font-size: 16px;
    border: 1px solid #42b983;
    border-radius: 10px;
    padding: 4px 12px;
    margin: 5px 0;
}
.moggy-player .list p .close{
    margin: 10px 0;
    padding-left: 10px;
    border-left: 1px solid #ccc;
}
.moggy-player .list li.active .song-name{
    font-size: 18px;
    color: #42b983;
}
.moggy-player .list li.active .song-ar{
    font-size: 14px;
    color: #42b983;
}
</style>