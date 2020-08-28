<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.natureTitle") }}</el-header>
      <el-main>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.natureTitle1") }}</p>
        <p class="text">{{ $t("content.children.nature11") }}</p>
        <p class="text">{{ $t("content.children.nature12") }}</p>
        <p class="text">{{ $t("content.children.nature13") }}</p>
        <p class="text">{{ $t("content.children.nature14") }}</p>
        <div class="block" style="width: 100%;">
          <span class="demonstration"></span>
          <el-carousel height="600px">
            <el-carousel-item>
              <img src="@/assets/pic/nature1.jpg" style="width: 100%">
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/pic/nature2.jpg" style="width: 100%">
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/pic/nature3.jpg" style="width: 100%">
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/pic/nature4.jpg" style="width: 100%" >
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/pic/nature5.jpg" style="width: 100%">
            </el-carousel-item>
            <el-carousel-item>
              <img src="@/assets/pic/nature6.jpg" style="width: 100%">
            </el-carousel-item>
          </el-carousel>
        </div>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.natureTitle2") }}</p>
        <p class="text">{{ $t("content.children.nature21") }}</p>
        <p class="text">{{ $t("content.children.nature22") }}</p>
        <p class="text">{{ $t("content.children.nature23") }}</p>
        <p class="text">{{ $t("content.children.nature24") }}</p>
        <pre><p class="text1" style="font-size: 18px">{{ $t("content.children.nature25") }}</p></pre>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.natureTitle3") }}</p>
        <p class="text">{{ $t("content.children.nature31") }}</p>

        <p class="title1" style="margin-top: 0px">{{ $t("content.children.leaderTitle4") }}</p>
        <p><a @click="toEarlyPicLesson"><i>{{ $t("content.children.atlasLink1") }}</i></a></p>
        <p><a @click="toFriendly"><i>{{ $t("content.children.atlasLink2") }}</i></a></p>
        <p><a @click="toLeader"><i>{{ $t("content.children.atlasLink3") }}</i></a></p>
        <p><a @click="toGarden"><i>{{ $t("content.children.atlasLink4") }}</i></a></p>
        <p><a @click="toGreen"><i>{{ $t("content.children.atlasLink5") }}</i></a></p>
        <p><a @click="toAtlas"><i>{{ $t("content.children.atlasLink7") }}</i></a></p>

      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "guardiansOfNature",
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
          toGarden() {
            this.$router.push("/gardenSchool");
            window.location.reload();
          },
          toGreen() {
            this.$router.push("/greenPhilosophy");
            window.location.reload();
          },
          toAtlas() {
            this.$router.push("/atlas");
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
    font-weight: bold;
    padding-top: 30px;
    text-align: left;
    font-size: 26px;
    text-indent: 32px;
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
    padding: 20px;
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
