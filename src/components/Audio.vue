<template>
    <div class="audio">
        <audio :src="songUrl" ref="audio" autoplay></audio>
        <div class="webapp-controls clearfix">
            <div class="audio-avatar">
                <img :src="picUrl">
            </div>
            <div class="audio-info" @click="Player">
                <p>{{ song }}</p>
                <p>{{ singer }}</p>
                <p>{{currentTime}} / {{duration}}</p>
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
import defaultPicUrl from "@/assets/picUrl.jpg"
import { s_2_hs } from "../utils/tool"

export default {
    class: "audio",
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
        currentTime(){
            return s_2_hs(this.$store.state.currentTime)
        },
        duration(){
            return s_2_hs(this.$store.state.duration)
        }
        
    },
    mounted() {
        this.$store.dispatch("getAudio",{
            audio: this.$refs.audio
        });
        this.$refs.audio.addEventListener(
            "timeupdate",
            function() {
                this.$store.dispatch('getCurrentTime',{
                    currentTime: isNaN(this.$refs.audio.currentTime)?0:this.$refs.audio.currentTime
                })
            }.bind(this)
        );
        this.$refs.audio.addEventListener(
            "loadeddata",
            function() {
                this.$store.dispatch('getDuration',{
                    duration: isNaN(this.$refs.audio.duration)?0:this.$refs.audio.duration
                })
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
            this.$store.dispatch('getCurrentTime',{
                    currentTime: 0
                })
        },
        Player(){
             this.$router.push('/player')
        }
    },
    store
};
</script>
<style>
.audio {
    position: fixed;
    border-top: 1px solid #f2f2f2;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background-color: #fff;
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
    padding: 5px;
    width: 60px;
    border-radius: 50%;
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
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.audio .audio-info p:first-child {
    font-size: 10px;
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
.audio .audio-operation .iconfont {
    font-size: 30px;
}
.audio .audio-operation > li:last-child {
    padding-left: 10px;
}
@media screen and (max-width: 1000px) {
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
        font-size: 12px;
    }
    .webapp-controls .audio-info p {
        height: 20px;
        line-height: 20px;
    }
    .webapp-controls .audio-operation {
        display: inline-block;
        text-align: center;
        width: 60px;
        line-height: 60px;
        font-size: 10px;
    }
}
</style>

