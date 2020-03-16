<template lang="pug">
  div.hello 
    h1.bg-blue {{msg}}
    a(href='https://baidu.com') 百度
    br
    label(for='chk1') 
      input( id='chk1' type='checkbox' name='hah' checked) 
      span 选项1
      
    label(for='chk2' ) 
      input(id='chk2' type='checkbox' name='hah' ) 
      span 选项2
    p(@click='clickFn();clickFn2(6)' ) 点我
    div 
      button(:class='`btn-${str1}`' class='btn1') class拼接 按钮{{str1}}
      span(v-show='vshowb') vshowb = {{vshowb}}
      span(v-show='!vshowb') vshowb = {{vshowb}} 
      p
        | 管道文字
        |
      | 22
      a 哈哈
        MyImg(name='logo' :width=60 :height=60 str='str22' @click='iconClick')
      Icon(name='icon-hanbao' @click='iconClick')

  //- div.login dd
  //-   h1.login__title.ml15 注册/登陆    
  //-   div.login__form.mt15.ml15      
  //-     van-field.login__form__input(placeholder="输入手机号" v-model="phone")     
  //-     div.login__form__protocol.mt15        
  //-       div.login__form__protocol__tips.dib.text-weak 注册或登录即表示同意        
  //-       div.login__form__protocol__name.dib.color-orange 《用户协议》      
  //-     app-button.mt15(size="large"        
  //-       theme="orange"        
  //-       :disabled="phone.length !== 11"       
  //-       @click="handleSubmit"      
  //-     ) 下一步


</template>

<script>
import Icon from './Icon.vue'
import MyImg from './MyImg.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Icon,
    MyImg
  },
  data() {
    return {
      str1: 'sssstr1',
      vshowb: false
    }
  },
  methods: {
    clickFn(){
      console.log('点击');
    },
    clickFn2(a){
      console.log('dianji',a);
    },
    iconClick(){
      console.log('iconClick');
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
