<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.friendlyTitle1") }}</el-header>
      <el-main>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.friendlyTitle2") }}</p>
        <p class="text">{{ $t("content.children.friendly1") }}</p>
        <p class="text">{{ $t("content.children.friendly11") }}</p>
        <p class="text">{{ $t("content.children.friendly12") }}</p>
        <p class="text">{{ $t("content.children.friendly13") }}</p>
        <img src="@/assets/lesson1.jpg" style="width: 70%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.friendlyTitle3") }}</p>
        <p class="text">{{ $t("content.children.friendly2") }}</p>
        <p class="text">{{ $t("content.children.friendly21") }}</p>
        <img src="@/assets/lesson2.jpg" style="width: 70%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.friendlyTitle4") }}</p>
        <p class="text">{{ $t("content.children.friendly3") }}</p>
        <pre><p class="text1">{{ $t("content.children.friendly31") }}</p></pre>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.friendlyTitle5") }}</p>
        <p class="text">{{ $t("content.children.friendly41") }}</p>
        <p class="text">{{ $t("content.children.friendly42") }}</p>
        <p class="text">{{ $t("content.children.friendly43") }}</p>
        <img src="@/assets/lesson3.jpg" style="width: 70%">
        <p class="text">{{ $t("content.children.friendly44") }}</p>
        <p class="text">{{ $t("content.children.friendly45") }}</p>
        <p class="text">{{ $t("content.children.friendly46") }}</p>
        <p class="text">{{ $t("content.children.friendly47") }}</p>
        <img src="@/assets/lesson4.jpg" style="width: 70%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.friendlyTitle6") }}</p>
        <p class="text">{{ $t("content.children.friendly5") }}</p>
        <p class="text">{{ $t("content.children.friendly51") }}</p>
        <p class="text">{{ $t("content.children.friendly52") }}</p>
        <p><a href="http://lxi.me/08qb0"><i>{{ $t("content.children.friendlyLink") }}</i></a></p>
        <p class="title1" style="margin-top: 0px">{{ $t("content.children.leaderTitle4") }}</p>
        <p><a @click="toEarlyPicLesson"><i>{{ $t("content.children.atlasLink1") }}</i></a></p>
        <p><a @click="toAtlas"><i>{{ $t("content.children.atlasLink7") }}</i></a></p>
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
        name: "friendlyLesson",
        methods: {
          toEarlyPicLesson() {
                this.$router.push("/earlyPicLesson");
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
    padding-top: 30px;
    text-align: left;
    font-size: 26px;
    text-indent: 32px;
    font-weight: bold;
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
    line-height: 40px;
  }
  .text1{
    text-align: left;
    padding-left: 40px;
    font-family:"Microsoft YaHei",serif;
    line-height: 40px ;
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
