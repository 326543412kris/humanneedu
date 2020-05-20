<template>
  <footer class="wrap" id="app-footer">
    <HR style="width: 92%;height: 5px"/>
    <div style="width: 50%;float: left;">
      <p>{{ $t("footer.text1") }}</p>
      <p style="margin: 50px">{{ $t("footer.text2") }}</p>
      <p>{{ $t("footer.text3") }}</p>
    </div>
    <div style="width: 50%;float: left;">
      <p>{{ $t("footer.text4") }}</p>
      <img style="width: 200px" src="./../assets/code.jpg"/>
    </div>
<!--    <p>{{ $t("footer.text5") }}</p>-->
  </footer>
</template>

<script>
    export default {
        name: 'app-footer',
        data () {
            return {
            }
        }
    }
</script>
<style>
  footer {
    font-size: 22px;
    letter-spacing: 1px;
    width: 100%;
    height: 400px;
  }
</style>
