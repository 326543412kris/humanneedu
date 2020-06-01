<template>
  <div>
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.voice.Title1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.voice.text1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.voice.text2") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.voice.text3") }}</p>
      <pre class="text1" style="margin-top: 10px">{{ $t("content.workshop.text31") }}</pre>
    </el-card>
    <el-card v-if="this.$i18n.locale === 'zh'" class="content" shadow="hover" id="lightGreen">
      <p class="title" style="margin-top: 10px">{{ $t("content.voice.Title2") }}</p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/umN-Iwn2ZNAIj8m_vuHYpg">{{ $t("content.voice.text4") }}</a></p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/lT0kdleevUnMAQmLKNLt6w">{{ $t("content.voice.text5") }}</a></p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/MlKhqolXZbStfMN2teMt5w">{{ $t("content.voice.text6") }}</a></p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/Zq4avZIJTsJfoks2XGANEg">{{ $t("content.voice.text7") }}</a></p>
      <p class="text" style="margin-top: 10px"><a href="https://mp.weixin.qq.com/s/DApd4D5iy9pA6gq32wZ1aw">{{ $t("content.voice.text8") }}</a></p>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "voiceSalon"
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
    background-color: #efefef;
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
    width: 80%;
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
