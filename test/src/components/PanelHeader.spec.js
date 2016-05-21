import PanelHeader from '../../../src/components/PanelHeader'
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

const setup = (isOpen) => {
  const toggle = expect.createSpy()
  const props = {
    title: 'title',
    total: 1,
    isOpen,
    toggle
  }
  const component = shallow(<PanelHeader {...props} />)
  return {
    title: component.find('.PanelHeader__title'),
    total: component.find('.PanelHeader__total'),
    state: component.find('.PanelHeader__state'),
    panelHeader: component.find('.PanelHeader'),
    toggle
  }
}

describe('src/component/PanelHeader', () => {
  it('should render the title', () => {
    const { title } = setup(true)
    expect(title.text()).toBe('title')
  })

  it('should render the total', () => {
    const { total } = setup(true)
    expect(total.text()).toBe('£1.00')
  })

  it('should render the open state', () => {
    const { state } = setup(true)
    expect(state.text()).toBe('[-]')
  })

  it('should render the closed state', () => {
    const { state } = setup(false)
    expect(state.text()).toBe('[+]')
  })

  it('it should toggle on click', () => {
    const { panelHeader, toggle } = setup(true)
    panelHeader.simulate('click')
    expect(toggle).toHaveBeenCalled()
  })
})
