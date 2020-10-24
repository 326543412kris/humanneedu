<template>
  <div>
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.statusTitle1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.status1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.status11") }}</p>
    </el-card>
    <el-card class="content" shadow="hover" id="green">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.statusTitle2") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.status2") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.status3") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.status4") }}</p>
      <img v-if="this.$i18n.locale === 'zh'" src="@/assets/RealValue.jpg" style="width: 80%;margin-left: 10%">
      <img v-if="this.$i18n.locale === 'en'" src="@/assets/RealValueE.jpg" style="width: 80%;margin-left: 10%">
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "statusAndMission"
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
    background-color: #ffffff;
    color: #000000;
    top: 0;
  }

  #lightGreen {
    margin: 50px auto;
    text-align: center;
    background-color: #ffffff;
    color: #ffffff;
  }

  #white {
    margin: 50px auto;
    text-align: center;
    background-color: #eeeeee;
    color: #000000;
  }
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
