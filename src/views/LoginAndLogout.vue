<template lang="pug">
  div.main
    div(v-if='!userObj.name')
      van-button(type='default' @click='loginFn') 登录
    div(v-else)
      div 姓名:{{userObj.name}}
      p.mt12 性别1 computed:{{sexToStr1(userObj.sex)}}
      p.mt12 性别2 method:{{sexToStr2(userObj.sex)}}
      p.mt12 性别3 局部filter:{{userObj.sex | sexToStr3}}
      p.mt12 性别4 全局filter:{{userObj.sex | sexToStr}}
      van-button(type='default' @click='getUser') 获取
      van-button(type='primary' @click='logoutFn') 退出

</template>
<script>
import { mapActions } from 'vuex'
import { login, getUserInfo } from '@/api'
import { getTokenPub, setTokenPub, logoutPub, checkLoginPub } from '@/utils/pub'

export default {
  name: 'loginAndLogout',
  data() {
    return {
      userObj: {},
      token: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions(['loginUserAction', 'tokenAction']),
    init() {
      this.$nextTick(() => {
        let isLogin = checkLoginPub()
        if (isLogin) {
          getUserInfo().then((data) => {
            this.userObj = data.user
            this.loginUserAction(this.userObj)
            this.tokenAction(getTokenPub())
          })
        }
      })
    },
    // 登录
    loginFn() {
      login().then((data) => {
        this.userObj = data.user
        this.loginUserAction(this.userObj)
        this.tokenAction(data.token)
        setTokenPub(data.token)
      })
    },
    // 退出登录
    logoutFn() {
      this.loginUserAction({})
      this.tokenAction('')
      logoutPub()
      this.userObj = {}
    },
    // 获取用户
    getUser() {
      getUserInfo().then((data) => {
        this.userObj = data.user
        this.loginUserAction(this.userObj)
      })
    },
    sexToStr2(val) {
      if (+val === 0) {
        return '男'
      } else {
        return '女'
      }
    }
  },
  computed: {
    // computed不是一个函数是无法传参的
    sexToStr1() {  
      return function(val) {
        if (+val === 0) {
          return '男'
        } else {
          return '女'
        }
      }
    }
  },
  filters: {
    sexToStr3(val) {
      if (+val === 0) {
        return '男'
      } else {
        return '女'
      }
    }
  }
}
</script>
<style></style>
