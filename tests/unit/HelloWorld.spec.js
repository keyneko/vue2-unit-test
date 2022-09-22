import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const msg = 'new message'
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg }
  })

  it('正确渲染属性', () => {
    expect(wrapper.text()).toContain(msg)
  })

  it('修改属性', async () => {
    const newMsg = 'hello world'

    expect(wrapper.text()).not.toContain(newMsg)
    await wrapper.setProps({ msg: newMsg })
    expect(wrapper.text()).toContain(newMsg)
  })
})
