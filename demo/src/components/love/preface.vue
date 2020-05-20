<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.love.preface.title1") }}</el-header>
      <el-main>
        <p class="text">{{ $t("content.love.preface.text11") }}</p>
        <p class="text">{{ $t("content.love.preface.text12") }}</p>
        <p class="text">{{ $t("content.love.preface.text13") }}</p>
        <p class="text">{{ $t("content.love.preface.text14") }}</p>
        <p class="text">{{ $t("content.love.preface.text15") }}</p>
        <pre><p class="textPre">{{ $t("content.love.preface.text16") }}</p></pre>
      </el-main>
      <el-header class="title">{{ $t("content.love.preface.title3") }}</el-header>
      <el-main>
        <img src="@/assets/TheGryphonPresslogo.jpg" style="width: 30%">
        <p class="text" style="margin-top: 0px">{{ $t("content.love.preface.text31") }}</p>
      </el-main>
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.love.preface.title2") }}</el-header>
      <el-main>
        <p class="text">{{ $t("content.love.preface.text21") }}</p>
        <p class="text">{{ $t("content.love.preface.text22") }}</p>
        <p class="text">{{ $t("content.love.preface.text23") }}</p>
        <p class="text">{{ $t("content.love.preface.text24") }}</p>
        <p class="text">{{ $t("content.love.preface.text25") }}</p>
        <p class="text">{{ $t("content.love.preface.text26") }}</p>
        <p class="text">{{ $t("content.love.preface.text27") }}</p>
        <p class="text">{{ $t("content.love.preface.text28") }}</p>
        <pre><p class="textPre">{{ $t("content.love.preface.textEnd") }}</p></pre>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "preface",
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
          toNature() {
            this.$router.push("/guardiansOfNature");
            window.location.reload();
          },
        }
    }
</script>

<style scoped>
  a {color: lightblue;}
  a:hover {color:lightblue;cursor:pointer;text-decoration:underline;}
  a:active {color:white;}
  .title{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
  }
  .textPre{
    text-align: right;
    padding: 10px;
    font-size: 20px;
  }
  .content {
    color: black;
    font-size: large;
    line-height: 28px;
    letter-spacing: 0px;
    background-color: #ffffff;
    margin: 50px auto;
    width: 70%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
</style>
