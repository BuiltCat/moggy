<template>
  <div id="app">
    <Header></Header>
    <router-view id="main"/>
    <Audio></Audio>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Audio from "@/components/Audio.vue"
export default {
  id: "app",
  components: {
    Audio,
    Header
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
@media screen and (max-width: 1000px) {
  .layout{
      width: auto;
  }
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
#main{
  margin-bottom: 70px;
}
</style>
