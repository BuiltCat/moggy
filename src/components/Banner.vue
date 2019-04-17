<template>
    <div class="banner">
        <a class="content" :href="url">
            <img :src="imageUrl" alt="banner">
        </a>
        <a class="aside left" @click="pageNum --"> 
             <span class="iconfont icon-p-left"></span>
        </a>
        <a class="aside right" @click="pageNum ++">
            <span class="iconfont icon-p-right"></span>
        </a>
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
            this.imageUrl = this.banners[pageNum].imageUrl;
            this.url = this.banners[pageNum].url;
        }
    }

}
</script>
<style>
.banner{
    position: relative;
}
.banner .content{
    display: inline-block;
}
.banner .aside .iconfont{
    font-size: 50px;
}
.banner .aside{
    position: absolute;
    display: block;
    cursor: pointer;
}
.banner .aside:hover{
    background: rgba(188, 188, 188, 0.8);
}
.banner .aside.left{
    top: 50%;
    left: -50px;
    transform: translate(0, -50%);
}
.banner .aside.right{
    top: 50%;
    right: -50px;
    transform: translate(0, -50%);
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

</style>
