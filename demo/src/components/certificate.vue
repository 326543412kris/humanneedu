<template>
  <div>
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.certificate.title1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text1") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text2") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text3") }}</p>
      <pre><p class="text1" style="margin-top: 10px">{{ $t("content.certificate.text4") }}</p></pre>
    </el-card>
    <el-card class="content" shadow="hover" id="green">
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text5") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text6") }}</p>
      <pre><p class="text1" style="margin-top: 10px">{{ $t("content.certificate.text7") }}</p></pre>
    </el-card>
    <el-card class="content" shadow="hover" id="lightGreen">
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text8") }}</p>
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text9") }}</p>
      <pre><p class="text1" style="margin-top: 10px">{{ $t("content.certificate.text10") }}</p></pre>
      <p class="text" style="margin-top: 10px">{{ $t("content.certificate.text11") }}</p>
      <pre class="text1" style="margin-top: 10px">{{ $t("content.workshop.text31") }}</pre>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "certify"
  }
</script>

<style scoped>
  pre {
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }

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
  .text1{
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
