<template lang="pug">
  div.main 
    p homeSon1
    span 标题: 
    input(v-model='text')
</template>
<script>
export default {
  name: 'HomeSon1',
  data() {
    return {
      text: 't1'
    }
  },
  created(){
    console.log('created1');
  },
  mounted() {},
  /**
   * 该组件被缓存 
   * activated在进入的时候执行
   * deactivated在离开的时候执行
   */
  activated() {
    console.log('activated1')
  },
  deactivated() {
    console.log('deactivated1')
  }
}
</script>
<style lang="scss" scoped></style>
