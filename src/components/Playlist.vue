<template>
  <div class="playlist clearfix">
    <div class="playlist-title clearfix">
      <router-link to="/PlayList">· · ·</router-link>
      <h2>热门推荐</h2>
    </div>
    <figure v-for="(playitem, index) in playlists" :key="index">
      <img :src="playitem.coverImgUrl" alt>
      <figcaption>
        <p class="playlist-article"><router-link :to="{ name: 'playlistinfo', params: { id: playitem.id }}">{{ playitem.name }}</router-link></p>
        <p>by: {{ playitem.creator.nickname }}</p>
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  name: "playlist",
  props: {
    playlists: Array
  },
  mounted() {
  }
};
</script>
<style>
.playlist .playlist-title {
  margin: 30px 10px;
  border-bottom: 2px solid #42b983;
}
.playlist h2 {
  text-align: left;
  margin-right: 30px;
}
.playlist .playlist-title a {
  float: right;
  width: 30px;
}
.playlist .playlist-article{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.playlist figure {
  display: inline-block;
  width: 200px;
  margin-bottom: 20px;
}
.playlist  a{
  color: #000;
  text-decoration: none;
}
.playlist figure img {
  width: 100px;
}
</style>
