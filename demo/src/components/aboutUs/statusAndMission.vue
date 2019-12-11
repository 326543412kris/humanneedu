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
    -webkit-transform: scale(1.01);
    z-index: -2;
  }

  .box-card {
    width: 91%;
    height: 500px;
    z-index: -1;
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
