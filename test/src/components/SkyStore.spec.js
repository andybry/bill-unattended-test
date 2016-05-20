import SkyStore from '../../../src/components/SkyStore'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import PanelHeader from '../../../src/components/PanelHeader'
import PanelBody from '../../../src/components/PanelBody'

const setup = () => {
  const props = {
    total: 1,
    rentals: [
      { title: 'title1', cost: 'cost1' },
      { title: 'title2', cost: 'cost2' },
      { title: 'title3', cost: 'cost3' }
    ],
    buyAndKeep: [
      { title: 'title1', cost: 'cost1' },
      { title: 'title2', cost: 'cost2' }
    ],
    toggle: expect.createSpy(),
    isOpen: true
  }
  const component = mount(<SkyStore {...props} />)
  return {
    panelHeader: component.find(PanelHeader),
    panelBody: component.find(PanelBody),
    props,
    rentals: component.find('.SkyStore__rental'),
    buyAndKeep: component.find('.SkyStore__buyAndKeep')
  }
}

describe('src/components/SkyStore', () => {
  it('should render the panel header', () => {
    const { props, panelHeader } = setup()
    expect(panelHeader.props()).toEqual({
      title: 'Sky Store',
      total: props.total,
      toggle: props.toggle,
      isOpen: props.isOpen
    })
  })

  it('should render the panel body', () => {
    const { props, panelBody } = setup()
    expect(panelBody.props().isOpen).toEqual(props.isOpen)
  })

  it('should render rentals', () => {
    const { rentals } = setup()
    expect(rentals.length).toEqual(3)
  })

  it('should render buyAndKeep', () => {
    const { buyAndKeep } = setup()
    expect(buyAndKeep.length).toEqual(2)
  })
})
