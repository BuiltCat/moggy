(function(t){function n(n){for(var s,r,o=n[0],l=n[1],c=n[2],p=0,d=[];p<o.length;p++)r=o[p],a[r]&&d.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(n);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],s=!0,o=1;o<e.length;o++){var l=e[o];0!==a[l]&&(s=!1)}s&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},a={app:0},i=[];function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var s=e("64a9"),a=e.n(s);a.a},"04b2":function(t,n,e){},2029:function(t,n,e){},3188:function(t,n,e){},"43cf":function(t,n,e){"use strict";var s=e("2029"),a=e.n(s);a.a},5255:function(t,n,e){"use strict";var s=e("5d5f"),a=e.n(s);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Header"),e("router-view",{attrs:{id:"main"}}),e("Audio")],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navHeader"},[e("h1",[t._v("Moggy")]),e("ul",{staticClass:"nav"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("主页")])],1),e("li",[e("router-link",{attrs:{to:"/playlist"}},[t._v("歌单")])],1),e("li",[e("router-link",{attrs:{to:"/top/19723756"}},[t._v("排行")])],1),e("li",[e("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])])},o=[],l={name:"navHeader"},c=l,u=(e("8baf"),e("2877")),p=Object(u["a"])(c,r,o,!1,null,null,null),d=p.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"audio"},[e("audio",{ref:"audio",attrs:{src:t.songUrl,autoplay:""}}),e("div",{staticClass:"audio-controls clearfix"},[e("div",{staticClass:"audio-avatar",on:{click:t.play}},[e("img",{attrs:{src:t.picUrl}}),e("span",{staticClass:"iconfont",class:this.isPlay?"icon-pause":"icon-start"})]),e("div",{staticClass:"audio-info"},[e("p",[t._v(t._s(t.song)+" - "+t._s(t.singer))]),e("p",[t._v(t._s(t.s_2_hs(t.currentTime))+" / "+t._s(t.s_2_hs(t.duration)))]),e("div",{staticClass:"progress-bar",on:{click:t.progress}},[e("div",{staticClass:"inline-bar",style:t.progressWidth})])]),e("ul",{staticClass:"audio-operation"},[e("li",{on:{click:t.prev}},[e("span",{staticClass:"iconfont icon-prev"})]),t._m(0),e("li",{on:{click:t.next}},[e("span",{staticClass:"iconfont icon-next"})]),e("li",[e("div",{staticClass:"sound"},[e("div",{staticClass:"sound-tool",on:{click:t.volume}},[e("div",{style:t.volumeHeight})])]),e("span",{staticClass:"iconfont icon-sound"})]),e("li",[e("span",{staticClass:"iconfont icon-list",on:{click:function(n){t.lyricPanel=!t.lyricPanel}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.lyricPanel,expression:"lyricPanel"}],staticClass:"lyric-tool clearfix"},[e("ul",[e("li",[t._v("播放列表")]),t._l(t.songs,function(n,s){return e("li",{key:s,on:{click:function(n){return t.$store.commit("changeSong",{num:s})}}},[t.songNum===s?e("p",{staticClass:"active"},[t._v(t._s(n.name))]):e("p",[t._v(t._s(n.name))])])})],2),e("ul",{ref:"lyc"},[e("li"),e("li"),e("li"),e("li"),t._l(t.lyric,function(n,s){return e("li",{key:s},[t.isLyric(s,n,t.currentTime)?e("p",{staticClass:"active"},[t._v(t._s(n.lyr))]):e("p",[t._v(t._s(n.lyr))])])})],2)])])])]),e("div",{staticClass:"webapp-controls clearfix"},[e("div",{staticClass:"panel-tool",class:[t.opList?"opList":""]},[e("div",{staticClass:"button-group"},[e("button",{class:[t.listShow?"":"active"],on:{click:t.showList}},[t._v("列表")]),e("button",{class:[t.listShow?"active":""],on:{click:t.showLyc}},[t._v("歌词")])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}]},t._l(t.songs,function(n,s){return e("li",{key:s,on:{click:function(n){return t.$store.commit("changeSong",{num:s})}}},[t.songNum===s?e("p",{staticClass:"active"},[e("img",{attrs:{src:n.al.picUrl,alt:" 图片"}}),t._v(t._s(n.name))]):e("p",[e("img",{attrs:{src:n.al.picUrl,alt:" 图片"}}),t._v(t._s(n.name))])])}),0),e("ul",{directives:[{name:"show",rawName:"v-show",value:!t.listShow,expression:"!listShow"}],ref:"lyc"},[e("li"),e("li"),e("li"),e("li"),t._l(t.lyric,function(n,s){return e("li",{key:s},[t.isLyric(s,n,t.currentTime)?e("p",{staticClass:"active"},[t._v(t._s(n.lyr))]):e("p",[t._v(t._s(n.lyr))])])})],2)]),e("div",{staticClass:"audio-avatar",on:{click:t.play}},[e("img",{attrs:{src:t.picUrl}}),e("span",{staticClass:"iconfont",class:this.isPlay?"icon-pause":"icon-start"})]),e("div",{staticClass:"audio-info",on:{click:function(n){t.opList=!t.opList}}},[e("p",[t._v(t._s(t.song)+" - "+t._s(t.singer))]),e("p",[t._v(t._s(t.s_2_hs(t.currentTime))+" / "+t._s(t.s_2_hs(t.duration)))])]),e("div",{staticClass:"audio-operation"},[e("span",{staticClass:"iconfont icon-next",on:{click:t.next}})])])])},f=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"iconfont icon-spot"})])}],h=e("e814"),v=e.n(h),g=(e("6b54"),e("7f7f"),e("cebc")),_=(e("96cf"),e("3b8d")),y=e("2f62"),b=e("bc3a"),k=e.n(b),w="//pussycat.online:3000";function C(t,n){return x.apply(this,arguments)}function x(){return x=Object(_["a"])(regeneratorRuntime.mark(function t(n,e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("".concat(w).concat(n).concat(e));case 2:if(s=t.sent,200!==s.status){t.next=7;break}return t.abrupt("return",s.data);case 7:return t.abrupt("return",{code:-1});case 8:case"end":return t.stop()}},t)})),x.apply(this,arguments)}var S=e("59ad"),$=e.n(S);e("ac6a"),e("28a5");function O(t){var n=new Array,e=t.split("\n");return e.forEach(function(t){var e=t.substring(t.indexOf("[")+1,t.indexOf("]")).split(":");n.push({time:$()(60*e[0])+$()(e[1]),lyr:t.substring(t.indexOf("]")+1,t.length)})}),n}s["a"].use(y["a"]);var N=new y["a"].Store({state:{songs:[],ids:[],lyric:[],songNum:0},getters:{},mutations:{getSongs:function(t,n){t.songs=n.songs,t.ids=t.songs.map(function(t){return t.id})},addSong:function(t,n){t.songs=t.songs.concat(n.songs),t.songNum=t.songs.length-1,t.ids=t.songs.map(function(t){return t.id})},getLyric:function(t,n){t.lyric=O(n.lyric)},changeSong:function(t,n){t.songNum=n.num}},actions:{getSongs:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(n,e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C("/song/detail?ids=",e.ids);case 2:s=t.sent,200===s.code&&n.commit("getSongs",{songs:s.songs});case 4:case"end":return t.stop()}},t)}));function n(n,e){return t.apply(this,arguments)}return n}(),addSong:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(n,e){var s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=this.state.ids.indexOf(e.id),!(s<0)){t.next=8;break}return t.next=4,C("/song/detail?ids=",e.id);case 4:a=t.sent,200===a.code&&n.commit("addSong",{songs:a.songs}),t.next=9;break;case 8:n.commit("changeSong",{num:s});case 9:case"end":return t.stop()}},t,this)}));function n(n,e){return t.apply(this,arguments)}return n}(),getLyric:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(n,e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C("/lyric?id=",e.id);case 2:s=t.sent,200===s.code&&(s.hasOwnProperty("uncollected")||s.hasOwnProperty("nolyric")?n.commit("getLyric",{lyric:"[00:00.000] 暂无歌词\n"}):n.commit("getLyric",{lyric:s.lrc.lyric}));case 4:case"end":return t.stop()}},t)}));function n(n,e){return t.apply(this,arguments)}return n}()}}),P={class:"audio",data:function(){return{isPlay:!0,currentTime:"",duration:0,progressWidth:{width:0},volumeHeight:{height:"90px"},lyricPanel:!1,upTime:0,listShow:!0,opList:!1}},computed:Object(g["a"])({},Object(y["b"])(["songs","lyric","songNum"]),{song:function(){return this.songs.length?this.songs[this.songNum].name:""},singer:function(){return this.songs.length?this.songs[this.songNum].ar.map(function(t){return t.name}).toString():""},songUrl:function(){return this.songs.length?this.getSongUrl(this.songs[this.songNum].id):""},picUrl:function(){return this.songs.length?this.songs[this.songNum].al.picUrl:""}}),watch:{currentTime:function(t){this.progressWidth.width="".concat(700*this.currentTime/this.duration,"px"),0!==this.lyric.length&&this.lyric[this.upTime].hasOwnProperty("time")&&(this.lyric[this.upTime].time<t&&(this.upTime+=1,this.$refs.lyc.scrollTop+=20),this.lyric[this.upTime].time>t&&(this.upTime-=1,this.$refs.lyc.scrollTop-=20))}},mounted:function(){this.$refs.audio.addEventListener("timeupdate",function(){this.currentTime=this.$refs.audio.currentTime}.bind(this)),this.$refs.audio.addEventListener("loadeddata",function(){this.duration=this.$refs.audio.duration,isNaN(this.duration)&&(this.duration=0)}.bind(this)),this.$refs.audio.addEventListener("ended",function(){this.next()}.bind(this))},methods:{getSongUrl:function(t){return this.$store.dispatch("getLyric",{id:t}),"https://music.163.com/song/media/outer/url?id=".concat(t,".mp3")},play:function(){this.isPlay?this.$refs.audio.pause():this.$refs.audio.play(),this.isPlay=!this.isPlay},prev:function(){var t=this.songs.length-1;0===this.songNum?this.$store.commit("changeSong",{num:t}):this.$store.commit("changeSong",{num:this.songNum-1}),this.currentTime=0},next:function(){var t=this.songs.length-1;this.songNum===t?this.$store.commit("changeSong",{num:0}):this.$store.commit("changeSong",{num:this.songNum+1}),this.currentTime=0},progress:function(t){this.$refs.audio.currentTime=this.$refs.audio.duration*t.offsetX/700,!1===this.isPlay&&(this.$refs.audio.play(),this.isPlay=!this.isPlay)},volume:function(t){var n=(90-t.offsetY)/90;this.volumeHeight.height="".concat(90*n,"px"),this.$refs.audio.volume=n},s_2_hs:function(t){var n=v()(t/60),e=v()(t%60);return"".concat(this.PrefixInteger(n,2),":").concat(this.PrefixInteger(e,2))},PrefixInteger:function(t,n){return(Array(n).join("0")+t).slice(-n)},isLyric:function(t,n,e){return t<this.lyric.length&&n.time<=e&&this.lyric[t+1].time>e},showList:function(){this.listShow=!0},showLyc:function(){this.listShow=!1}},store:N},j=P,I=(e("de57"),Object(u["a"])(j,m,f,!1,null,null,null)),L=I.exports,R={id:"app",components:{Audio:L,Header:d}},T=R,E=(e("034f"),Object(u["a"])(T,a,i,!1,null,null,null)),U=E.exports,A=e("8c4f"),H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home layout"},[e("Banner",{attrs:{banners:t.banners}}),e("Playlist",{attrs:{playlists:t.playlists}})],1)},B=[],M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("a",{staticClass:"content",attrs:{href:t.url}},[e("img",{attrs:{src:t.imageUrl,alt:"banner"}})]),e("a",{staticClass:"aside left",on:{click:function(n){t.pageNum--}}},[e("span",{staticClass:"iconfont icon-p-left"})]),e("a",{staticClass:"aside right",on:{click:function(n){t.pageNum++}}},[e("span",{staticClass:"iconfont icon-p-right"})]),e("ul",{staticClass:"list"},t._l(t.banners,function(n,s){return e("li",{key:s},[t.pageNum===s?e("span",{staticClass:"iconfont icon-spot active"}):e("span",{staticClass:"iconfont icon-spot"})])}),0)])},W=[],q={name:"banner",data:function(){return{imageUrl:"",url:"",pageNum:0}},props:{banners:Array},watch:{banners:function(){this.changeBanner(this.pageNum),setInterval(function(){this.pageNum++}.bind(this),3e3)},pageNum:function(t){t<0?this.pageNum=this.banners.length-1:t<this.banners.length?this.changeBanner(t):this.pageNum=0}},methods:{changeBanner:function(t){this.imageUrl=this.banners[t].imageUrl,this.url=this.banners[t].url}}},J=q,D=(e("f230"),Object(u["a"])(J,M,W,!1,null,null,null)),X=D.exports,Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlist clearfix"},[e("div",{staticClass:"playlist-title clearfix"},[e("router-link",{attrs:{to:"/PlayList"}},[t._v("· · ·")]),e("h2",[t._v("热门推荐")])],1),t._l(t.playlists,function(n,s){return e("figure",{key:s},[e("img",{attrs:{src:n.coverImgUrl,alt:""}}),e("figcaption",[e("p",{staticClass:"playlist-article"},[e("router-link",{attrs:{to:{name:"playlistinfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1),e("p",[t._v("by: "+t._s(n.creator.nickname))])])])})],2)},z=[],F={name:"playlist",props:{playlists:Array},mounted:function(){}},G=F,K=(e("dfba"),Object(u["a"])(G,Y,z,!1,null,null,null)),Q=K.exports,V={data:function(){return{banners:[],playlists:[]}},mounted:function(){var t=this;k.a.get("http://localhost:3000/banner").then(function(n,e){t.banners=n.data.banners}),k.a.get("http://localhost:3000/top/playlist?limit=10").then(function(n,e){t.playlists=n.data.playlists})},components:{Banner:X,Playlist:Q}},Z=V,tt=Object(u["a"])(Z,H,B,!1,null,null,null),nt=tt.exports,et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlistinfo layout clearifx"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}}),e("a",{staticClass:"play",on:{click:t.addAll}},[t._v("播放")])]),e("div",{staticClass:"info"},[e("h2",[t._v("> "+t._s(t.playlist.name))]),e("p",{staticClass:"author"},[e("img",{attrs:{src:t.playlist.creator.avatarUrl}}),t._v("\n                "+t._s(t.playlist.creator.nickname)+"\n            ")]),e("div",{staticClass:"introduce"},[e("p",[t._v(t._s(t.playlist.description))])]),e("p",[t._v("\n                标签:\n                "),t._l(t.playlist.tags,function(n,s){return e("span",{key:s},[t._v(t._s(n))])})],2)])]),e("p",{staticClass:"title"},[t._v("\n        歌曲列表\n        "),e("span",{staticClass:"trackCount"},[t._v(t._s(t.playlist.trackCount)+"首歌")]),e("span",{staticClass:"playcount"},[t._v("播放："+t._s(t.playlist.playCount)+"次")])]),e("table",[t._m(0),e("tbody",t._l(t.playlist.tracks,function(n,s){return e("tr",{key:s},[e("td",[t._v(t._s(s))]),e("td",{on:{click:function(e){return t.addSong(n.id)}}},[e("span",{staticClass:"iconfont icon-start"})]),e("td",[e("router-link",{attrs:{to:{name:"SongInfo",params:{id:n.id}}}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])],1),e("td",t._l(n.ar,function(n,s){return e("router-link",{key:s,attrs:{to:{name:"SingerInfo",params:{id:n.id}}}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])}),1),e("td",[e("router-link",{attrs:{to:{name:"AlbumInfo",params:{id:n.al.id}}}},[t._v("\n                        "+t._s(n.al.name)+"\n                    ")])],1)])}),0)])])},st=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("th"),e("th"),e("th",[t._v("歌曲标题")]),e("th",[t._v("歌手")]),e("th",[t._v("专辑")])])}],at={name:"playlistinfo",data:function(){return{playlist:{creator:{avatarUrl:""}}}},watch:{$route:function(t,n){var e=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var s;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C("/playlist/detail?id=",t.params.id);case 2:s=n.sent,200===s.code&&(e.playlist=s.playlist);case 4:case"end":return n.stop()}},n)}))()}},mounted:function(){var t=this,n=this.$router.currentRoute.params.id;Object(_["a"])(regeneratorRuntime.mark(function e(){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C("/playlist/detail?id=",n);case 2:s=e.sent,200===s.code&&(t.playlist=s.playlist),console.log(s);case 5:case"end":return e.stop()}},e)}))()},methods:{addAll:function(){var t=this.playlist.trackIds.map(function(t){return t.id});this.addPlayList(t)},addSong:function(t){this.$store.dispatch("addSong",{id:t})},addPlayList:function(t){this.$store.dispatch("getSongs",{ids:t})}},store:N},it=at,rt=(e("7c10"),Object(u["a"])(it,et,st,!1,null,null,null)),ot=rt.exports,lt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page playlist clearfix layout"},t._l(t.playlists,function(n,s){return e("figure",{key:s},[e("img",{attrs:{src:n.coverImgUrl,alt:""}}),e("figcaption",[e("p",{staticClass:"playlist-article"},[e("router-link",{attrs:{to:{name:"playlistinfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1),e("p",[t._v("by: "+t._s(n.creator.nickname))])])])}),0)},ct=[],ut={name:"playlist",data:function(){return{playlists:[]}},mounted:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C("/top/playlist/highquality","?before=1503639064232&limit=35");case 2:e=n.sent,window.addEventListener("scroll",t.handleScroll),200===e.code&&(t.playlists=e.playlists);case 5:case"end":return n.stop()}},n)}))()},methods:{handleScroll:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.offsetHeight)){n.next=5;break}return n.next=3,C("/top/playlist/highquality","?before=".concat(t.playlists[t.playlists.length-1].updateTime,"&limit=1000"));case 3:e=n.sent,200===e.code&&(t.playlists=t.playlists.concat(e.playlists));case 5:case"end":return n.stop()}},n)}))()}}},pt=ut,dt=(e("5255"),Object(u["a"])(pt,lt,ct,!1,null,null,null)),mt=dt.exports,ft=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"top layout"},[e("ul",{staticClass:"top-list"},t._l(t.Toplist,function(n,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"Top",params:{id:n.id}}}},[t.id===n.id?e("p",{staticClass:"active"},[e("img",{attrs:{src:n.coverImgUrl,alt:n.name}}),t._v("\n                "+t._s(n.name)+"\n            ")]):e("p",[e("img",{attrs:{src:n.coverImgUrl,alt:n.name}}),t._v("\n                "+t._s(n.name)+"\n            ")])])],1)}),0),e("PlayListInfo")],1)},ht=[],vt={name:"top",data:function(){return{Toplist:[],id:19723756}},watch:{$route:function(t,n){this.id=v()(t.params.id)}},mounted:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C("/toplist","");case 2:e=n.sent,200===e.code&&(t.Toplist=e.list);case 4:case"end":return n.stop()}},n)}))()},components:{PlayListInfo:ot}},gt=vt,_t=(e("7986"),Object(u["a"])(gt,ft,ht,!1,null,null,null)),yt=_t.exports,bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"search"},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],attrs:{type:"text"},domProps:{value:t.keywords},on:{input:function(n){n.target.composing||(t.keywords=n.target.value)}}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:[function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.type=n.target.multiple?e:e[0]},function(){t.searched=!1,t.search()}]}},[e("option",{attrs:{value:"1"}},[t._v("歌曲")]),e("option",{attrs:{value:"100"}},[t._v("歌手")]),e("option",{attrs:{value:"1000"}},[t._v("歌单")]),e("option",{attrs:{value:"10"}},[t._v("专辑")])]),e("button",{on:{click:t.search}},[e("span",{staticClass:"iconfont icon-search"})]),e("ul",{directives:[{name:"show",rawName:"v-show",value:0!==t.suggest.length,expression:"suggest.length !== 0"}],staticClass:"search-suggest"},[e("li",{staticClass:"title"},[e("p",[t._v("单曲")]),e("ul",t._l(t.suggest.songs,function(n,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"SongInfo",params:{id:n.id}}}},[t._v("\n                            "+t._s(n.name)+"-"+t._s(n.artists.map(function(t){return t.name}).toString())+"\n                        ")])],1)}),0)]),e("li",{staticClass:"title"},[e("p",[t._v("歌手")]),e("ul",t._l(t.suggest.artists,function(n,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"SingerInfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1)}),0)]),e("li",{staticClass:"title"},[e("p",[t._v("专辑")]),e("ul",t._l(t.suggest.albums,function(n,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"AlbumInfo",params:{id:n.id}}}},[t._v(t._s(n.name)+"-"+t._s(n.artist.name))])],1)}),0)]),e("li",{directives:[{name:"show",rawName:"v-show",value:0!==t.suggest.playlists,expression:"suggest.playlists !== 0"}],staticClass:"title"},[e("p",[t._v("歌单")]),e("ul",t._l(t.suggest.playlists,function(n,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"playlistinfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1)}),0)])])]),e("p",{directives:[{name:"show",rawName:"v-show",value:t.searched,expression:"searched"}],staticClass:"title"},[t._v("\n        搜索“"+t._s(t.keywords)+"”,找到\n        "),e("span",{staticClass:"trackCount"},[t._v(t._s(t.list[t.hash[t.type].countName])+"首"+t._s(t.hash[t.type].tip)+"。")])]),1===parseInt(t.type)&&t.searched?e("table",[t._m(0),e("tbody",t._l(t.list[t.hash[t.type].listName],function(n,s){return e("tr",{key:s},[e("td",[t._v(t._s(s))]),t._m(1,!0),e("td",[e("router-link",{attrs:{to:{name:"SongInfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1),e("td",t._l(n.artists,function(n,s){return e("router-link",{key:s,attrs:{to:{name:"SingerInfo",params:{id:n.id}}}},[t._v(t._s(n.name))])}),1),e("td",[e("router-link",{attrs:{to:{name:"AlbumInfo",params:{id:n.album.id}}}},[t._v(t._s(n.album.name))])],1)])}),0)]):t._e(),100===parseInt(t.type)?e("div",{staticClass:"artists"},t._l(t.list[t.hash[t.type].listName],function(n,s){return e("figure",{key:s},[e("img",{attrs:{src:n.img1v1Url,alt:""}}),e("figcaption",[e("p",{staticClass:"playlist-article"},[e("router-link",{attrs:{to:{name:"SingerInfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1)])])}),0):t._e(),1e3===parseInt(t.type)?e("div",{staticClass:"artists"},t._l(t.list[t.hash[t.type].listName],function(n,s){return e("figure",{key:s},[e("img",{attrs:{src:n.coverImgUrl,alt:""}}),e("figcaption",[e("p",{staticClass:"playlist-article"},[e("router-link",{attrs:{to:{name:"playlistinfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1),e("p",[t._v("by: "+t._s(n.creator.nickname))])])])}),0):t._e(),10===parseInt(t.type)?e("div",{staticClass:"artists"},t._l(t.list[t.hash[t.type].listName],function(n,s){return e("figure",{key:s},[e("img",{attrs:{src:n.blurPicUrl,alt:""}}),e("figcaption",[e("p",{staticClass:"playlist-article"},[e("router-link",{attrs:{to:{name:"AlbumInfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1),e("p",[t._v("\n                    by: "+t._s(n.artists.map(function(t){return t.name}).toString())+"\n                ")])])])}),0):t._e()])},kt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("th"),e("th"),e("th",[t._v("歌曲标题")]),e("th",[t._v("歌手")]),e("th",[t._v("专辑")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("td",[e("span",{staticClass:"iconfont icon-start"})])}],wt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"panel"},[e("ul",[e("li",[t._v("单曲")]),e("li",[t._v("歌手")]),e("li",[t._v("专辑")]),e("li",[t._v("歌单")])]),e("div"),e("div"),e("div")])}],xt={name:"panel"},St=xt,$t=Object(u["a"])(St,wt,Ct,!1,null,null,null),Ot=$t.exports,Nt={name:"search",data:function(){return{hash:{1:{tip:"单曲",countName:"songCount",listName:"songs"},100:{tip:"歌手",countName:"artistCount",listName:"artists"},1000:{tip:"歌单",countName:"playlistCount",listName:"playlists"},10:{tip:"专辑",countName:"albumCount",listName:"albums"}},keywords:"",suggest:[],list:{},searched:!1,type:1}},watch:{keywords:function(t){var n=this;Object(_["a"])(regeneratorRuntime.mark(function e(){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""===t){e.next=7;break}return e.next=3,C("/search/suggest?keywords=",t);case 3:s=e.sent,200===s.code&&(n.suggest=s.result,console.log(n.suggest)),e.next=8;break;case 7:n.suggest=[];case 8:case"end":return e.stop()}},e)}))()}},methods:{search:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(""===t.keywords){n.next=5;break}return n.next=3,C("/search?type=".concat(t.type,"&keywords="),t.keywords);case 3:e=n.sent,200===e.code&&(t.list=e.result,t.searched=!0);case 5:case"end":return n.stop()}},n)}))()}},components:{Panel:Ot}},Pt=Nt,jt=(e("43cf"),Object(u["a"])(Pt,bt,kt,!1,null,null,null)),It=jt.exports,Lt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlistinfo layout clearifx"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.artist.picUrl,alt:""}}),e("a",{staticClass:"play",on:{click:t.addAll}},[t._v("播放")])]),e("div",{staticClass:"info"},[e("h2",[t._v("> "+t._s(t.artist.name))]),e("div",{staticClass:"introduce"},[e("p",[t._v(t._s(t.artist.briefDesc))])])])]),e("p",{staticClass:"title"},[t._v("\n        歌曲列表\n        "),e("span",{staticClass:"trackCount"},[t._v(t._s(t.hotSongs.length)+"首歌")])]),e("table",[t._m(0),e("tbody",t._l(t.hotSongs,function(n,s){return e("tr",{key:s},[e("td",[t._v(t._s(s))]),e("td",{on:{click:function(e){return t.addSong(n.id)}}},[e("span",{staticClass:"iconfont icon-start"})]),e("td",[e("router-link",{attrs:{to:{name:"SongInfo",params:{id:n.id}}}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])],1),e("td",t._l(n.ar,function(n,s){return e("router-link",{key:s,attrs:{to:{name:"SingerInfo",params:{id:n.id}}}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])}),1),e("td",[e("router-link",{attrs:{to:{name:"AlbumInfo",params:{id:n.al.id}}}},[t._v("\n                        "+t._s(n.al.name)+"\n                    ")])],1)])}),0)])])},Rt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("th"),e("th"),e("th",[t._v("歌曲标题")]),e("th",[t._v("歌手")]),e("th",[t._v("专辑")])])}],Tt={data:function(){return{artist:[],hotSongs:[]}},mounted:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C("/artists?id=",t.$router.currentRoute.params.id);case 2:e=n.sent,200===e.code&&(t.artist=e.artist,t.hotSongs=e.hotSongs);case 4:case"end":return n.stop()}},n)}))()},methods:{addAll:function(){var t=this.hotSongs.map(function(t){return t.id});this.addPlayList(t)},addSong:function(t){this.$store.dispatch("addSong",{id:t})},addPlayList:function(t){this.$store.dispatch("getSongs",{ids:t})}}},Et=Tt,Ut=Object(u["a"])(Et,Lt,Rt,!1,null,null,null),At=Ut.exports,Ht=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlistinfo layout clearifx"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.album.picUrl,alt:""}}),e("a",{staticClass:"play",on:{click:t.addAll}},[t._v("播放")])]),e("div",{staticClass:"info"},[e("h2",[t._v("> "+t._s(t.album.name))]),e("div",{staticClass:"introduce"},[e("p",[t._v(t._s(t.album.description))])])])]),e("p",{staticClass:"title"},[t._v("\n        歌曲列表\n        "),e("span",{staticClass:"trackCount"},[t._v(t._s(t.songs.length)+"首歌")])]),e("table",[t._m(0),e("tbody",t._l(t.songs,function(n,s){return e("tr",{key:s},[e("td",[t._v(t._s(s))]),e("td",{on:{click:function(e){return t.addSong(n.id)}}},[e("span",{staticClass:"iconfont icon-start"})]),e("td",[e("router-link",{attrs:{to:{name:"SongInfo",params:{id:n.id}}}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])],1),e("td",t._l(n.ar,function(n,s){return e("router-link",{key:s,attrs:{to:{name:"SingerInfo",params:{id:n.id}}}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])}),1)])}),0)])])},Bt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("th"),e("th"),e("th",[t._v("歌曲标题")]),e("th",[t._v("歌手")])])}],Mt={data:function(){return{album:[],songs:[]}},mounted:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,C("/album?id=",t.$router.currentRoute.params.id);case 2:e=n.sent,200===e.code&&(t.album=e.album,t.songs=e.songs,console.log(e));case 4:case"end":return n.stop()}},n)}))()},methods:{addAll:function(){var t=this.songs.map(function(t){return t.id});this.addPlayList(t)},addSong:function(t){console.log(t),this.$store.dispatch("addSong",{id:t})},addPlayList:function(t){this.$store.dispatch("getSongs",{ids:t})}}},Wt=Mt,qt=Object(u["a"])(Wt,Ht,Bt,!1,null,null,null),Jt=qt.exports,Dt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlistinfo layout clearifx"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.song.al.picUrl,alt:""}}),e("a",{staticClass:"play",on:{click:function(n){return t.addSong(t.song.id)}}},[t._v("播放")])]),e("div",{staticClass:"info"},[e("h2",[t._v("> "+t._s(t.song.name))]),e("div",{staticClass:"introduce"},[e("p",[t._v("\n                    歌手：\n                    "),t._l(t.song.ar,function(n,s){return e("span",{key:s},[t._v(t._s(n.name))])})],2),e("p",[t._v("所属专辑："+t._s(t.song.al.name))]),e("ul",t._l(t.lyric,function(n,s){return e("li",{key:s},[t._v(t._s(n.lyr))])}),0)])])])])},Xt=[],Yt={data:function(){return{song:{al:{picUrl:""}},lyric:[]}},mounted:function(){var t=this;Object(_["a"])(regeneratorRuntime.mark(function n(){var e,s,a;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e=t.$router.currentRoute.params.id,n.next=3,C("/song/detail?ids=",e);case 3:return s=n.sent,n.next=6,C("/lyric?id=",e);case 6:a=n.sent,200===s.code&&(t.song=s.songs[0]),200===a.code&&(a.hasOwnProperty("uncollected")||a.hasOwnProperty("nolyric")?t.lyric=O("[00:00.000] 暂无歌词\n"):t.lyric=O(a.lrc.lyric));case 9:case"end":return n.stop()}},n)}))()},methods:{addSong:function(t){this.$store.dispatch("addSong",{id:t})}}},zt=Yt,Ft=Object(u["a"])(zt,Dt,Xt,!1,null,null,null),Gt=Ft.exports;s["a"].use(A["a"]);var Kt=new A["a"]({routes:[{path:"/",name:"home",component:nt},{path:"/playlistinfo/:id",name:"playlistinfo",component:ot},{path:"/PlayList",name:"PlayList",component:mt},{path:"/Top/:id",name:"Top",component:yt},{path:"/Search",name:"Search",component:It},{path:"/SingerInfo/:id",name:"SingerInfo",component:At},{path:"/AlbumInfo/:id",name:"AlbumInfo",component:Jt},{path:"SongInfo/:id",name:"SongInfo",component:Gt}]});s["a"].config.productionTip=!1,new s["a"]({router:Kt,store:N,render:function(t){return t(U)}}).$mount("#app")},5912:function(t,n,e){},"5d5f":function(t,n,e){},"64a9":function(t,n,e){},"6d80":function(t,n,e){},"782e":function(t,n,e){},7986:function(t,n,e){"use strict";var s=e("6d80"),a=e.n(s);a.a},"7c10":function(t,n,e){"use strict";var s=e("3188"),a=e.n(s);a.a},"836f":function(t,n,e){},"8baf":function(t,n,e){"use strict";var s=e("782e"),a=e.n(s);a.a},de57:function(t,n,e){"use strict";var s=e("5912"),a=e.n(s);a.a},dfba:function(t,n,e){"use strict";var s=e("04b2"),a=e.n(s);a.a},f230:function(t,n,e){"use strict";var s=e("836f"),a=e.n(s);a.a}});
//# sourceMappingURL=app.e9ff0360.js.map