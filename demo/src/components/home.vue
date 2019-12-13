<template>
  <div style="z-index: -1">
    <el-card class="box-card" shadow="hover" id="green">
      <div @click="toStatus" class="textTitle">Who we are</div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="white">
      <div @click="toStatus" class="textTitle">Who we are</div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="lightGreen">
      <div @click="toStatus" class="textTitle">Who are you</div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            toStatus() {
                this.$router.push("/statusAndMission");
            },
        }
    }

</script>

<style scoped>
  .box-card:hover {
    -webkit-transform: scale(1.01);
    z-index: -3;
  }

  .box-card {
    width: 91%;
    height: 500px;
    z-index: -2;
  }

  #green {
    background-image: url("./../assets/2.jpg");
    margin: 0px auto;
    text-align: center;
    background-color: #48b78f;
    color: #ffffff;
  }

  #lightGreen {
    background-image: url("./../assets/4.jpg");
    margin: 50px auto;
    text-align: center;
    background-color: #48b78f;
    color: #ffffff;
  }

  #white {
    background-image: url("./../assets/1.jpg");
    margin: 50px auto;
    text-align: center;
    background-color: #cae4c1;
    color: #ffffff;
  }

  .textTitle {
    margin: 10% 50% auto auto;
    font-size: 50px;
  }
</style>
