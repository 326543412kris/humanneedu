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
        <img src="@/assets/image001.png">
        <img src="@/assets/lesson01.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle7") }}</p>
        <img src="@/assets/image002.png">
        <img src="@/assets/lesson02.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle8") }}</p>
        <img src="@/assets/image003.png">
        <img src="@/assets/lesson03.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle9") }}</p>
        <img src="@/assets/image004.png">
        <img src="@/assets/lesson04.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle10") }}</p>
        <img src="@/assets/image005.png">
        <img src="@/assets/lesson05.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle11") }}</p>
        <img src="@/assets/image006.png">
        <img src="@/assets/lesson061.png" style="width: 100%">
        <img src="@/assets/lesson062.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle12") }}</p>
        <img src="@/assets/image007.png">
        <img src="@/assets/lesson07.png" style="width: 100%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle13") }}</p>
        <img src="@/assets/image008.jpg">
        <img src="@/assets/lesson08.png" style="width: 100%">
        <p class="title1" style="margin-top: 0px">{{ $t("content.children.leaderTitle4") }}</p>
        <p><a @click="toAtlas"><i>{{ $t("content.children.atlasLink7") }}</i></a></p>
        <p><a @click="toFriendly"><i>{{ $t("content.children.atlasLink2") }}</i></a></p>
        <p><a @click="toLeader"><i>{{ $t("content.children.atlasLink3") }}</i></a></p>
        <p><a @click="toGarden"><i>{{ $t("content.children.atlasLink4") }}</i></a></p>
        <p><a @click="toGreen"><i>{{ $t("content.children.atlasLink5") }}</i></a></p>
        <p><a @click="toNature"><i>{{ $t("content.children.atlasLink6") }}</i></a></p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "earlyPicLesson",
        methods: {
          toAtlas() {
            this.$router.push("/atlas");
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
  a {color: cornflowerblue;}
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
    letter-spacing: 0px;
    background-color: #48b78f;
    margin: 50px auto;
    width: 70%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
  .title1{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
</style>
