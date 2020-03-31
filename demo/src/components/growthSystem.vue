<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("growth.title") }}</el-header>
      <el-main>
        <p class="text" >{{ $t("growth.text1") }}</p>
        <p class="text" >
          {{ $t("growth.text21") }}<a @click="toProfessional"><i>{{ $t("growth.link1") }}</i></a>
          {{ $t("growth.text22") }}<a @click="toWorkshops"><i>{{ $t("growth.link2") }}</i></a>
          {{ $t("growth.text23") }}<a @click="toVoiceSalon"><i>{{ $t("growth.link3") }}</i></a>
          {{ $t("growth.text24") }}
        </p>
        <p class="text" >
          {{ $t("growth.text31") }}
          <a @click="toPic"><i>{{ $t("growth.link4") }}</i></a>
          <a @click="toLesson"><i>{{ $t("growth.link5") }}</i></a>
          <a @click="toMove"><i>{{ $t("growth.link6") }}</i></a>
          {{ $t("growth.text32") }}
        </p>
        <p class="title" style="margin-left: 30px"><a @click="toProfessional"><i>•{{ $t("growth.link1") }}</i></a></p>
        <p class="title" style="margin-left: 30px"><a @click="toWorkshops"><i>•{{ $t("growth.link2") }}</i></a></p>
        <p class="title" style="margin-left: 30px"><a @click="toVoiceSalon"><i>•{{ $t("growth.link3") }}</i></a></p>
        <img src="@/assets/gzf1.jpg" style="width: 95%">
        <img src="@/assets/gzf2.jpg" style="width: 95%">
        <img src="@/assets/gzf3.jpg" style="width: 95%">
        <img src="@/assets/gzf4.jpg" style="width: 95%">
        <img src="@/assets/gzf5.jpg" style="width: 95%">
        <img src="@/assets/gzf6.jpg" style="width: 95%">
        <img src="@/assets/gzf7.jpg" style="width: 95%">
        <img src="@/assets/gzf8.jpg" style="width: 95%">
        <img src="@/assets/gzf9.jpg" style="width: 95%">
        <img src="@/assets/gzf10.jpg" style="width: 95%">


        <p></p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "growthSystem",
        methods: {
            toPic()
            {
              this.$router.push("/courseCompass");
              window.location.reload();
            },
            toVoiceSalon() {
                this.$router.push("/voiceSalon");
                window.location.reload();
            },
            toWorkshops() {
                this.$router.push("/workshop");
                window.location.reload();
            },
            toProfessional() {
                this.$router.push("/certificate");
                window.location.reload();
            },
            toLesson()
            {
              this.$router.push("/atlas");
              window.location.reload();
            },
            toMove()
            {
              this.$router.push("/gardenSchool");
              window.location.reload();
            },
        }
    }
</script>

<style scoped>
  a {color: cornflowerblue;}
  a:hover {color:lightblue;cursor:pointer;text-decoration:underline;}
  a:active {color:white;}
  .title{
    padding: 20px;
    text-align: left;
    font-size: x-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
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
