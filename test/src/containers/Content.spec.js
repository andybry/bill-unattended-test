import ContentContainer from '../../../src/containers/Content'
import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'
import configureStore from '../../../src/store/configureStore'
import { Provider } from 'react-redux'
import ContentComponent from '../../../src/components/Content'
import data from '../../fixtures/bill.json'
import * as actions from '../../../src/actions'

const setup = (bill) => {
  const panels = {}
  const store = configureStore({
    bill,
    panels
  })
  store.dispatch = expect.createSpy()
  const component = mount(
    <Provider store={store}>
      <ContentContainer />
    </Provider>
  )
  const content = component.find(ContentComponent)
  return {
    props: content.props(),
    panels,
    store
  }
}

describe('src/containers/Content', () => {
  it('should render Content with appropriate bill prop', () => {
    const { bill } = setup(data).props
    expect(bill).toEqual(data)
  })

  it('should render Content with appropriate panel state', () => {
    const { props, panels } = setup(data)
    const actual = props.panels
    expect(actual).toEqual(panels)
  })

  it('should correctly calculate the toggle prop', () => {
    const { props, store } = setup(data)
    const { toggle } = props
    toggle('panel')
    expect(store.dispatch).toHaveBeenCalledWith(
      actions.togglePanel('panel')
    )
  })
})
