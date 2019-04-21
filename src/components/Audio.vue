<template>
    <div class="audio">
        <audio :src="songUrl" ref="audio" autoplay></audio>
        <div class="audio-controls clearfix">
            <div @click="play" class="audio-avatar">
                <img :src="picUrl">
                <span class="iconfont" :class="this.isPlay?'icon-pause':'icon-start'"></span>
            </div>
            <div class="audio-info">
                <p>{{ song }} - {{ singer }}</p>
                <p>{{ s_2_hs(currentTime) }} / {{ s_2_hs(duration) }}</p>
                <div @click="progress" class="progress-bar">
                    <div class="inline-bar" :style="progressWidth"></div>
                </div>
            </div>
            <ul class="audio-operation">
                <li @click="prev">
                    <span class="iconfont icon-prev"></span>
                </li>
                <li>
                    <span class="iconfont icon-spot"></span>
                </li>
                <li @click="next">
                    <span class="iconfont icon-next"></span>
                </li>
                <li>
                    <div class="sound">
                        <div class="sound-tool" @click="volume">
                            <div :style="volumeHeight"></div>
                        </div>
                    </div>
                    <span class="iconfont icon-sound"></span>
                </li>
                <li>
                    <span @click="lyricPanel = !lyricPanel" class="iconfont icon-list"></span>
                    <div v-show="lyricPanel" class="lyric-tool clearfix">
                        <ul>
                            <li>播放列表</li>
                            <li
                                v-for="(song,index) in songs"
                                :key="index"
                                @click="$store.commit('changeSong',{
                    num: index
                });"
                            >
                                <p class="active" v-if="songNum === index">{{ song.name }}</p>
                                <p v-else>{{ song.name }}</p>
                            </li>
                        </ul>
                        <ul ref="lyc">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li v-for="(lyr,index) in lyric" :key="index">
                                <p class="active" v-if="isLyric(index,lyr,currentTime)">{{ lyr.lyr}}</p>
                                <p v-else>{{lyr.lyr}}</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="webapp-controls clearfix">
            <div :class="[opList?'opList':'']" class="panel-tool">
                <div class="button-group">
                    <button @click="showList" :class="[listShow ? '':'active']">列表</button>
                    <button @click="showLyc"  :class="[listShow ? 'active':'']">歌词</button>
                </div>
                <ul v-show="listShow">
                    <li
                        v-for="(song,index) in songs"
                        :key="index"
                        @click="$store.commit('changeSong',{
                    num: index
                });">
                        <p class="active" v-if="songNum === index"><img :src="song.al.picUrl" alt=" 图片">{{ song.name }}</p>
                        <p v-else><img :src="song.al.picUrl" alt=" 图片">{{ song.name }}</p>
                    </li>
                </ul>
                <ul v-show="!listShow" ref="lyc">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li v-for="(lyr,index) in lyric" :key="index">
                        <p class="active" v-if="isLyric(index,lyr,currentTime)">{{ lyr.lyr}}</p>
                        <p v-else>{{lyr.lyr}}</p>
                    </li>
                </ul>
            </div>
            <div @click="play" class="audio-avatar">
                <img :src="picUrl">
                <span class="iconfont" :class="this.isPlay?'icon-pause':'icon-start'"></span>
            </div>
            <div class="audio-info" @click="opList = !opList">
                <p>{{ song }} - {{ singer }}</p>
                <p>{{ s_2_hs(currentTime) }} / {{ s_2_hs(duration) }}</p>
            </div>
            <div class="audio-operation">
                <span @click="next" class="iconfont icon-next"></span>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";
