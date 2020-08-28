<template>
  <div>
    <el-card class="content" shadow="hover" id="white">
      <p class="title" style="margin-top: 10px">{{ $t("content.source.Title1") }}</p>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "source"
  }
</script>

<style scoped>

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
