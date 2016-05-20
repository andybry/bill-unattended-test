import Content from '../../../src/components/Content'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import data from '../../fixtures/bill.json'
import Summary from '../../../src/components/Summary'
import Subscriptions from '../../../src/components/Subscriptions'
import SkyStore from '../../../src/components/SkyStore'
import CallCharges from '../../../src/components/CallCharges'

const setup = () => {
  const toggle = expect.createSpy()
  const boundToggle = expect.createSpy()
  toggle.bind = () => boundToggle
  const props = {
    bill: data,
    toggle,
    panels: {
      subscriptions: {
        isOpen: true
      }
    }
  }
  const component = shallow(<Content {...props} />)
  return {
    summary: component.find(Summary),
    subscriptions: component.find(Subscriptions),
    skystore: component.find(SkyStore),
    callCharges: component.find(CallCharges),
    boundToggle
  }
}

describe('src/components/Content', () => {
  it('should render the summary section', () => {
    const { summary } = setup()
    expect(summary.props()).toEqual({
      total: data.total,
      statement: data.statement
    })
  })

  it('should render the subscriptions section', () => {
    const { subscriptions, boundToggle } = setup()
    expect(subscriptions.props()).toEqual({
      total: data.package.total,
      subscriptions: data.package.subscriptions,
      toggle: boundToggle,
      isOpen: true
    })
  })

  it('should render the sky store section', () => {
    const { skystore, boundToggle } = setup()
    expect(skystore.props()).toEqual({
      total: data.skyStore.total,
      rentals: data.skyStore.rentals,
      buyAndKeep: data.skyStore.buyAndKeep,
      toggle: boundToggle,
      isOpen: false
    })
  })

  it('should render the call charges section', () => {
    const { callCharges, boundToggle } = setup()
    expect(callCharges.props()).toEqual({
      total: data.callCharges.total,
      calls: data.callCharges.calls,
      toggle: boundToggle,
      isOpen: false
    })
  })
})
