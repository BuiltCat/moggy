<template>
    <div class="top layout">
        <ul class="top-list">
            <li v-for="(top,index) in Toplist" :key="index" >
                <router-link :to="{ name: 'playlistinfo', params: { id: top.id }}">
                <p class="active" v-if="id === top.id"> 
                    <img :src="top.coverImgUrl" :alt="top.name">
                    {{ top.name }}
                </p>
                <p v-else>
                    <img :src="top.coverImgUrl" :alt="top.name">
                    {{ top.name }}
                </p>
                </router-link>
            </li>
        </ul>
        <!-- <PlayListInfo></PlayListInfo> -->
    </div>
</template>

<script>
import { get } from "../utils/model";
import PlayListInfo from "./PlayListInfo.vue"
export default {
    name: "top",
    data(){
        return {
            Toplist: [],
            id: 19723756
        }
    },
    watch: {
        '$route' (to, from) { 
            this.id = parseInt(to.params.id);
        }
    },
    mounted(){
        (async ()=>{
                const res = await get(
                    "/toplist",
                    ""
                );
                if(res.code === 200){
                    this.Toplist = res.list;
                }
        })()
    },
    components:{
        PlayListInfo
    }
    
}
</script>

<style>
.top .top-list{
    list-style: none;
    text-align: left;
}
.top .top-list li{
    font-size: 12px;
    cursor: pointer;
    display: inline-block;
    box-sizing: content-box;
    width: 50%;
}
.top .top-list li p{
    padding: 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.top .top-list li a{
    width: 100%;
    height: 100%;
    display: block;
    color: #111;
    text-decoration: none;
}
.top .top-list img{
    display: inline-block;
    width: 50px;
    vertical-align: middle;
}
</style>

