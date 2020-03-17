<template lang="pug">  
div(class="base")    // 按钮组件  {{msg}}
  br  
  app-button.mt4(theme="blue" @click='clickFn') 确认支付click   
  app-button(theme="orange" ) 确认支付    
  app-button(theme="purple") 确认支付    
  app-button.mt4(theme="red") 确认支付    
  app-button(theme="grey") 确认支付    
  app-button.mt4(theme="blue" size="large") 修改地址    
  app-button.mt4(theme="orange" size="large") 修改地址    
  app-button.mt4(theme="purple" size="large") 修改地址    
  app-button.mt4(theme="red" size="large") 修改地址    
  app-button.mt4(theme="grey" size="large") 修改地址    
  app-button.mt4(theme="blue" type="minor") 确认收货    
  app-button(theme="orange" type="minor") 确认收货    
  app-button(theme="purple" type="minor") 确认收货    
  app-button(theme="red" type="minor") 修改地址    
  app-button(theme="grey" type="minor") 修改地址    
  app-button.mt4(theme="blue" type="rect") 确认收货    
  app-button(theme="orange" type="rect") 确认收货    
  app-button(theme="purple" type="rect") 确认收货    
  app-button(theme="red" type="rect") 修改地址    
  app-button(theme="grey" type="rect") 修改地址</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'app-button demo'
    }
  },
  methods: {
    clickFn(){
      console.log('ccccccccc');
    }
  }
}
</script>
<style lang="scss"></style>
