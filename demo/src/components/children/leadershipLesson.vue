<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.leaderTitle1") }}</el-header>
      <el-main>
        <p class="text">{{ $t("content.children.leader1") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.leaderTitle2") }}</p>
        <p class="text">{{ $t("content.children.leader2") }}</p>
        <p class="text">{{ $t("content.children.leader3") }}</p>
        <p class="text">{{ $t("content.children.leader4") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.leaderTitle3") }}</p>
        <p class="text">{{ $t("content.children.leader5") }}</p>
        <p class="text">{{ $t("content.children.leader6") }}</p>
        <p class="title">{{ $t("content.children.leader7") }}</p>
        <pre><p class="text1" style="font-size: 18px">{{ $t("content.children.leader8") }}</p></pre>
        <p class="title1" style="margin-top: 0px">{{ $t("content.children.leaderTitle4") }}</p>
        <p><a @click="toEarlyPicLesson"><i>{{ $t("content.children.atlasLink1") }}</i></a></p>
        <p><a @click="toFriendly"><i>{{ $t("content.children.atlasLink2") }}</i></a></p>
        <p><a @click="toAtlas"><i>{{ $t("content.children.atlasLink7") }}</i></a></p>
        <p><a @click="toGarden"><i>{{ $t("content.children.atlasLink4") }}</i></a></p>
        <p><a @click="toGreen"><i>{{ $t("content.children.atlasLink5") }}</i></a></p>
        <p><a @click="toNature"><i>{{ $t("content.children.atlasLink6") }}</i></a></p>

      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "leadershipLesson",
        methods: {
          toEarlyPicLesson() {
                this.$router.push("/earlyPicLesson");
                window.location.reload();
          },
          toFriendly() {
            this.$router.push("/friendlyLesson");
            window.location.reload();
          },
          toAtlas() {
            this.$router.push("/atlas");
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
