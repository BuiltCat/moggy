(function(t){function n(n){for(var i,a,o=n[0],c=n[1],u=n[2],l=0,p=[];l<o.length;l++)a=o[l],s[a]&&p.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(n);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,a=1;a<e.length;a++){var c=e[a];0!==s[c]&&(i=!1)}i&&(r.splice(n--,1),t=o(o.s=e[0]))}return t}var i={},s={app:0},r=[];function a(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"69260e02"}[t]+".js"}function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var n=[],e=s[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise(function(n,i){e=s[t]=[n,i]});n.push(e[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=a(t),r=function(n){c.onerror=c.onload=null,clearTimeout(u);var e=s[t];if(0!==e){if(e){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,a=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");a.type=i,a.request=r,e[1](a)}s[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},o.m=t,o.c=i,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)o.d(e,i,function(n){return t[n]}.bind(null,i));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var f=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("64a9"),s=e.n(i);s.a},"04b2":function(t,n,e){},3188:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("主页")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view",{attrs:{id:"main"}}),e("Audio")],1)},r=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"audio"},[e("audio",{ref:"audio",attrs:{src:t.songUrl}}),e("div",{staticClass:"audio-controls clearfix"},[e("div",{staticClass:"audio-avatar",on:{click:t.play}},[e("img",{attrs:{src:t.picUrl}}),e("span",{staticClass:"iconfont",class:this.isPlay?"icon-pause":"icon-start"})]),e("div",{staticClass:"audio-info"},[e("p",[t._v(t._s(t.song)+" - "+t._s(t.singer))]),e("p",[t._v(t._s(t.s_2_hs(t.currentTime))+" / "+t._s(t.s_2_hs(t.duration)))]),e("div",{staticClass:"progress-bar",on:{click:t.progress}},[e("div",{staticClass:"inline-bar",style:t.progressWidth})])]),e("ul",{staticClass:"audio-operation"},[e("li",{on:{click:t.prev}},[e("span",{staticClass:"iconfont icon-prev"})]),t._m(0),e("li",{on:{click:t.next}},[e("span",{staticClass:"iconfont icon-next"})]),e("li",[e("div",{staticClass:"sound"},[e("div",{staticClass:"sound-tool",on:{click:t.volume}},[e("div",{style:t.volumeHeight})])]),e("span",{staticClass:"iconfont icon-sound"})]),e("li",[e("span",{staticClass:"iconfont icon-list",on:{click:function(n){t.lyricPanel=!t.lyricPanel}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.lyricPanel,expression:"lyricPanel"}],staticClass:"lyric-tool clearfix"},[e("ul",[e("li",[t._v("播放列表")]),t._l(t.songs,function(n,i){return e("li",{key:i},[t._v("\n                            "+t._s(n.name)+"\n                        ")])})],2),e("ul",t._l(t.lyric,function(n,i){return e("li",{key:i},[t.isLyric(i,n,t.currentTime)?e("p",{staticClass:"active"},[t._v(t._s(n.lyr))]):e("p",[t._v(t._s(n.lyr))])])}),0)])])])])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"iconfont icon-spot"})])}],c=e("e814"),u=e.n(c),l=(e("6b54"),e("7f7f"),e("cebc")),f=(e("96cf"),e("3b8d")),p=e("59ad"),h=e.n(p),d=(e("ac6a"),e("28a5"),e("2f62")),m=e("bc3a"),g=e.n(m),v="http://localhost:3000";function y(t,n){return b.apply(this,arguments)}function b(){return b=Object(f["a"])(regeneratorRuntime.mark(function t(n,e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("".concat(v).concat(n).concat(e));case 2:if(i=t.sent,200!==i.status){t.next=7;break}return t.abrupt("return",i.data);case 7:return t.abrupt("return",{code:-1});case 8:case"end":return t.stop()}},t)})),b.apply(this,arguments)}i["a"].use(d["a"]);var _=new d["a"].Store({state:{songs:[],lyric:[]},getters:{},mutations:{getSongs:function(t,n){t.songs=n.songs},getLyric:function(t,n){var e=new Array,i=n.lyric.split("\n");i.forEach(function(t){var n=t.substring(t.indexOf("[")+1,t.indexOf("]")).split(":");e.push({time:h()(60*n[0])+h()(n[1]),lyr:t.substring(t.indexOf("]")+1,t.length)})}),t.lyric=e}},actions:{getSongs:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(n){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y("/song/detail?ids=",[347230,405998841,33894312,1356981584].toString());case 2:e=t.sent,200===e.code&&n.commit("getSongs",{songs:e.songs});case 4:case"end":return t.stop()}},t)}));function n(n){return t.apply(this,arguments)}return n}(),getLyric:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(n,e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y("/lyric?id=",e.id);case 2:i=t.sent,200===i.code&&n.commit("getLyric",{lyric:i.lrc.lyric});case 4:case"end":return t.stop()}},t)}));function n(n,e){return t.apply(this,arguments)}return n}()}}),w={class:"audio",data:function(){return{whenNum:1,isPlay:!0,currentTime:"",duration:0,progressWidth:{width:0},volumeHeight:{height:"90px"},lyricPanel:!1}},computed:Object(l["a"])({},Object(d["b"])(["songs","lyric"]),{song:function(){return this.songs.length?this.songs[this.whenNum].name:""},singer:function(){return this.songs.length?this.songs[this.whenNum].ar.map(function(t){return t.name}).toString():""},songUrl:function(){return this.songs.length?this.getSongUrl(this.songs[this.whenNum].id):""},picUrl:function(){return this.songs.length?this.songs[this.whenNum].al.picUrl:""}}),watch:{currentTime:function(){this.progressWidth.width="".concat(700*this.currentTime/this.duration,"px")}},mounted:function(){y("/song/detail?ids=","347230,405998841,33894312,1356981584"),this.$store.dispatch("getSongs"),this.$refs.audio.addEventListener("timeupdate",function(){this.currentTime=this.$refs.audio.currentTime,this.duration=this.$refs.audio.duration,isNaN(this.duration)&&(this.duration=0)}.bind(this)),this.$refs.audio.addEventListener("ended",function(){this.next()}.bind(this))},methods:{getSongUrl:function(t){return this.$store.dispatch("getLyric",{id:t}),"https://music.163.com/song/media/outer/url?id=".concat(t,".mp3")},play:function(){this.isPlay?this.$refs.audio.pause():this.$refs.audio.play(),this.isPlay=!this.isPlay},prev:function(){0===this.whenNum?this.whenNum=this.songs.length-1:this.whenNum--,this.currentTime=0},next:function(){this.whenNum===this.songs.length-1?this.whenNum=0:this.whenNum++,this.currentTime=0},progress:function(t){this.$refs.audio.currentTime=this.$refs.audio.duration*t.offsetX/700,!1===this.isPlay&&(this.$refs.audio.play(),this.isPlay=!this.isPlay)},volume:function(t){var n=(90-t.offsetY)/90;this.volumeHeight.height="".concat(90*n,"px"),this.$refs.audio.volume=n},s_2_hs:function(t){var n=u()(t/60),e=u()(t%60);return"".concat(this.PrefixInteger(n,2),":").concat(this.PrefixInteger(e,2))},PrefixInteger:function(t,n){return(Array(n).join("0")+t).slice(-n)},isLyric:function(t,n,e){return t<this.lyric.length&&n.time<=e&&this.lyric[t+1].time>e}},store:_},x=w,C=(e("de57"),e("2877")),k=Object(C["a"])(x,a,o,!1,null,null,null),P=k.exports,O={id:"app",components:{Audio:P}},j=O,N=(e("034f"),Object(C["a"])(j,s,r,!1,null,null,null)),$=N.exports,T=e("8c4f"),S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home layout"},[e("Banner",{attrs:{banners:t.banners}}),e("Playlist",{attrs:{playlists:t.playlists}})],1)},U=[],E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("a",{staticClass:"content",attrs:{href:t.url}},[e("img",{attrs:{src:t.imageUrl,alt:"banner"}})]),e("a",{staticClass:"aside left",on:{click:function(n){t.pageNum--}}},[e("span",{staticClass:"iconfont icon-p-left"})]),e("a",{staticClass:"aside right",on:{click:function(n){t.pageNum++}}},[e("span",{staticClass:"iconfont icon-p-right"})]),e("ul",{staticClass:"list"},t._l(t.banners,function(n,i){return e("li",{key:i},[t.pageNum===i?e("span",{staticClass:"iconfont icon-spot active"}):e("span",{staticClass:"iconfont icon-spot"})])}),0)])},L=[],R={name:"banner",data:function(){return{imageUrl:"",url:"",pageNum:0}},props:{banners:Array},watch:{banners:function(){this.changeBanner(this.pageNum),setInterval(function(){this.pageNum++}.bind(this),3e3)},pageNum:function(t){t<0?this.pageNum=this.banners.length-1:t<this.banners.length?this.changeBanner(t):this.pageNum=0}},methods:{changeBanner:function(t){this.imageUrl=this.banners[t].imageUrl,this.url=this.banners[t].url}}},A=R,I=(e("f230"),Object(C["a"])(A,E,L,!1,null,null,null)),B=I.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlist clearfix"},[e("div",{staticClass:"playlist-title clearfix"},[e("router-link",{attrs:{to:"/"}},[t._v("· · ·")]),e("h2",[t._v("热门推荐")])],1),t._l(t.playlists,function(n,i){return e("figure",{key:i},[e("img",{attrs:{src:n.coverImgUrl,alt:""}}),e("figcaption",[e("p",{staticClass:"playlist-article"},[e("router-link",{attrs:{to:{name:"playlistinfo",params:{id:n.id}}}},[t._v(t._s(n.name))])],1),e("p",[t._v("by: "+t._s(n.creator.nickname))])])])})],2)},H=[],W={name:"playlist",props:{playlists:Array},mounted:function(){}},J=W,q=(e("dfba"),Object(C["a"])(J,M,H,!1,null,null,null)),X=q.exports,Y={data:function(){return{banners:[],playlists:[]}},mounted:function(){var t=this;g.a.get("http://localhost:3000/banner").then(function(n,e){t.banners=n.data.banners}),g.a.get("http://localhost:3000/top/playlist?limit=10").then(function(n,e){t.playlists=n.data.playlists})},components:{Banner:B,Playlist:X}},z=Y,D=Object(C["a"])(z,S,U,!1,null,null,null),F=D.exports,G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playlistinfo layout"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),e("div",{staticClass:"info"},[e("h2",[t._v(t._s(t.playlist.name))]),e("p",[t._v(t._s(t.playlist.creator.nickname))]),e("p",[t._v(t._s(t.playlist.description))])])])])},K=[],Q=(e("4be7"),{name:"playlistinfo",data:function(){return{playlist:{}}},mounted:function(){var t=this,n=this.$router.currentRoute.params.id;Object(f["a"])(regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y("/playlist/detail?id=",n);case 2:i=e.sent,200===i.code&&(t.playlist=i.playlist),console.log(t.playlist);case 5:case"end":return e.stop()}},e)}))()}}),V=Q,Z=(e("7c10"),Object(C["a"])(V,G,K,!1,null,null,null)),tt=Z.exports;i["a"].use(T["a"]);var nt=new T["a"]({routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/playlistinfo/:id",name:"playlistinfo",component:tt}]});i["a"].config.productionTip=!1,new i["a"]({router:nt,store:_,render:function(t){return t($)}}).$mount("#app")},5912:function(t,n,e){},"64a9":function(t,n,e){},"7c10":function(t,n,e){"use strict";var i=e("3188"),s=e.n(i);s.a},"836f":function(t,n,e){},de57:function(t,n,e){"use strict";var i=e("5912"),s=e.n(i);s.a},dfba:function(t,n,e){"use strict";var i=e("04b2"),s=e.n(i);s.a},f230:function(t,n,e){"use strict";var i=e("836f"),s=e.n(i);s.a}});
//# sourceMappingURL=app.82e1a05a.js.map