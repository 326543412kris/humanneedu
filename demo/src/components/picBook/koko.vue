<template>
  <div>
    <el-container class="contentPic">
      <el-main>
        <img src="@/assets/pic/koko1.jpg" style="width: 35%;padding-top: 30px">
        <p class="titleBig" style="margin-top: 0px">{{ $t("pic.koko.title") }}</p>
        <p class="titleAuthor" style="margin-top: 0px">{{ $t("pic.koko.title1") }}</p>
        <p class="titleAuthor" style="margin-top: 0px">{{ $t("pic.koko.title2") }}</p>
        <p class="titleAuthor" style="margin-top: 0px">{{ $t("pic.koko.title3") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.koko.title4") }}</p>
        <p class="textPic">{{ $t("pic.koko.text1") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.koko.title5") }}</p>
        <p class="titleAuthor">{{ $t("pic.koko.text4") }}</p>
        <img src="@/assets/pic/koko4.jpg" style="width: 30%">
        <p class="textPic">{{ $t("pic.koko.text5") }}</p>
        <p class="titleAuthor">{{ $t("pic.koko.text6") }}</p>
        <img src="@/assets/pic/koko2.png" style="width: 30%">
        <p class="textPic">{{ $t("pic.koko.text7") }}</p>
        <p class="titlePic" style="margin-top: 0px">{{ $t("pic.koko.title7") }}</p>
        <img src="@/assets/pic/koko3.png" style="width: 30%">
        <p class="textPic">{{ $t("pic.koko.text8") }}</p>
        <p class="textPic">{{ $t("pic.koko.text9") }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "koko"
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
