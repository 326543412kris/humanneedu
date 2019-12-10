<template>
  <div class="hello">
    <header style="position: fixed;width: 100%">
      <div style="width: 4%;float: left">
        <img src="@/assets/logo.png" style="width: 100%;float: left;height: 100%;">
      </div>
      <div style="width: 26%;float: left;text-align: left;">
        <h2 style="margin: auto;padding: 17px">{{ $t("message.title") }}</h2>
      </div>
      <div style="width: 70%;float: right">
        <el-menu router class="el-menu-demo" style="float: right"
                 :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="home">{{ $t("menu.home") }}</el-menu-item>
          <el-submenu index="2">
            <template slot="title">{{ $t("menu.aboutUs") }}</template>
            <el-menu-item index="aboutUs">{{ $t("menu.statusAndMission") }}</el-menu-item>
            <el-menu-item index="aboutUs">{{ $t("menu.charity") }}</el-menu-item>
            <el-menu-item index="2-3">asdasdsdsadsad3</el-menu-item>
          </el-submenu>
          <el-menu-item>
            <template slot="title">{{ $t("menu.children") }}</template>
          </el-menu-item>
          <el-menu-item>
            <template slot="title">{{ $t("menu.picture") }}</template>
          </el-menu-item>
          <el-menu-item>
            <template slot="title">{{ $t("menu.educators") }}</template>
          </el-menu-item>
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
                activeIndex: 'home',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
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
                    locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
                }).catch(() => {
                    this.$message({
                        type: 'info',
                    })
                })
            }
        }
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

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: black;
  }

  header {
    height: 62px;
  }

</style>
