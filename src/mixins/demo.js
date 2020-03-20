const mixCom = {
  render(h) {
    let pElem = h('p', {
      domProps: {
        innerHTML: '我是 mixins 的组件'
      },
      style: {
        color: 'green',
        fontSize: '16px'
      }
    })
    return h('div', [this.$slots.default, pElem])
  }
}
export default {
  data() {
    return {
      mixinsData: 'mixinsData'
    }
  },
  mounted() {
    console.log('i am mixins 里的 mounted')
  },
  methods: {
    mixinsFn() {
      console.log('i an mixinsFn')
    }
  },
  computed: {
    mixinsComFn() {
      return function() {
        console.log('i am mixins 里的 计算属性')
      }
    }
  },
  components: {
    mixCom
  },
  // 指令
  directives: {}
}
