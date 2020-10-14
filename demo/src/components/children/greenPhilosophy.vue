<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.children.greenTitle") }}</el-header>
      <el-main>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.greenTitle1") }}</p>
        <p class="text">{{ $t("content.children.green11") }}</p>
        <p class="text">{{ $t("content.children.green12") }}</p>
        <img src="@/assets/bg12.jpg" style="width: 75%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.greenTitle2") }}</p>
        <p class="text">{{ $t("content.children.green21") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.greenTitle3") }}</p>
        <p class="text">{{ $t("content.children.green31") }}</p>
        <p class="text">{{ $t("content.children.green32") }}</p>
        <p class="text">{{ $t("content.children.green33") }}</p>
        <img src="@/assets/bg14.jpg" style="width: 75%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.greenTitle4") }}</p>
        <p class="text">{{ $t("content.children.green41") }}</p>
        <p class="text">{{ $t("content.children.green42") }}</p>
        <p class="title" style="margin-top: 0px">{{ $t("content.children.greenTitle5") }}</p>
        <p class="text">{{ $t("content.children.green51") }}</p>
        <p class="text">{{ $t("content.children.green52") }}</p>
        <img src="@/assets/bg13.jpg" style="width: 75%">
        <p class="title" style="margin-top: 0px">{{ $t("content.children.greenTitle6") }}</p>
        <p class="text">{{ $t("content.children.green61") }}</p>
        <p class="text">{{ $t("content.children.green62") }}</p>
        <p class="text">{{ $t("content.children.green63") }}</p>
        <img src="@/assets/greenL1.jpg" style="width: 90%">
        <p class="text">{{ $t("content.children.green64") }}</p>
        <p class="text">{{ $t("content.children.green65") }}</p>
        <p class="title1" style="margin-top: 0px">{{ $t("content.children.leaderTitle4") }}</p>
        <p><a @click="toEarlyPicLesson"><i>{{ $t("content.children.atlasLink1") }}</i></a></p>
        <p><a @click="toFriendly"><i>{{ $t("content.children.atlasLink2") }}</i></a></p>
        <p><a @click="toLeader"><i>{{ $t("content.children.atlasLink3") }}</i></a></p>
        <p><a @click="toAtlas"><i>{{ $t("content.children.atlasLink7") }}</i></a></p>
        <p><a @click="toGarden"><i>{{ $t("content.children.atlasLink4") }}</i></a></p>
        <p><a @click="toNature"><i>{{ $t("content.children.atlasLink6") }}</i></a></p>

      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "greenPhilosophy",
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
          toGarden() {
            this.$router.push("/gardenSchool");
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
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
  }
  .title1{
    padding: 20px;
    text-align: center;
    font-size: x-large;
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
