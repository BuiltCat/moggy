<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view id="main"/>
    <Audio></Audio>
  </div>
</template>
<script>
import Audio from "@/components/Audio.vue"
export default {
  id: "app",
  components: {
    Audio
  }
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.layout{
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  border-bottom: 1px solid #42b983;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#main {
  margin-bottom: 70px;
}
</style>
