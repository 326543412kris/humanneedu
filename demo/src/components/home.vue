<template>
  <div style="z-index: -1">
    <el-card class="box-card" shadow="hover" id="green">
      <div @click="toStatus" class="textTitle">{{ $t("title.aboutUs") }}</div>
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
    /*-webkit-transform: scale(1.01);*/
    z-index: -1;
    box-shadow:10px 20px 20px #ccc;
  }

  .box-card {
    width: 98%;
    height: 550px;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 5px #ccc;
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
    cursor:pointer;
    margin: 10% 50% auto auto;
    font-size: 50px;
  }
</style>
