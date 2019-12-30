<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.earlyPicLessonTitle1") }}</el-header>
      <el-main>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle2") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson1") }}</p>
        <p class="text">
          {{ $t("content.children.earlyPicLesson2") }}
          <a @click="toFrendly"><b>{{ $t("content.children.earlyPicLesson3") }}</b></a>
          {{ $t("content.children.earlyPicLesson4") }}
        </p>
        <p class="title" style="margin-top: 10px">{{ $t("content.children.earlyPicLessonTitle3") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson5") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle4") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson6") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson7") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle5") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle6") }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "earlyPicLesson",
        methods: {
            toFrendly() {
                this.$router.push("/statusAndMission");
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
  .content {
    color: white;
    font-size: large;
    line-height: 28px;
    font-family: "Microsoft YaHei";
    letter-spacing: 0px;
    background-color: #48b78f;
    margin: 50px auto;
    width: 92%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
</style>
