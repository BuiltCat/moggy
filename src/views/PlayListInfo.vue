<template>
    <div class="playlistinfo layout clearifx">
        <div class="clearfix">
            <div class="avatar">
                <img :src="playlist.coverImgUrl" alt>
            </div>
            <div class="info">
                <h2>{{ playlist.name }}</h2>
                <p><span>{{ playlist.playCount }}次播放</span><span>{{playlist.subscribedCount}}次订阅</span></p>
                <p class="author">
                    <img :src="playlist.creator.avatarUrl">
                    {{ playlist.creator.nickname }}
                </p>
                <p>
                    <span v-for="(tag,index) in playlist.tags" :key="index">{{ tag }}</span>
                </p>
            </div>
        </div>
        <p class="title">
            歌曲列表
            <span class="trackCount">{{ playlist.trackCount }}首歌</span>
            <span class="playcount">播放：{{ playlist.playCount }}次</span>
        </p>
        <ul class="play-list">
            <li @click="addAll">播放全部</li>
            <li  @click="addSong(song.id)" v-for="(song,index) in playlist.tracks" :key="index" class="clearfix">
                <span class="avatar"><img :src="song.al.picUrl" alt="picUrl"></span>
                <p>
                    <span>
                        {{song.name}}
                    </span>
                    <span>
                        <router-link v-for="(ar,index) in song.ar" :key="index" :to="{ name: 'SingerInfo', params: { id: ar.id }}">
                            {{ar.name}}
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'AlbumInfo', params: { id: song.al.id }}">
                            {{song.al.name}}
                        </router-link>
                    </span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import { get } from "../utils/model";
import store from "../store";
export default {
    name: "playlistinfo",
    data() {
        return {
            playlist: {
                creator: {
                    avatarUrl: ""
                }
            }
        };
    },
    watch:{
        '$route' (to, from) {
            (async () => {
                    const res = await get("/playlist/detail?id=", to.params.id)
                    if (res.code === 200) this.playlist = res.playlist
                

            })();
        }
    },
    mounted() {
        const id = this.$router.currentRoute.params.id;
        (async () => {
                const res = await get("/playlist/detail?id=", id)
                if (res.code === 200) this.playlist = res.playlist
            
        })();
    },
    methods: {
        addAll() {
            const ids = this.playlist.trackIds.map(trackId => {
                return trackId.id;
            });
            this.addPlayList(ids);
        },
        addSong(id) {
            this.$store.dispatch("addSong", {
                id: id
            });
        },
        addPlayList(ids) {
            this.$store.dispatch("getSongs", {
                ids: ids
            });
        }
    },
    store
};
</script>
<style>
.playlistinfo .avatar {
    width: 100%;
}
.playlistinfo .avatar img {
    width:  100%;
    height:  100%;
}
.playlistinfo .info {
    box-sizing: border-box;
    padding: 20px;
    text-align: left;
}
.playlistinfo .info h2{
    font-size: 20px;
}
.playlistinfo .info p{
    margin: 20px 0;
    height: 20px;
}
.playlistinfo .info p span{
    font-size: 12px;
    font-weight: 700;
    padding-right: 20px;
}
.playlistinfo .info .author {
    font-size: 12px;
    line-height:20px; 
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 300;
}
.playlistinfo .info .author img {
    display: inline-block;
    width: 20px;
    vertical-align: middle;
    border-radius: 10px;
    margin-right: 5px;
}
.playlistinfo .title {
    font-size: 20px;
    line-height: 28px;
    text-align: left;
    width: 90%;
    margin: 10px auto 0;
}
.playlistinfo .title .trackCount {
    font-size: 12px;
    color: #666;
}
.playlistinfo .title .playcount {
    float: right;
    font-size: 12px;
    color: #666;
}
.playlistinfo .play-list{
    width: 90%;
    margin: 0 auto 0;
    list-style: none;
    border-bottom: .5px solid #d4d4d4;
}
.playlistinfo .play-list li{
    border-top: .5px solid #d4d4d4;
    text-align: left;
    padding: 5px 0;
}
.playlistinfo .play-list li:first-child{
    text-align: center;
    cursor: pointer;
}
.playlistinfo .play-list a{
    color: #666;
    text-decoration: none;
}
.playlistinfo .play-list .avatar{
    display: inline-block;
    width: 60px;
    height: 60px;
    padding: 5px;
    margin-right: 10px;
    vertical-align: middle;
}
.playlistinfo .play-list img{
    display: inline-block;
    width: 50px;
    height: 50px;
}
.playlistinfo .play-list p{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    height: 60px;
    text-align: left;
    width: calc(100% - 70px);
}
.playlistinfo .play-list p span{
    display: block;
    height: 20px;
    line-height: 20px;
    font-weight: 100;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.playlistinfo .play-list p span:first-child{
    font-weight: 700;
}
</style>

