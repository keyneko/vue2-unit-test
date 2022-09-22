import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter.vue', () => {
  const wrapper = mount(Counter)

  it('页面正确渲染', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  it('页面有一个按钮', () => {
    const button = wrapper.find('.counter button') 
    expect(button.exists()).toBe(true)
  })

  it('点击按钮应增加计数', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('.counter button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  it('点击按钮应增加计数2', async () => {
    expect(wrapper.text()).toContain('1')
    const button = wrapper.find('.counter button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('2')
  })

  it('修改状态', async () => {
    expect(wrapper.vm.count).toBe(2)
    await wrapper.setData({ count: 10 })
    expect(wrapper.vm.count).not.toBe(2)
  })
})
