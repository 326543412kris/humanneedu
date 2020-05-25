<template>
  <div>
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.workshop.Title1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.workshop.text1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.workshop.text2") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.workshop.text3") }}</p>
      <pre class="text1" style="margin-top: 10px">{{ $t("content.workshop.text31") }}</pre>
    </el-card>
    <el-card class="content" shadow="hover" id="green">
      <p class="title" style="margin-top: 10px">{{ $t("content.workshop.Title2") }}</p>
      <img  src="@/assets/RealValueE.jpg" style="width: 80%;margin-left: 10%">
    </el-card>
    <el-card class="content" shadow="hover" id="lightGreen">
      <p class="title" style="margin-top: 10px">{{ $t("content.workshop.Title3") }}</p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/sJLgi_RqFAJ1MGwNaOqGKQ">{{ $t("content.workshop.text4") }}</a></p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/L4FmY_Fev1dsOCqwDtWsbA">{{ $t("content.workshop.text5") }}</a></p>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "workshop"
  }
</script>

<style scoped>


  #green {
    margin: 50px auto;
    text-align: left;
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
    background-color: #ffffff;
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
  .text1 {
    text-align: left;
    padding: 20px;
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
