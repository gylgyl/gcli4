<template lang="pug">
  div.main
    div(v-if='!userObj.name')
      van-button(type='default' @click='loginFn') 登录
    div(v-else)
      div {{userObj.name}}
      van-button(type='default' @click='') 获取
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
      logoutPub()
      this.loginUserAction({})
      this.tokenAction('')
      this.userObj = {}
    }
  }
}
</script>
<style></style>
