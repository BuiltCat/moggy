<template>
    <div class="banner">
        <ul class="list-ban" ref="listBan">
           <li v-for="(b, i) in banners" :key="i"> 
                <a class="content" :href="b.url">
                    <img :src="b.imageUrl" alt="banner">
                </a>
            </li>
        </ul>
            <!-- <img :src="imageUrl" alt="banner"> -->
        <ul class="list">
            <li v-for="(item, index) in banners" :key="index">
                <span v-if="pageNum === index"  class="iconfont icon-spot active"></span>
                <span v-else  class="iconfont icon-spot"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'banner',
    data (){
        return {
            imageUrl: '',
            url: '',
            pageNum: 0
        }
    },
    props:{
        banners: Array
    },
    watch:{
        banners: function(){
            this.changeBanner(this.pageNum);
            setInterval(function(){
                this.pageNum++;
            }.bind(this),3000);
        },
        pageNum: function(nval){
            if(nval < 0){
                this.pageNum = this.banners.length-1;
            }else if(nval < this.banners.length){
                this.changeBanner(nval)
            }else{
                this.pageNum = 0;
            }

        }
    },
    methods:{
        changeBanner: function(pageNum){
            this.$refs.listBan.scrollLeft = pageNum*this.$refs.listBan.clientWidth
        }
    },

}
</script>
<style>
.banner{
    position: relative;
}
.banner .content{
    display: inline-block;
}
.banner .list-ban{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
}
.banner .list-ban li{
    display: inline-block;

}
.banner .list{
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
}
.banner .list li{
    display: inline-block;
    color: rgba(188, 188, 188, 0.8);

}
.banner .list .active{
    color: #000;
}
.banner img{
    width: 1000px;
    height: 370px;
    vertical-align: bottom;
}

@media screen and (max-width: 1000px) {
    .banner img{
        width: 100%;
        height: auto;
        vertical-align: bottom;
    }
}
</style>
