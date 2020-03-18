<template>
  <div>
    <el-container class="contentPic">
      <el-main>
        <img src="@/assets/pic/raincat1.png" style="width: 35%;padding-top: 30px">
        <p class="titleBig" style="margin-top: 0px">{{ $t("pic.raincat.title") }}</p>
        <p class="titleAuthor" style="margin-top: 0px">{{ $t("pic.raincat.title1") }}</p>
        <p class="titleAuthor" style="margin-top: 0px">{{ $t("pic.raincat.title2") }}</p>
        <p class="titleAuthor" style="margin-top: 0px">{{ $t("pic.raincat.title3") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.raincat.title4") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text1") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text2") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text3") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.raincat.title5") }}</p>
        <p class="titleAuthor">{{ $t("pic.raincat.text4") }}</p>
        <img src="@/assets/pic/raincat4.png" style="width: 30%">
        <p class="textPic">{{ $t("pic.raincat.text5") }}</p>
        <p class="titleAuthor">{{ $t("pic.raincat.text6") }}</p>
        <img src="@/assets/pic/raincat2.png" style="width: 30%">
        <p class="textPic">{{ $t("pic.raincat.text7") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.raincat.title6") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text8") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text9") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.raincat.title7") }}</p>
        <img src="@/assets/pic/raincat3.png" style="width: 30%">
        <p class="textPic">{{ $t("pic.raincat.text10") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text11") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text12") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text13") }}</p>
        <p class="textPic">{{ $t("pic.raincat.text14") }}</p>
        <p class="textPic"><a href="http://lxi.me/d53j6">{{ $t("pic.raincat.text15") }}</a></p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "raincat"
    }
</script>

<style>
  a {color: cornflowerblue;}
  a:hover {color:lightblue;cursor:pointer;text-decoration:underline;}
  a:active {color:white;}
  .titleBig{
    padding: 30px;
    text-align: center;
    font-size: 44px;
    font-weight: bold;
  }
  .titlePic{
    padding: 30px;
    text-align: center;
    font-size: xx-large;
    font-weight: bold;
  }
  .titleAuthor{
    text-align: center;
    font-size: large;
  }
  .textPic{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
  }
  .contentPic {
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
