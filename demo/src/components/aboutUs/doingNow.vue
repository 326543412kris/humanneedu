<template>
  <div style="z-index: -1">
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.doingNowTitle1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.doingNow1") }}</p>
      <img v-if="this.$i18n.locale === 'zh'" src="@/assets/doing1.jpg" style="width: 90%">
      <img v-if="this.$i18n.locale === 'en'" src="@/assets/doing1E.jpg" style="width: 90%">
    </el-card>
    <el-card class="content" shadow="hover" id="green">
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.doingNow2") }}</p>
      <img src="@/assets/doing2.png" style="width: 80%;margin-left: 10%">
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "doingNow"
    }
</script>

<style scoped>
  .box-card:hover {
    z-index: -1;
    box-shadow:10px 20px 20px #ccc;
  }

  .box-card {
    width: 92%;
    height: 550px;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 5px #ccc;
  }

  #green {
    margin: 50px auto;
    text-align: left;
    font-size: 20px;
    background-color: #88bf73;
    color: #ffffff;
    top: 0;
  }

  #lightGreen {
    margin: 50px auto;
    text-align: center;
    background-color: #48b78f;
    color: #ffffff;
  }

  #white {
    margin: 0px auto;
    text-align: center;
    background-color: #48b78f;
    color: #000000;
  }
  .title{
    padding: 20px;
    text-align: center;
    font-size: xx-large;
  }
  .title2{
    text-indent: 0px;
    text-align: left;
    padding: 10px;
    font-size: x-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
    line-height: 40px;
  }
  .text2{
    text-align: right;
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
