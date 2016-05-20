import CallCharges from '../../../src/components/CallCharges'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import PanelHeader from '../../../src/components/PanelHeader'
import PanelBody from '../../../src/components/PanelBody'

const setup = () => {
  const props = {
    total: 1,
    calls: [
      { called: 'call1', duration: 'duration1', cost: 'cost1' },
      { called: 'call2', duration: 'duration2', cost: 'cost2' },
      { called: 'call3', duration: 'duration3', cost: 'cost3' }
    ],
    toggle: expect.createSpy(),
    isOpen: true
  }
  const component = mount(<CallCharges {...props} />)
  return {
    panelHeader: component.find(PanelHeader),
    panelBody: component.find(PanelBody),
    props,
    calls: component.find('.CallCharges__call')
  }
}

describe('src/components/CallCharges', () => {
  it('should render the panel header', () => {
    const { props, panelHeader } = setup()
    expect(panelHeader.props()).toEqual({
      title: 'Call Charges',
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
    const { calls } = setup()
    expect(calls.length).toEqual(3)
  })
})
