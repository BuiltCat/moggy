<template>
    <div class="playlistinfo layout clearifx">
        <div class="clearfix">
            <div class="avatar">
                <img :src="playlist.coverImgUrl" alt>
                <a class="play" @click="addAll">播放</a>
            </div>
            <div class="info">
                <h2>&gt; {{ playlist.name }}</h2>
                <p class="author">
                    <img :src="playlist.creator.avatarUrl">
                    {{ playlist.creator.nickname }}
                </p>
                <div class="introduce">
                    <p>{{ playlist.description }}</p>
                </div>
                <p>
                    标签:
                    <span v-for="(tag,index) in playlist.tags" :key="index">{{ tag }}</span>
                </p>
            </div>
        </div>
        <p class="title">
            歌曲列表
            <span class="trackCount">{{ playlist.trackCount }}首歌</span>
            <span class="playcount">播放：{{ playlist.playCount }}次</span>
        </p>
        <table>
            <thead>
                <th></th>
                <th></th>
                <th>歌曲标题</th>
                <th>歌手</th>
                <th>专辑</th>
            </thead>
            <tbody>
                <tr v-for="(song,index) in playlist.tracks" :key="index">
                    <td>{{ index }}</td>
                    <td @click="addSong(song.id)">
                        <span class="iconfont icon-start"></span>
                    </td>
                    <td>
                        <router-link :to="{ name: 'SongInfo', params: { id: song.id }}">
                            {{song.name}}
                        </router-link>
                    </td>
                    <td>
                        <router-link v-for="(ar,index) in song.ar" :key="index" :to="{ name: 'SingerInfo', params: { id: ar.id }}">
                            {{ar.name}}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'AlbumInfo', params: { id: song.al.id }}">
                            {{song.al.name}}
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
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
                const res = await get("/playlist/detail?id=", to.params.id);
                if (res.code === 200) this.playlist = res.playlist;
            })();
        }
    },
    mounted() {
        const id = this.$router.currentRoute.params.id;
        (async () => {
            const res = await get("/playlist/detail?id=", id);
            if (res.code === 200) this.playlist = res.playlist;
            console.log(res)
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
.playlistinfo {
    margin-top: 40px;
}
.playlistinfo .avatar {
    float: left;
    width: 400px;
}
.playlistinfo .avatar .play {
    display: block;
    cursor: pointer;
    width: 200px;
    margin: 0 auto;
    background: #42b983;
    color: #fff;
}
.playlistinfo .avatar img {
    width: 200px;
    height: 200px;
    padding: 2px;
    border: 1px solid #999999;
}
.playlistinfo .info {
    margin-left: 400px;
    text-align: left;
}
.playlistinfo .info h2::first-letter {
    color: #42b983;
}
.playlistinfo .info .author {
    margin: 10px 0;
}
.playlistinfo .info .author img {
    display: inline-block;
    width: 50px;
    vertical-align: middle;
    padding-right: 20px;
}
.playlistinfo .title {
    font-size: 20px;
    line-height: 28px;
    text-align: left;
    width: 90%;
    margin: 50px auto 0;
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
.playlistinfo table {
    margin: 0 auto;
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    width: 90%;
    border-top: 3px solid #42b983;
}
.playlistinfo table th {
    padding: 15px;
}
.playlistinfo table td {
    padding: 10px;
}
.playlistinfo table tr:nth-child(odd) {
    background: #f7f7f7;
}
.playlistinfo table .iconfont{
    font-size: 30px;
}
.playlistinfo table td:nth-child(2):hover{
    color: rgba(9,9,9,0.1);
    cursor: pointer;
}
.playlistinfo table td:nth-child(2):active{
    color: #42b983;
    cursor: pointer;
}

@media screen and (max-width: 1000px) { 
    .playlistinfo {
        margin-top: 0;
    }
    .playlistinfo .avatar {
        float:none;
        width: 60%;
        margin: calc(50% - 44px) auto;
        
    }
    .playlistinfo .info {
        margin-left: 0;
        text-align: left;
        width: 80%;
        margin: 0 auto;
    }
    .playlistinfo table{
        font-size: 10px;
    }
    .playlistinfo table th{
        width: 150px;
    }
    .playlistinfo table td{
        padding-left: 0;
        padding-right: 10px;
    }

    .playlistinfo table th:first-child{
        display: none;
    }
    .playlistinfo table td:first-child{
        display: none;
    }
    .playlistinfo table th:last-child{
        display: none;
    }
    .playlistinfo table td:last-child{
        display: none;
    }
}
</style>

