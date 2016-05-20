import Subscriptions from '../../../src/components/Subscriptions'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import PanelHeader from '../../../src/components/PanelHeader'
import PanelBody from '../../../src/components/PanelBody'

const setup = () => {
  const props = {
    total: 1,
    subscriptions: [
      { type: 'type1', name: 'name1', cost: 'cost1' },
      { type: 'type2', name: 'name2', cost: 'cost2' },
      { type: 'type3', name: 'name3', cost: 'cost3' }
    ],
    toggle: expect.createSpy(),
    isOpen: true
  }
  const component = mount(<Subscriptions {...props} />)
  return {
    panelHeader: component.find(PanelHeader),
    panelBody: component.find(PanelBody),
    props,
    subscriptions: component.find('.Subscriptions__subscription')
  }
}

describe('src/components/Subscriptions', () => {
  it('should render the panel header', () => {
    const { props, panelHeader } = setup()
    expect(panelHeader.props()).toEqual({
      title: 'Package',
      total: props.total,
      toggle: props.toggle,
      isOpen: props.isOpen
    })
  })

  it('should render the panel body', () => {
    const { props, panelBody } = setup()
    expect(panelBody.props().isOpen).toEqual(props.isOpen)
  })

  it('should render the calls', () => {
    const { subscriptions } = setup()
    expect(subscriptions.length).toEqual(3)
  })
})