import { get } from "../utils/model";
export default {
    class: "audio",
    data() {
        return {
            isPlay: true,
            currentTime: "",
            duration: 0,
            progressWidth: {
                width: 0
            },
            volumeHeight: {
                height: "90px"
            },
            lyricPanel: false,
            upTime: 0,
            listShow: true,
            opList: false
        };
    },
    computed: {
        ...mapState(["songs", "lyric", "songNum"]),
        song() {
            if (this.songs.length) {
                return this.songs[this.songNum].name;
            } else {
                return "";
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
                return "";
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
                return "";
            }
        }
    },
    watch: {
        currentTime(nval) {
            this.progressWidth.width = `${(700 * this.currentTime) /
                this.duration}px`;
            if(this.lyric.length !== 0 && this.lyric[this.upTime].hasOwnProperty('time')){
                if (this.lyric[this.upTime].time < nval) {
                    this.upTime += 1;
                    this.$refs.lyc.scrollTop += 20;
                }
                if (this.lyric[this.upTime].time > nval) {
                    this.upTime -= 1;
                    this.$refs.lyc.scrollTop -= 20;
                }
            }
        }
    },
    mounted() {
        this.$refs.audio.addEventListener(
            "timeupdate",
            function() {
                this.currentTime = this.$refs.audio.currentTime;
            }.bind(this)
        );
        this.$refs.audio.addEventListener(
            "loadeddata",
            function() {
                this.duration = this.$refs.audio.duration;
                if (isNaN(this.duration)) {
                    this.duration = 0;
                }
            }.bind(this)
        );
        this.$refs.audio.addEventListener(
            "ended",
            function() {
                this.next();
            }.bind(this)
        );
    },
    methods: {
        getSongUrl(id) {
            this.$store.dispatch("getLyric", {
                id
            });
            return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
        },
        play() {
            this.isPlay ? this.$refs.audio.pause() : this.$refs.audio.play();
            this.isPlay = !this.isPlay;
        },
        prev() {
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
            this.currentTime = 0;
        },
        next() {
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
            this.currentTime = 0;
        },
        progress(e) {
            this.$refs.audio.currentTime =
                (this.$refs.audio.duration * e.offsetX) / 700;
            if (this.isPlay === false) {
                this.$refs.audio.play();
                this.isPlay = !this.isPlay;
            }
        },
        volume(e) {
            const val = (90 - e.offsetY) / 90;
            this.volumeHeight.height = `${90 * val}px`;
            this.$refs.audio.volume = val;
        },
        s_2_hs(s) {
            let s_m = parseInt(s / 60);
            let s_s = parseInt(s % 60);
            return `${this.PrefixInteger(s_m, 2)}:${this.PrefixInteger(
                s_s,
                2
            )}`;
        },
        PrefixInteger(num, length) {
            return (Array(length).join("0") + num).slice(-length);
        },
        isLyric(index, lyr, currentTime) {
            if (index < this.lyric.length) {
                if (
                    lyr.time <= currentTime &&
                    this.lyric[index + 1].time > currentTime
                ) {
                    return true;
                }
            }
            return false;
        },
        showList(){
            this.listShow = true;
        },
        showLyc(){
            this.listShow = false;
        }
    },
    store
};
</script>
<style>
.audio {
    position: fixed;
    border-top: 2px solid #42b983;
    left: 0;
    right: 0;
    bottom: 0;
    background: #83a4d4; /* fallback for old browsers */
    color: #fff;
    height: 60px;
}
.audio .audio-controls {
    margin: 0 auto;
    width: 1000px;
    text-align: left;
}
.audio .audio-avatar {
    position: relative;
    display: inline-block;
}
.audio .audio-avatar::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.audio .audio-avatar img {
    width: 60px;
}
.audio .audio-avatar .iconfont {
    position: absolute;
    font-size: 60px;
    line-height: 60px;
    left: 0;
    display: none;
    color: #42b983;
}
.audio .audio-avatar:hover::before {
    background: rgba(244, 244, 244, 0.8);
}
.audio .audio-avatar:hover .iconfont {
    display: inline-block;
}
.audio .audio-info {
    display: inline-block;
    width: 700px;
    vertical-align: top;
    padding: 0 10px;
}
.audio .audio-info p {
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    text-align: left;
}
.audio .audio-info p:first-child {
    font-size: 16px;
}
.audio .progress-bar {
    background: #fff;
    margin-top: 5px;
    height: 11px;
    border: 5px solid #83a4d4;
    cursor: pointer;
}
.audio .progress-bar .inline-bar {
    height: 1px;
    background: #42b983;
}
.audio .audio-operation {
    display: inline-block;
    height: 60px;
    vertical-align: top;
}
.audio .audio-operation::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
.audio .audio-operation > li {
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    position: relative;
}
/* .audio .audio-operation li:hover{
    color: #42b983;
} */
.audio .audio-operation .iconfont {
    font-size: 30px;
}
.audio .audio-operation > li:last-child {
    padding-left: 10px;
}
.audio .audio-operation li:hover .sound {
    display: inline;
}
.audio .audio-operation .sound {
    display: none;
    position: absolute;
    background: #fff;
    width: 30px;
    height: 100px;
    bottom: 40px;
    border: 1px solid #2c3e50;
}
.audio .audio-operation .sound::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 11px;
    background: #fff;
    transform: rotate(45deg);
    left: 8px;
    bottom: -7px;
    z-index: -1;
}
.audio .audio-operation .sound-tool {
    width: 5px;
    height: 90px;
    background: #2c3e50;
    margin: 5px auto;
}
.audio .audio-operation .sound-tool::before {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: bottom;
}
.audio .audio-operation .sound-tool div {
    display: inline-block;
    background: #42b983;
    width: 5px;
    vertical-align: bottom;
}
.audio .audio-operation .lyric-tool {
    position: absolute;
    cursor: default;
    border: 1px solid #42b983;
    width: 1000px;
    height: 200px;
    color: #2c3e50;
    background: #fff;
    bottom: 50px;
    text-align: center;
    right: -80px;
}
.audio .audio-operation .lyric-tool ul:first-child {
    float: left;
    text-align: left;
    width: 400px;
    list-style: none;
    overflow-y: auto;
    height: 100%;
}
.audio .audio-operation .lyric-tool ul:first-child p {
    cursor: pointer;
    padding-left: 10px;
    border-bottom: 1px solid #2c3e50;
    padding: 5px;
}
.audio .audio-operation .lyric-tool ul:first-child p.active {
    color: #fff;
    background: #42b983;
    opacity: 0.4;
}
.audio .audio-operation .lyric-tool ul:first-child li:hover {
    background: #42b983;
    opacity: 0.4;
}
.audio .audio-operation .lyric-tool ul:first-child li:active {
    background: #42b983;
    opacity: 0.1;
}
.audio .audio-operation .lyric-tool ul:first-child li:first-child {
    font-size: 1.2rem;
    background: #42b983;
    color: #fff;
    border-bottom: none;
}
.audio .audio-operation .lyric-tool ul:first-child li:last-child {
    border-bottom: none;
}
.audio .audio-operation .lyric-tool ul:last-child {
    margin-left: 400px;
    list-style: none;
    overflow-y: auto;
    height: 100%;
    border-left: 1px solid #42b983;
}
.audio .audio-operation .lyric-tool ul:last-child li {
    height: 20px;
    line-height: 20px;
}
.audio .audio-operation .lyric-tool .active {
    color: #42b983;
}
@media screen and (max-width: 1000px) {
    .audio-controls {
        display: none;
    }
    .webapp-controls {
        position: relative;
        text-align: left;
    }
    .webapp-controls .audio-avatar {
        display: inline-block;
        width: 60px;
    }
    .webapp-controls .audio-info {
        display: inline-block;
        width: calc(100% - 120px);
        font-size: 10px;
    }
    .webapp-controls .audio-info p {
        height: 30px;
        line-height: 30px;
    }
    .webapp-controls .audio-operation {
        display: inline-block;
        text-align: center;
        width: 60px;
        line-height: 60px;
        font-size: 10px;
    }
    .webapp-controls .panel-tool {
        display: none;
        height: 500px;
        background: #42b983;
        position: absolute;
        top: -500px;
        width: 100%;
    }
    .webapp-controls .panel-tool .button-group{
        text-align: center;
        border-top: 1px solid #42b983;
    }
    .webapp-controls .panel-tool .button-group button{
       display: inline-block;
        width: 50%;
        height: 50px;
        color: #83a4d4;
        outline: none;
        background: #fff;
        border: none;
    }
    .webapp-controls .panel-tool .button-group button.active{
        background: #42b983;
        color: #fff;

    }
    .webapp-controls .panel-tool ul{
        height: calc(100% - 51px);
        overflow: auto;
    }
    .webapp-controls .panel-tool ul:nth-child(2) p{
        cursor: pointer;
        padding-left: 10px;
        border-bottom: 1px solid #2c3e50;
        padding: 5px;
    }
    .webapp-controls .panel-tool ul:nth-child(2) p.active{
        background: #fff;
        color: #2c3e50;
    }
    .webapp-controls .panel-tool ul img{
        display: inline-block;
        width: 30px;
        margin-right: 20px;
        vertical-align: middle;
    }
    .webapp-controls .panel-tool ul:last-child{
        text-align: center;
    }
    .webapp-controls .panel-tool ul:last-child p.active{
        color: #2c3e50;
    }
    .webapp-controls .panel-tool.opList{
        display: block;
    }
}
</style>

