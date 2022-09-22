import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'

describe('HelloWorld.vue', () => {
  it('正确渲染msg属性', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    expect(wrapper.text()).toContain(msg)
  })
})

describe('Counter.vue', () => {
  const wrapper = mount(Counter)

  it('页面正确渲染', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  it('页面有一个按钮', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('点击按钮应增加计数', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
