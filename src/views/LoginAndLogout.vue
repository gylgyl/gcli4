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
    p a:{{obj1.a}}  b:{{obj1.b}} | 
      span(@click='addA(obj1)') A+ 
      span(@click='addB(obj1)') B+ 
      span(@click='addB2') B2+ 

</template>
<script>
import { mapActions } from 'vuex'
import { login, getUserInfo } from '@/api'
import { getTokenPub, setTokenPub, logoutPub, checkLoginPub } from '@/utils/pub'
import { GPAge } from '@/utils/config'
export default {
  name: 'loginAndLogout',
  data() {
    return {
      userObj: {},
      token: '',
      obj1: {}
    }
  },
  mounted() {
    this.obj1 = { a: 1 }
    this.obj1.b = 2
    this.$set(this.obj1, 'c', 0)
    console.log('mounted---obj1:', this.obj1)
    console.log('GPAge=>', GPAge)
    GPAge.pageSize = 10
    /**
     * --- {this.obj1}
     * --------
     * get a: ƒ reactiveGetter()
     * set a: ƒ reactiveSetter(newVal)
     * get c: ƒ reactiveGetter()
     * set c: ƒ reactiveSetter(newVal)
     * --------
     * 可以明显看到this.obj1 上没有set b 和 get b 的function
     */
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
    },
    addA(item) {
      item.a = item.a + 1
      console.log('itemA+', item)
    },
    addB(item) {
      item.b = item.b + 1
      console.log('itemB+', item)
    },
    addB2() {
      this.obj1.b = this.obj1.b + 1
      console.log('itemB+', this.obj1)
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
