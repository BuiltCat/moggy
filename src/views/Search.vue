<template>
  <div class="search">
    <div class="control" v-show="!searched">
      <input type="text" v-model="keywords" />
      <button @click="search">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <h2  v-show="!searched">热搜榜</h2>
    <ul class="hot"  v-show="!searched">
        <li v-for="(hot,index) in hots" :key="index" @click="search(hot.searchWord)">
            <div class="content">
                <p><span>{{hot.searchWord}}</span><img v-if="hot.iconUrl" :src="hot.iconUrl" alt=""></p>
                <p>{{hot.content}}</p>
            </div>
            <div class="index">
                {{hot.score}}
            </div>
        </li>
    </ul>
    <div class="playlistinfo" v-show="searched">
      <ul class="play-list">
        <li
          @click="addSong(song.id)"
          v-for="(song,index) in list[hash[type].listName]"
          :key="index"
          class="clearfix"
        >
          <span class="avatar">
            <img :src="song.album.artist.img1v1Url" alt="picUrl" />
          </span>
          <p>
            <span>{{song.name}}</span>
            <span>
              <router-link
                v-for="(ar,index) in song.artists"
                :key="index"
                :to="{ name: 'SingerInfo', params: { id: ar.id }}"
              >{{ar.name}}</router-link>
            </span>
            <span>
              <router-link
                :to="{ name: 'AlbumInfo', params: { id: song.album.id }}"
              >{{song.album.name}}</router-link>
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/model";
import store from "../store";
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
      hots: [],
      list: {},
      searched: false,
      type: 1
    };
  },
  mounted() {
    (async () => {
        const res = await get("/search/hot/detail","");
        if (res.code === 200) {
          this.hots = res.data;
        }
    })();
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
    },
    search: function(keywords) {
      (async () => {
          const res = await get(
            `/search?type=${this.type}&keywords=`,
            keywords
          );
          if (res.code === 200) {
            this.list = res.result;
            this.searched = true;
            }
      })();
    },
    addSong(id) {
      this.$store.dispatch("addSong", {
        id: id
      });
    }
  },
  store
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
  width: 200px;
  vertical-align: middle;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  outline: none;
  padding: 10px;
}
.search .control button {
  background: #fff;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  width: 60px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
}
.search .control button .iconfont {
  font-size: 18px;
  line-height: 40px;
}
.search h2{
    text-align: left;
    font-size: 14px;
    padding: 10px 30px;
}
.search .hot li{
    padding: 10px 30px;
}
.search .hot .content {
    display: inline-block;
    box-sizing: content-box;
    width: 70%;
    text-align: left;
    vertical-align: middle;
}
.search .hot .content p{
    font-size: 18px;
    font-weight: bold;
}
.search .hot .content p:last-child{
    font-size: 12px;
    color: #999;
    font-weight: 100;
}
.search .hot .content img{
    display: inline-block;
    height: 18px;
    margin-left: 10px;
    vertical-align: middle;
}
.search .hot .index{
    display: inline-block;
    box-sizing: content-box;
    width: 30%;
    vertical-align: middle;
    font-size: 12px;
    text-align: right;
    color: #d3d3d3;
}
</style>
