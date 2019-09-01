<template> 
    <div class="navHeader">
        <ul class="nav">
            <li><router-link to="/">主页</router-link> </li>
            <li><router-link to="/playlist">歌单</router-link> </li>
            <li><router-link to="/top/19723756">排行</router-link> </li>
            <li><router-link to="/search">搜索</router-link> </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'navHeader'
}
</script>
<style>
.navHeader {
  position: sticky;
  padding: 10px;
  border-bottom: 1px solid #42b983;
  top: 0;
  background: #fff;
  z-index: 1;
}

.navHeader a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.navHeader a.router-link-exact-active {
  color: #42b983;
}
.navHeader .nav{
    list-style: none;
}
.navHeader .nav li{
    display: inline-block;
    padding: 10px 20px;
}
</style>
