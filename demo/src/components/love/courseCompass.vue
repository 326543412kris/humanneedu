<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.love.course.title1") }}</el-header>
      <el-main>
        <p class="text">{{ $t("content.love.course.text1") }}</p>
        <p class="text"><a @click="toCookie()"><img src="@/assets/image001.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text11") }}</p>
        <p class="text">{{ $t("content.love.course.text2") }}</p>
        <p class="text"><a @click="toFur()"><img src="@/assets/image002.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text21") }}</p>
        <p class="text">{{ $t("content.love.course.text3") }}</p>
        <p class="text"><a @click="toReady()"><img src="@/assets/image003.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text31") }}</p>
        <p class="text">{{ $t("content.love.course.text4") }}</p>
        <p class="text"><a @click="toBuddy()"><img src="@/assets/image004.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text41") }}</p>
        <p class="text">{{ $t("content.love.course.text5") }}</p>
        <p class="text"><a @click="toKoko()"><img src="@/assets/image009.jpg" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text51") }}</p>
        <p class="text">{{ $t("content.love.course.text6") }}</p>
        <p class="text"><a @click="toRainCat()"><img src="@/assets/image005.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text61") }}</p>
        <p class="text">{{ $t("content.love.course.text7") }}</p>
        <p class="text"><a @click="toRainDog()"><img src="@/assets/image010.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text71") }}</p>
        <p class="text">{{ $t("content.love.course.text8") }}</p>
        <p class="text"><a @click="toDakota()"><img src="@/assets/image006.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text81") }}</p>
        <p class="text">{{ $t("content.love.course.text9") }}</p>
        <p class="text"><a @click="toMax()"><img src="@/assets/image007.png" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text91") }}</p>
        <p class="text">{{ $t("content.love.course.text10") }}</p>
        <p class="text"><a @click="toRabbit()"><img src="@/assets/image008.jpg" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text101") }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "course",
        methods: {
          toRabbit() {
                this.$router.push("/forgottenRabbit");
                window.location.reload();
          },
          toMax() {
            this.$router.push("/max");
            window.location.reload();
          },
          toReady() {
            this.$router.push("/ready");
            window.location.reload();
          },
          toRainDog() {
            this.$router.push("/raindog");
            window.location.reload();
          },
          toRainCat() {
            this.$router.push("/raincat");
            window.location.reload();
          },
          toKoko() {
            this.$router.push("/koko");
            window.location.reload();
          },
          toBuddy() {
            this.$router.push("/buddy");
            window.location.reload();
          },
          toCookie() {
            this.$router.push("/cookie");
            window.location.reload();
          },
          toFur() {
            this.$router.push("/fur");
            window.location.reload();
          },
          toDakota() {
            this.$router.push("/dakota");
            window.location.reload();
          },
        }
    }
</script>

<style scoped>
  a {color: lightblue;}
  a:hover {color:lightblue;cursor:pointer;text-decoration:underline;}
  a:active {color:white;}
  .title{
    padding: 20px;
    text-align: center;
    font-size: x-large;
  }
  .text{
    text-indent: 32px;
    text-align: left;
    padding: 10px;
  }
  .content {
    color: black;
    font-size: large;
    line-height: 28px;
    letter-spacing: 0px;
    background-color: #ffffff;
    margin: 50px auto;
    width: 70%;
    z-index: -2;
    border-radius:10px;
    box-shadow:10px 10px 10px 10px #ccc;
  }
</style>
