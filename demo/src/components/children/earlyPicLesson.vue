<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.earlyPicLessonTitle1") }}</el-header>
      <el-main>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle2") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson1") }}</p>
        <p class="text">
          {{ $t("content.children.earlyPicLesson2") }}
          <a @click="toPic"><b>{{ $t("content.children.earlyPicLesson3") }}</b></a>
          {{ $t("content.children.earlyPicLesson4") }}
        </p>
        <p class="title" style="margin-top: 10px">{{ $t("content.children.earlyPicLessonTitle3") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson5") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle4") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson6") }}</p>
        <p class="text">{{ $t("content.children.earlyPicLesson7") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle5") }}</p>
        <a @click="toCookie"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle6") }}</p>
          <img src="@/assets/image001.png"></a>
        <img src="@/assets/lesson01.png" style="width: 100%">
        <a @click="toFur"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle7") }}</p>
          <img src="@/assets/image002.png"></a>
        <img src="@/assets/lesson02.png" style="width: 100%">
        <a @click="toReady"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle8") }}</p>
          <img src="@/assets/image003.png"></a>
        <img src="@/assets/lesson03.png" style="width: 100%">
        <a @click="toBuddy"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle9") }}</p>
          <img src="@/assets/image004.png"></a>
        <img src="@/assets/lesson04.png" style="width: 100%">
        <a @click="toRainCat"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle10") }}</p>
          <img src="@/assets/image005.png"></a>
        <img src="@/assets/lesson05.png" style="width: 100%">
        <a @click="toDakota"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle11") }}</p>
          <img src="@/assets/image006.png"></a>
        <img src="@/assets/lesson061.png" style="width: 100%">
        <img src="@/assets/lesson062.png" style="width: 100%">
        <a @click="toMax"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle12") }}</p>
          <img src="@/assets/image007.png"></a>
        <img src="@/assets/lesson07.png" style="width: 100%">
        <a @click="toRabbit"><p class="title" style="margin-top: 0px">{{ $t("content.children.earlyPicLessonTitle13") }}</p>
          <img src="@/assets/image008.jpg"></a>
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
          toRabbit() {
            this.$router.push("/forgottenRabbit");
            window.location.reload();
          },
          toMax() {
            this.$router.push("/max");
            window.location.reload();
          },
          toReady() {
            this.$router.push("/ready");
            window.location.reload();
          },
          toRainDog() {
            this.$router.push("/raindog");
            window.location.reload();
          },
          toRainCat() {
            this.$router.push("/raincat");
            window.location.reload();
          },
          toKoko() {
            this.$router.push("/koko");
            window.location.reload();
          },
          toBuddy() {
            this.$router.push("/buddy");
            window.location.reload();
          },
          toCookie() {
            this.$router.push("/cookie");
            window.location.reload();
          },
          toFur() {
            this.$router.push("/fur");
            window.location.reload();
          },
          toDakota() {
            this.$router.push("/dakota");
            window.location.reload();
          },
          toAtlas() {
            this.$router.push("/atlas");
            window.location.reload();
          },
          toPic() {
            this.$router.push("/courseCompass");
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
    line-height: 40px;
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
  .title1{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
</style>
