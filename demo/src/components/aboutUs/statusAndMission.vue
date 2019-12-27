<template>
  <div style="z-index: -1">
    <el-card class="box-card" shadow="hover" id="white">Who we are</el-card>
    <el-card class="box-card" shadow="hover" id="green">Who we are</el-card>
    <el-card class="box-card" shadow="hover" id="lightGreen">Who are you</el-card>
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
    background-color: #48b78f;
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
    background-color: #cae4c1;
    color: #000000;
  }
</style>
