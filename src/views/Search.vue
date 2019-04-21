<template>
    <div class="search">
        <div class="control">
            <input type="text" v-model="keywords">
            <select v-model="type" @change="()=>{searched=false;search()}">
                <option value="1">歌曲</option>
                <option value="100">歌手</option>
                <option value="1000">歌单</option>
                <option value="10">专辑</option>
            </select>
            <button @click="search">
                <span class="iconfont icon-search"></span>
            </button>
            <ul class="search-suggest">
                <li class="title">
                    <p>单曲</p>
                    <ul>
                        <li v-for="(song,index) in suggest.songs" :key="index">
                            {{ song.name }}-{{
                            song.artists.map(a=>{
                            return a.name
                            }).toString()
                            }}
                        </li>
                    </ul>
                </li>
                <li class="title">
                    <p>歌手</p>
                    <ul>
                        <li v-for="(artist,index) in suggest.artists" :key="index">{{ artist.name }}</li>
                    </ul>
                </li>
                <li class="title">
                    <p>专辑</p>
                    <ul>
                        <li
                            v-for="(album,index) in suggest.albums"
                            :key="index"
                        >{{ album.name }}-{{ album.artist.name }}</li>
                    </ul>
                </li>
                <li class="title">
                    <p>歌单</p>
                    <ul>
                        <li
                            v-for="(playlist,index) in suggest.playlists"
                            :key="index"
                        >{{ playlist.name }}</li>
                    </ul>
                </li>
            </ul>
        </div>
        <p class="title" v-show="searched">
            搜索“{{ keywords }}”,找到
            <span
                class="trackCount"
            >{{ list[hash[type].countName] }}首{{ hash[type].tip }}。</span>
        </p>
        <table v-if="parseInt(type) === 1&&searched">
            <thead>
                <th></th>
                <th></th>
                <th>歌曲标题</th>
                <th>歌手</th>
                <th>专辑</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list[hash[type].listName]" :key="index">
                    <td>{{ index }}</td>
                    <td>
                        <span class="iconfont icon-start"></span>
                    </td>
                    <td>
                        <router-link :to="{ name: 'SongInfo', params: { id: item.id }}">
                            {{item.name}}
                        </router-link>
                    </td>
                    <td>
                        <router-link v-for="(ar,index) in item.artists" :key="index" :to="{ name: 'SingerInfo', params: { id: ar.id }}">
                            {{ar.name}}
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="{ name: 'AlbumInfo', params: { id: item.album.id }}">
                            {{item.album.name}}
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="artists" v-if="parseInt(type) === 100">
            <figure v-for="(item,index) in list[hash[type].listName]" :key="index">
                <img :src="item.img1v1Url" alt>
                <figcaption>
                    <p class="playlist-article">
                        <router-link :to="{ name: 'SingerInfo', params: { id: item.id }}">
                            {{item.name}}
                        </router-link>
                    </p>
                </figcaption>
            </figure>
        </div>
        <div class="artists" v-if="parseInt(type) === 1000">
            <figure v-for="(item,index) in list[hash[type].listName]" :key="index">
                <img :src="item.coverImgUrl" alt>
                <figcaption>
                    <p class="playlist-article">
                        <router-link
                            :to="{ name: 'playlistinfo', params: { id: item.id }}"
                        >{{ item.name }}</router-link>
                    </p>
                    <p>by: {{ item.creator.nickname }}</p>
                </figcaption>
            </figure>
        </div>
        <div class="artists" v-if="parseInt(type) === 10">
            <figure v-for="(item,index) in list[hash[type].listName]" :key="index">
                <img :src="item.blurPicUrl" alt>
                <figcaption>
                    <p class="playlist-article">
                        <router-link
                            :to="{ name: 'AlbumInfo', params: { id: item.id }}"
                        >{{ item.name }}</router-link>
                    </p>
                    <p>
                        by: {{item.artists.map(ar=>{
                        return ar.name
                        }).toString() }}
                    </p>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
import { get } from "../utils/model";
import Panel from "../components/Panel.vue";
export default {
    name: "search",
    data() {
        return {
            hash: {
                1: {
                    tip: "单曲",
                    countName: "songCount",
                    listName: "songs"
                },
                100: {
                    tip: "歌手",
                    countName: "artistCount",
                    listName: "artists"
                },
                1000: {
                    tip: "歌单",
                    countName: "playlistCount",
                    listName: "playlists"
                },
                10: {
                    tip: "专辑",
                    countName: "albumCount",
                    listName: "albums"
                }
            },
            keywords: "",
            suggest: [],
            list: {},
            searched: false,
            type: 1
        };
    },
    watch: {
        keywords: function(navl) {
            (async () => {
                if (navl !== "") {
                    const res = await get("/search/suggest?keywords=", navl);
                    if (res.code === 200) {
                        this.suggest = res.result;
                    }
                } else {
                    this.suggest = [];
                }
            })();
        }
    },
    methods: {
        search: function() {
            (async () => {
                if (this.keywords !== "") {
                    const res = await get(
                        `/search?type=${this.type}&keywords=`,
                        this.keywords
                    );
                    if (res.code === 200) {
                        this.list = res.result;
                        this.searched = true;
                    }
                }
            })();
        }
    },
    components: {
        Panel
    }
};
</script>

<style>
.search .control {
    position: relative;
    width: 400px;
    margin: 20px auto;
}
.search .control input {
    display: inline-block;
    height: 40px;
    width: 300px;
    vertical-align: middle;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    padding: 10px;
}
.search .control select {
    display: inline-block;
    border: none;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    outline: none;
    width: 40px;
    height: 40px;
    line-height: 40px;
    appearance: none;
    background: none;
    text-align: center;
    border-radius: 0;
    padding-left: 5px;
    vertical-align: middle;
}
.search .control button {
    display: inline-block;
    vertical-align: middle;
    outline: none;
    width: 60px;
    height: 40px;
    border: none;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.search .control button .iconfont {
    font-size: 28px;
    line-height: 40px;
}
.search .control input:focus ~ .search-suggest {
    display: block;
}
.search .search-suggest {
    position: absolute;
    display: none;
    top: 45px;
    background: #fff;
    width: 360px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    text-align: left;
    list-style: none;
}
.search .search-suggest > li {
    font-size: 16px;
    border-bottom: 1px solid #d3d3d3;
}
.search .search-suggest > li > p {
    padding: 10px;
    display: inline-block;
    width: 60px;
    vertical-align: top;
    height: 100%;
}
.search .search-suggest > li > ul {
    border-left: 1px solid #d3d3d3;
    font-size: 12px;
    padding: 10px;
    width: 298px;
    display: inline-block;
    list-style: none;
    vertical-align: top;
}
.search .search-suggest > li > ul li {
    padding: 5px;
}
.search table {
    margin: 0 auto;
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    width: 90%;
    border-top: 3px solid #42b983;
}
.search table th {
    padding: 15px;
}
.search table td {
    padding: 10px;
}
.search table tr:nth-child(odd) {
    background: #f7f7f7;
}
.search table .iconfont {
    font-size: 30px;
}
.search table td:nth-child(2):hover {
    color: rgba(9, 9, 9, 0.1);
    cursor: pointer;
}
.search table td:nth-child(2):active {
    color: #42b983;
    cursor: pointer;
}
.search .artists figure {
    display: inline-block;
    width: 200px;
    padding: 10px;
}
.search .artists p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.search .artists figure img {
    width: 150px;
}
</style>
