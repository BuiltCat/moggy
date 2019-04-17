<template>
    <div class='playlistinfo layout'>
        <div class="clearfix">
            <div class="avatar">
                <img :src="playlist.coverImgUrl" alt/>
            </div>
            <div class="info">
                <h2>{{ playlist.name }}</h2>
                <p>{{ playlist.creator.nickname }}</p>
                <p>{{ playlist.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { get } from '../utils/model';
import { async } from 'q';
export default {
    name: 'playlistinfo',
    data () {
        return {
            playlist: {}
        }
    },
    mounted() {
        const id = this.$router.currentRoute.params.id;
        (async () =>{
            const res = await get('/playlist/detail?id=',id);
            if(res.code === 200)
            this.playlist = res.playlist;
            console.log(this.playlist)
        })()
    }

}
</script>
<style>
.playlistinfo {
    margin-top: 40px;
}
.playlistinfo .avatar{
    float: left;
    width: 400px;
}
.playlistinfo .avatar img{
    width: 200px;
    height: 200px;
    padding: 2px;
    border: 1px solid #999999;
}
.playlistinfo .info{
    margin-left: 400px;
    text-align: left;
}
</style>

