<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: x-large;margin-top: 30px">{{ $t("growth.title") }}</el-header>
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
        <img v-if="this.$i18n.locale === 'zh'" src="@/assets/doing1.jpg" style="width: 90%">
        <img v-if="this.$i18n.locale === 'en'" src="@/assets/doing1E.jpg" style="width: 90%">


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
  a {color: mediumseagreen;}
  a:hover {color:lightblue;cursor:pointer;text-decoration:underline;}
  a:active {color:white;}
  .title{
    padding: 20px;
    text-align: left;
    font-size: xx-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
    font-size: large;
  }
  .content {
    color: black;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 1px;
    background-color: #ffffff;
    margin: 50px auto;
    width: 70%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
</style>
