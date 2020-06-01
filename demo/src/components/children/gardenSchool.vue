<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.gardenTitle1") }}</el-header>
      <el-main>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.gardenTitle2") }}</p>
        <p class="text">{{ $t("content.children.garden11") }}</p>
        <p class="text">{{ $t("content.children.garden12") }}</p>
        <p class="text">{{ $t("content.children.garden13") }}</p>
        <img src="@/assets/garden1.jpg" style="width: 70%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.gardenTitle3") }}</p>
        <p class="text">{{ $t("content.children.garden21") }}</p>
        <p class="text">{{ $t("content.children.garden22") }}</p>
        <p class="text">{{ $t("content.children.garden23") }}</p>
        <p class="text">{{ $t("content.children.garden24") }}</p>
        <p class="text">{{ $t("content.children.garden25") }}</p>
        <img src="@/assets/garden5.jpg" style="width: 70%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.gardenTitle4") }}</p>
        <p class="text">{{ $t("content.children.garden31") }}</p>
        <p class="text">{{ $t("content.children.garden32") }}</p>
        <pre><p class="text1" style="font-size: 18px">{{ $t("content.children.garden33") }}</p></pre>
        <img src="@/assets/garden2.jpg" style="width: 70%">
        <img src="@/assets/garden3.jpg" style="width: 70%">
        <img src="@/assets/garden4.jpg" style="width: 70%">
        <img src="@/assets/garden6.jpg" style="width: 70%">
        <p class="title1" style="margin-top: 0px">{{ $t("content.children.leaderTitle4") }}</p>
        <p><a @click="toEarlyPicLesson"><i>{{ $t("content.children.atlasLink1") }}</i></a></p>
        <p><a @click="toFriendly"><i>{{ $t("content.children.atlasLink2") }}</i></a></p>
        <p><a @click="toLeader"><i>{{ $t("content.children.atlasLink3") }}</i></a></p>
        <p><a @click="toAtlas"><i>{{ $t("content.children.atlasLink7") }}</i></a></p>
        <p><a @click="toGreen"><i>{{ $t("content.children.atlasLink5") }}</i></a></p>
        <p><a @click="toNature"><i>{{ $t("content.children.atlasLink6") }}</i></a></p>

      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "gardenSchool",
        methods: {
          toEarlyPicLesson() {
                this.$router.push("/earlyPicLesson");
                window.location.reload();
          },
          toFriendly() {
            this.$router.push("/friendlyLesson");
            window.location.reload();
          },
          toLeader() {
            this.$router.push("/leadershipLesson");
            window.location.reload();
          },
          toAtlas() {
            this.$router.push("/atlas");
            window.location.reload();
          },
          toGreen() {
            this.$router.push("/greenPhilosophy");
            window.location.reload();
          },
          toNature() {
            this.$router.push("/guardiansOfNature");
            window.location.reload();
          },
        }
    }
</script>

<style scoped>
  a {color: cornflowerblue;}
  a:hover {color:lightblue;cursor:pointer;text-decoration:underline;}
  a:active {color:white;}
  .title{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
  .title1{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
  }
  .text1{
    text-align: left;
    padding-left: 40px;
    font-family:"Microsoft YaHei",serif;
  }
  .content {
    color: black;
    font-size: large;
    line-height: 28px;
    letter-spacing: 0px;
    background-color: #efefef;
    margin: 50px auto;
    width: 70%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
</style>
