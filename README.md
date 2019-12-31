# Moggy Music Webapp

##  在线演示
- [项目预览](http://47.101.35.46/moggy/)x
- 为了更好的体验，请用开发者工具模拟移动端体验
- 扫描二维码在手机上体验
- ![avatar](./show/code.png)
## 主要技术栈
### 前端
- `Vue`：用于构建用户界面的 MVVM 框架。它的核心是响应的数据绑定和组系统件
- `vue-router`：为单页面应用提供的路由系统，项目上线前使用 Lazy Loading Routes 来实现异步加载优化性能
- `vuex`：Vue 的集中状态管理，在多个组件共享某些状态时非常便捷，适用于中大型项目
- `ES6`：项目中用到的模块化、解构赋值、Promise、Class 等方法非常好用
- `axios`：基于 promise 的 HTTP 库，请求数据简洁，易用

### 自动化构建及其他工具

- `vue-cli`：Vue 脚手架工具，快速初始化项目代码，以及 webpack 的配置
### 后端

- `jsonp`：服务端通讯。抓取 QQ音乐(移动端)数据（后面数据改为全部用axios实现抓取）

## 数据来源
[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
## 实现功能
1. 音乐播放
2. 歌词滚动展示
3. 推荐页面 
4. 歌单信息页
5. 歌手信息页
6. 排行页
7. 搜索页
## 项目结构
```
|-- src
    |-- App.vue 
    |-- main.js 入口页面
    |-- router.js 路由
    |-- store.js  vuex
    |-- components 组件
    |   |-- Audio.vue
    |   |-- Banner.vue
    |   |-- Header.vue
    |   |-- Panel.vue
    |   |-- Playlist.vue
    |-- utils 常用工具
    |   |-- model.js
    |   |-- tool.js
    |-- views 页面
        |-- AlbumInfo.vue
        |-- Home.vue
        |-- PlayList.vue
        |-- PlayListInfo.vue
        |-- Search.vue
        |-- SingerInfo.vue
        |-- SongInfo.vue
        |-- Top.vue

```
### 安装
```
# Clone
git clone https://github.com/BuiltCat/moggy.git

# Install
npm install

# Serve
npm run serve

# Build
npm run build
```