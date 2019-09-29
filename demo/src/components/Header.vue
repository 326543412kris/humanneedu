<template>
  <div class="hello">
    <header style="float: left"><img src="@/assets/logo.png" style="width: 10%; float: left">
      <h2 style="float: left">{{ $t("message.title") }}</h2></header>
    <span style="float: right">
      <el-col>
          <el-select style="width: 10px; display: inline-block">{{ $t("menu.aboutUs") }}</el-select>
      </el-col>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
      <li  @click="changeLocale"
                onmouseover="this.style.cursor='pointer'"><u>中文/EN</u></li>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeLocale (){
      this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
        confirmButtonText: this.$t('button.ok'),
        cancelButtonText: this.$t('button.cancel'),
        type: 'warning'
      }).then(() => {
        let locale = this.$i18n.locale
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
  position:fixed;
  left:0px;
  top:0px;
  width:100%;
  height: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0px;
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
