<template lang="pug">
  i(v-on='$listeners' :class="name" class='iconfont')
</template>
<script>
export default {
  props: { name: String },
  created() {
    // console.log(this.name)
  }
}
</script>
<style lang="scss" scoped>
.iconfont {
  font-size: 16px;
  color: $color-blue;
}
@font-face {
  font-family: 'iconfont'; /* project id 489562 */
  src: url('~@assets/iconfonts/iconfont.eot');
  src: url('~@assets/iconfonts/iconfont.eot?') format('embedded-opentype'),
  url('~@assets/iconfonts/iconfont.woff2') format('woff2'),
  url('~@assets/iconfonts/iconfont.woff') format('woff'),
  url('~@assets/iconfonts/iconfont.ttf') format('truetype')
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-qicheqianlian-:before {
  content: "\e618";
}

.icon-hanbao:before {
  content: "\e600";
}

.icon-goumai:before {
  content: "\e601";
}

.icon-dianpu:before {
  content: "\e602";
}

.icon-huiyuanqia:before {
  content: "\e603";
}

.icon-gongnengjianyi:before {
  content: "\e604";
}

.icon-31goumaichongzhi:before {
  content: "\e605";
}
</style>
