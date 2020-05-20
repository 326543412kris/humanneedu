<template>
  <div style="z-index: -1">
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.charityTitle1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity11") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity12") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity13") }}</p>
      <img v-if="this.$i18n.locale === 'zh'" src="@/assets/charity1.jpg" style="width: 70%">
      <img v-if="this.$i18n.locale === 'en'" src="@/assets/charity1E.jpg" style="width: 70%">
    </el-card>
    <el-card class="content" shadow="hover" id="green">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.charityTitle2") }}</p>
      <p class="text2" style="margin-right: 10px">{{ $t("content.aboutUs.charityTitleText") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity2") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity21") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity22") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity23") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity24") }}</p>
      <img v-if="this.$i18n.locale === 'zh'" src="@/assets/charity2.jpg" style="width: 80%;margin-left: 10%">
      <img v-if="this.$i18n.locale === 'en'" src="@/assets/charity2E.jpg" style="width: 80%;margin-left: 10%">
    </el-card>
    <el-card class="content" shadow="hover" id="lightGreen">
      <p class="title" style="margin-top: 10px">{{ $t("content.aboutUs.charityTitle3") }}</p>
      <p class="text2" style="margin-right: 10px">{{ $t("content.aboutUs.charityTitleText") }}</p>
      <p class="title2" style="margin-top: 10px">{{ $t("content.aboutUs.charity31") }}</p>
      <p class="text" style="margin-top: 0px">{{ $t("content.aboutUs.charity32") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.aboutUs.charity33") }}</p>
      <p class="title2" style="margin-top: 10px">{{ $t("content.aboutUs.charity34") }}</p>
      <p class="text" style="margin-top: 0px">{{ $t("content.aboutUs.charity35") }}</p>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "charity"
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
    font-size: 22px;
    background-color: #ffffff;
    color: #000000;
    top: 0;
  }

  #lightGreen {
    margin: 50px auto;
    text-align: center;
    background-color: #ffffff;
    color: #000000;
  }

  #white {
    margin: 50px auto;
    text-align: center;
    color: #000000;
    background-color: #ffffff;
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
    font-size: 22px;
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
