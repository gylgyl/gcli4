import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('测试 helloworld', () => {
  let warpper, vm
  beforeEach(() => {
    warpper = mount(HelloWorld)
    vm = warpper.vm
    warpper.setProps({ sonmsg: 'sonmsg3' })
  })
  it('equals msg to ["sonmsg3"]', () => {
    expect(vm.sonmsg).toEqual('sonmsg3')
  })
  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot()
  })
})
