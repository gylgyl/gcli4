<template lang="pug">
  .LifeCycle 
    p(class='tc') {{msg}}
    van-button(type='default' @click='mixinsFn') mixinsFn
    mixCom 哈哈
</template>
<script>
import demoMix from '@/mixins/demo'
export default {
  name: 'LifeCycle',
  data() {
    return {
      msg: 'LifeCycle'
    }
  },
  mixins: [demoMix],
  methods: {
    printComponentInfo(lifeName) {
      return 
      console.log(`%c lifeName => ${lifeName}`, 'color:yellow;')
      console.log('el => ', this.$el)
      console.log('data => ', this.$data)
      console.log('watch => ', this.$watch)
    }
  },
  /**
   * beforeCreate 里面不能读取到methods里的方法
   * this 存在了
   * this.$el, this.$data 都不存在
   * this.$watch  watch方法存在了
   */
  beforeCreate() {
    return 
    console.log('this', this, this.$el, this.$data, this.$watch)
    this.printComponentInfo('beforeCreate')
  },
  /***
   * created 里面可以读取到methods里的方法
   * this.$el 还不存在
   * this.$el this.$watch 都存在了
   */
  created() {
    this.printComponentInfo('created')
  },
  /***
   * beforeMount 里面可以读取到methods里的方法
   * this.$el 还不存在
   * this.$el this.$watch 都存在了
   */
  beforeMount() {
    this.printComponentInfo('beforeMount')
  },
  /**
   * mounted 已经可以读取到this.$el 了
   */
  mounted() {
    this.printComponentInfo('mounted')
    this.msg = 'mounted change'
    this.$destroy('lifeCycle')
  },
  beforeUpdate() {
    this.printComponentInfo('beforeUpdate')
  },
  updated() {
    this.printComponentInfo('updated')
  },
  beforeDestroy() {
    this.printComponentInfo('beforeDestroy')
  },
  destroyed() {
    this.printComponentInfo('destroyed')
  }
}
</script>
<style lang="scss" scoped></style>
