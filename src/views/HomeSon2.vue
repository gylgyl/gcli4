<template lang="pug">
  div.main 
    p homeSon2
    span 标题: 
    input(v-model='text')
</template>
<script>
export default {
  name: 'HomeSon2',
  data() {
    return {
      text: 't2'
    }
  },
  mounted(){
  },
  created(){
    console.log('created2');
  },
  /**
   * 该组件没被缓存 activated 和 deactivated 不会执行
   */
  activated() {
    console.log('activated2')
  },
  deactivated() {
    console.log('deactivated2')
  }
  
}
</script>
<style lang="scss" scoped>
  
</style>