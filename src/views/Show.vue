<template lang="pug">
  div.main 
    p id:{{id}}
    span 标题: 
    input(v-model='text')
    showCom(:level='1' message='fatheToSonMsg')
      span.sonSpan sonSpan
    inputCom(@input='inputFun' :inputSon='inputText')
      p(style='color:red;') input 的 v-model 双向绑定
    button(@click='stateCountAdd') state的count累加
    button(@click='addCount') state的count累加
    button(@click='stateCountAddAction') state的count累加
    button(@click='addCountAction') state的count累加
</template>
<script>
import { login } from '@/api'
import axios from 'axios'
import Vue from 'vue'
import { mapMutations, mapActions } from 'vuex'

Vue.component('sonCom', {
  render(h) {
    return h('i', this.sonTitles)
  },
  props: ['sonTitles']
})

const showCom = {
  render(h) {
    const tag = ['div', 'p', 'strong', 'h1', 'h2', 'h3'][this.level - 1]
    let lElem = h(tag, {
      attrs: {
        id: `id${this.level}`
      },
      style: {
        color: 'red',
        fontSize: '22px',
        marginTop: '20px'
      },
      class: {
        classT: true,
        classF: false
      },
      // 组件prop
      props: {
        prop1: 'prop1'
      },
      // dom 属性
      domProps: {
        innerHTML: '<span class="ff">hah</span>'
      }
    })
    let sonElem = h('sonCom', {
      props: { titles: this.message },
      domProps: {
        innerHTML: '<br/>' + this.message + '<br/>'
      },
      style: {
        color: 'green'
      }
    })

    return h('div', [lElem, this.$slots.default, sonElem])
  },
  props: {
    level: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: 'dStr'
    }
  }
}

let inputCom = {
  render(h) {
    let self = this
    let inputElem = h('input', {
      domProps: {
        value: `${this.inputSon}`
      },
      on: {
        input: function(e) {
          self.$emit('input', e.target.value)
        }
      }
    })
    let pElem = h('p', this.inputSon)
    return h('div', [this.$slots.default, pElem, inputElem])
  },
  props: {
    inputSon: {
      type: String,
      default: '默认'
    }
  }
}

export default {
  name: 'HShow',
  data() {
    return {
      text: 't1',
      id: '',
      inputText: 'ttt'
    }
  },
  components: {
    showCom,
    inputCom
  },
  mounted() {
    // console.log(this,this.$route);
    this.id = this.$route.params.id
    login().then((data) => {
      // console.log({ data })
    })
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapActions(['addCountAction']),
    inputFun(val) {
      this.inputText = val
    },
    stateCountAdd() {
      this.$store.commit('addCount')
    },
    stateCountAddAction() {
      this.$store.dispatch('addCountAction')
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log({to, from, next});
    next((vm) => {
      // console.log({vm});
    })
  }
}
</script>
<style lang="scss" scoped></style>
