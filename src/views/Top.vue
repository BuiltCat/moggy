<template>
    <div class="top layout">
        <ul class="top-list">
            <li v-for="(top,index) in Toplist" :key="index" >
                <router-link :to="{ name: 'Top', params: { id: top.id }}">
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
        <PlayListInfo></PlayListInfo>
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
    display: inline-block;
    width: 250px;
    list-style: none;
    text-align: left;
    border: 1px solid #d3d3d3;
}
.top .top-list li{
    font-size: 12px;
    cursor: pointer;
}
.top .top-list li:hover{
    background: #f1f1f1;
}
.top .top-list li .active{
    background: #d3d3d3;
}
.top .top-list li p{
    padding: 10px;
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
.top .playlistinfo{
    display: inline-block;
    width: 750px;
    padding-left: 50px;
    vertical-align: top;
}
@media screen and (max-width: 1000px) { 
    .top .top-list{
        display: block;
        width: 100%;
        list-style: none;
        text-align: left;
        border: 1px solid #d3d3d3;
        height: 142px;
        overflow-y: auto;
    }
    .top .playlistinfo{
        display: inline-block;
        width: auto;
        padding-left: 0;
        vertical-align: top;
    }
    .top .playlistinfo .avatar {
        margin: calc(50% - 135px) auto;
    }
}
</style>

