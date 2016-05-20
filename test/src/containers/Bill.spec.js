import BillContainer from '../../../src/containers/Bill'
import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import BillComponent from '../../../src/components/Bill'
import data from '../../fixtures/bill.json'

const setup = (isLoading) => {
  const store = configureStore({
    isLoading,
    bill: data
  })
  const component = mount(
    <Provider store={store}>
      <BillContainer />
    </Provider>
  )
  return component.find(BillComponent)
}

describe('src/containers/Bill', () => {
  it('should render Bill with appropriate isLoading prop', () => {
    const component = setup(false)
    const { isLoading } = component.props()
    expect(isLoading).toBe(false)
  })
})
