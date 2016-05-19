import ContentContainer from '../../../src/containers/Content'
import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import ContentComponent from '../../../src/components/Content'

const setup = (bill) => {
  const store = configureStore({
    bill
  })
  const component = mount(
    <Provider store={store}>
      <ContentContainer />
    </Provider>
  )
  return component.find(ContentComponent)
}

describe('src/containers/Content', () => {
  it('should render Content with appropriate bill prop', () => {
    const component = setup({
      key: 'value'
    })
    const { bill } = component.props()
    expect(bill).toEqual({ key: 'value' })
  })
})
