<template> 
    <div class="header">
        <h1>Moggy</h1>
        <ul class="nav">
            <li><router-link to="/">主页</router-link> </li>
            <li><router-link to="/playlist">歌单</router-link> </li>
            <li><router-link to="/singer">歌手</router-link> </li>
            <li><router-link to="/top">排行</router-link> </li>
            <li><router-link to="/search">搜索</router-link> </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'header'
}
</script>
<style>
.header {
  padding: 10px;
  border-bottom: 1px solid #42b983;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.header a.router-link-exact-active {
  color: #42b983;
}
.header .nav{
    list-style: none;
}
.header .nav li{
    display: inline-block;
    padding: 0 20px;
}
</style>
