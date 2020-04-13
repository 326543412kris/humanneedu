<template>
  <div style="z-index: -1">
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.coreTitle") }}</p>
      <p class="text1" style="margin-top: 10px">{{ $t("content.aboutUs.core11") }}</p>
      <img src="@/assets/guxuan.jpg" style="width: 30%">
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.core12") }}</p>
      <p class="text1" style="margin-top: 10px">{{ $t("content.aboutUs.core21") }}</p>
      <img src="@/assets/wangbo.jpg" style="width: 30%">
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.core22") }}</p>
      <p class="text1" style="margin-top: 10px">{{ $t("content.aboutUs.core31") }}</p>
      <img src="@/assets/zhangliwen.jpg" style="width: 30%">
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.core32") }}</p>
      <p class="text1" style="margin-top: 10px">{{ $t("content.aboutUs.core41") }}</p>
      <img src="@/assets/SarahBexell.jpg" style="width: 30%">
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.core42") }}</p>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "coreTeam"
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

  #white {
    margin: 0px auto;
    text-align: center;
    background-color: #88bf73;
    color: #000000;
  }
  .title{
    padding: 20px;
    text-align: center;
    font-size: xx-large;
  }
  .text{
    text-align: center;
    padding: 10px;
    line-height: 40px;
  }
  .text1{
    text-align: center;
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
</style>
