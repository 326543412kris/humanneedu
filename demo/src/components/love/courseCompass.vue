<template>
  <div>
    <el-container class="content">
      <el-header style="font-size: xx-large;margin-top: 30px">{{ $t("content.love.course.title1") }}</el-header>
      <el-main>
        <p class="text">{{ $t("content.love.course.text1") }}</p>
        <p class="text"><img src="@/assets/image001.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text11") }}</p>

        <p class="text">{{ $t("content.love.course.text2") }}</p>
        <p class="text"><img src="@/assets/image002.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text21") }}</p>
        <p class="text">{{ $t("content.love.course.text3") }}</p>
        <p class="text"><img src="@/assets/image003.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text31") }}</p>
        <p class="text">{{ $t("content.love.course.text4") }}</p>
        <p class="text"><img src="@/assets/image004.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text41") }}</p>
        <p class="text">{{ $t("content.love.course.text5") }}</p>
        <p class="text"><img src="@/assets/image009.jpg" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text51") }}</p>
        <p class="text">{{ $t("content.love.course.text6") }}</p>
        <p class="text"><img src="@/assets/image005.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text61") }}</p>
        <p class="text">{{ $t("content.love.course.text7") }}</p>
        <p class="text"><img src="@/assets/image010.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text71") }}</p>
        <p class="text">{{ $t("content.love.course.text8") }}</p>
        <p class="text"><img src="@/assets/image006.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text81") }}</p>
        <p class="text">{{ $t("content.love.course.text9") }}</p>
        <p class="text"><img src="@/assets/image007.png" style="width: 20%;padding-right: 40px">{{ $t("content.love.course.text91") }}</p>
        <p class="text">{{ $t("content.love.course.text10") }}</p>
        <p class="text"><a @click="handleEdit('rabbit.doc')"><img src="@/assets/image008.jpg" style="width: 20%;padding-right: 40px"></a>{{ $t("content.love.course.text101") }}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "course",
        methods: {
          handleEdit(address) {
              window.open(
                "https://view.officeapps.live.com/op/view.aspx?src=" + "D:/Programm/humanneedu/demo/src/assets/doc" + address
              );
          },
          toEarlyPicLesson() {
                this.$router.push("/earlyPicLesson");
                window.location.reload();
          },
          toFriendly() {
            this.$router.push("/friendlyLesson");
            window.location.reload();
          },
          toLeader() {
            this.$router.push("/leadershipLesson");
            window.location.reload();
          },
          toGarden() {
            this.$router.push("/gardenSchool");
            window.location.reload();
          },
          toGreen() {
            this.$router.push("/greenPhilosophy");
            window.location.reload();
          },
          toNature() {
            this.$router.push("/guardiansOfNature");
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
