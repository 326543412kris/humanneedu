<template>
  <div style="z-index: -1">
    <el-card class="box-card" shadow="hover" id="green1">
      <div @click="toStatus" class="textTitle">{{ $t("title.aboutUs") }}</div>
      <div @click="toStatus" class="text">{{ $t("title.aboutUs1") }}</div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="white1">
      <div @click="toCharity" class="textTitle">{{ $t("title.aboutUs2") }}</div>
      <div @click="toCharity" class="text">{{ $t("title.aboutUs3") }}</div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="lightGreen1">
      <div @click="toDoing" class="textTitle">{{ $t("title.aboutUs4") }}</div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "home",
        methods: {
            toStatus() {
                this.$router.push("/statusAndMission");
                window.location.reload();
            },
            toCharity() {
                this.$router.push("/charity");
                window.location.reload();
            },
            toDoing() {
                this.$router.push("/doingNow");
                window.location.reload();
            },
        }
    }

</script>

<style scoped>
  .text{
    cursor:pointer;
    margin: 3% 10% auto 13%;
    font-size: 20px;
    padding: 20px;
    line-height: 40px;
    text-align: left;
  }
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

  #green1 {
    background-image: url("./../assets/bg5.jpg");
    background-size: cover;
    margin: 0px auto;
    text-align: center;
    background-color: #48b78f;
    color: #ffffff;
  }

  #lightGreen1 {
    background-image: url("./../assets/bg7.jpg");
    background-size: cover;
    margin: 50px auto;
    text-align: center;
    background-color: #48b78f;
    color: #ffffff;
  }

  #white1 {
    background-image: url("./../assets/bg1.jpg");
    background-size: 100% 120%;
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
