<template lang="pug">
  div.hello 
    h1.bg-blue {{msg}}
    helloSon(:sonmsg='sonmsg')
</template>

<script>
const helloSon = {
  render(h) {
    return h('div', {
      class: 'sonDiv',
      domProps: '哈哈哈'
    })
  },
  props: {
    sonmsg: {
      type: String,
      defalut: 'sonMsg'
    }
  }
}
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'sssstr1',
      sonmsg: "sonmsg3"
    }
  },
  components: { helloSon },
  methods: {
    clickFn() {
      console.log('点击')
    },
    clickFn2(a) {
      console.log('dianji', a)
    },
    iconClick() {
      console.log('iconClick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
