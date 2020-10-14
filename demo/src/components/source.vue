<template>
  <div>
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.source.Title1") }}</p>
      <div style="height: 100%;width:100%">
        <iframe style="width:50%;height: 540px" src="//player.bilibili.com/player.html?aid=20422893&bvid=BV1oW411x7tP&cid=33384035&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
<!--      <div v-on:click="playVideo()">-->
<!--        <video :src="videoSrc" controls id="videoPlay" v-show="true" class="video">您的浏览器不支持 video 视屏播放。</video>-->
<!--      </div>-->
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "source",
    data() {
      return {
        videoSrc: "https://www.bilibili.com/video/BV1oW411x7tP/", //获取视频播放资源路径
      };
    },
    methods: {
      playVideo() {
        console.log('播放')
        let vdo = document.getElementById("videoPlay");
        vdo.play();
        console.log(vdo)
        console.log(this)
      },
    },
  }
</script>

<style scoped>

  #white {
    margin: 50px auto;
    text-align: center;
    background-color: #efefef;
    color: #000000;
  }
  .title{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
    line-height: 40px;
  }
  .content {
    color: white;
    font-size: large;
    line-height: 28px;
    letter-spacing: 0px;
    background-color: #48b78f;
    margin: 50px auto;
    width: 70%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
</style>
