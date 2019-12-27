<template>
  <div class="hello">
    <header style="position: fixed;width: 100%;background-color: white">
      <div style="width: 12%; float:left;">
        <img v-if="this.$i18n.locale === 'en'" src="@/assets/logoe.png" style="width: 100%;float: left;height: 100%;">
        <img v-else src="../../src/assets/logo.png" style="width: 100%;float: left;height: 100%;">
      </div>
      <div style="width: 18%;float: left;text-align: left;cursor:pointer;" @click="toHome">
        <h2 style="margin: auto;padding: 17px;color: #48b78f" >{{ $t("message.title") }}</h2>
      </div>
      <div style="width: 70%;float: right">
        <el-menu router class="el-menu-demo" style="float: right"
                  active-text-color="#48b78f"
                 :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="home">{{ $t("menu.home") }}</el-menu-item>
          <el-submenu index="aboutUs">
            <template slot="title">{{ $t("menu.aboutUs") }}</template>
            <el-menu-item index="statusAndMission">{{ $t("menu.statusAndMission") }}</el-menu-item>
            <el-menu-item index="charity">{{ $t("menu.charity") }}</el-menu-item>
            <el-menu-item index="doingNow">{{ $t("menu.doingNow") }}</el-menu-item>
            <el-menu-item index="coreTeam">{{ $t("menu.coreTeam") }}</el-menu-item>
            <el-menu-item index="natureSchool">{{ $t("menu.natureSchool") }}</el-menu-item>
          </el-submenu>
          <el-submenu index="children">
            <template slot="title">{{ $t("menu.children") }}</template>
            <el-menu-item index="atlas">{{ $t("children.atlas") }}</el-menu-item>
            <el-menu-item index="earlyPicLesson">{{ $t("children.earlyPicLesson") }}</el-menu-item>
            <el-menu-item index="friendlyLesson">{{ $t("children.friendlyLesson") }}</el-menu-item>
            <el-menu-item index="leadershipLesson">{{ $t("children.leadershipLesson") }}</el-menu-item>
            <el-menu-item index="gardenSchool">{{ $t("children.gardenSchool") }}</el-menu-item>
            <el-menu-item index="greenPhilosophy">{{ $t("children.greenPhilosophy") }}</el-menu-item>
            <el-menu-item index="guardiansOfNature">{{ $t("children.guardiansOfNature") }}</el-menu-item>
          </el-submenu>
          <el-submenu index="picture">
            <template slot="title">{{ $t("menu.picture") }}</template>
            <el-menu-item index="preface">{{ $t("picture.preface") }}</el-menu-item>
            <el-menu-item index="courseCompass">{{ $t("picture.info") }}</el-menu-item>
          </el-submenu>
          <el-submenu index="educators">
            <template slot="title">{{ $t("menu.educators") }}</template>
            <el-menu-item index="growthSystem">{{ $t("educators.growthSystem") }}</el-menu-item>
            <el-menu-item index="certificate">{{ $t("educators.certificate") }}</el-menu-item>
            <el-menu-item index="workshop">{{ $t("educators.workshop") }}</el-menu-item>
            <el-menu-item index="voiceSalon">{{ $t("educators.voiceSalon") }}</el-menu-item>
          </el-submenu>
          <el-menu-item @click="changeLocale"
                        onmouseover="this.style.cursor='pointer'"><u>中文/EN</u></el-menu-item>
        </el-menu>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
              activeIndex: "home"
            }
        },
        methods: {
            toHome() {
                this.$router.push("/home");
                window.location.reload();
            },
            handleSelect(key, keyPath) {
                this.activeIndex = key;
                if (key === 1) {
                    this.$router.push("/home");
                }
            },
            changeLocale() {
                this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
                    confirmButtonText: this.$t('button.ok'),
                    cancelButtonText: this.$t('button.cancel'),
                    type: 'warning'
                }).then(() => {
                    let locale = this.$i18n.locale;
                    locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
                }).catch(() => {
                    this.$message({
                        type: 'info',
                    })
                })
            }
        },
        mounted() {
            this.activeIndex = this.$route.name;
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  header {
    height: 62px;
  }

</style>
