<template>
  <div class="playlist clearfix">
    <figure class="clearfix" v-for="(playitem, index) in playlists" :key="index">
      <img :src="playitem.coverImgUrl" alt>
      <div class="trackCount">
        <p><i class="icon-list iconfont"></i> {{ playitem.trackCount}}</p>
        <p><i class="icon-bofang iconfont"></i> {{ playitem.playCount}}</p>
      </div>
      <figcaption>
        <p class="playlist-article"><router-link :to="{ name: 'playlistinfo', params: { id: playitem.id }}">{{ playitem.name }}</router-link></p>
        <p class="playlist-nickname">{{ playitem.creator.nickname }}</p>
      </figcaption>
    </figure>
    <router-link to="/PlayList">· · ·</router-link>
  </div>
</template>
<script>
export default {
  name: "playlist",
  props: {
    playlists: Array
  },
  mounted() {
    console.log(this.playlists)
  }
};
</script>
<style>
.playlist .playlist-article{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.playlist  a{
  color:#42b983;
  text-decoration: none;
}
.playlist figure {
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
}
.playlist figure img {
  float: left;
  width: 86px;
}
.playlist figure figcaption{
  font-size: 14px;
  height: 86px;
  margin-left: 96px;
  margin-right: 76px;
  padding: 10px;
  text-align: left;
}
.playlist figure figcaption p{
  padding-top: 5px;
}
.playlist figure .playlist-nickname{
  color: #999;
}
.playlist figure .trackCount{
  font-size: 8px;
  float: right;
  height: 86px;
  width: 60px;
  line-height: 43px;
  text-align: left;
  color: #999;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
