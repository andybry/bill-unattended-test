import Bill from '../../../src/components/Bill'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import Loading from '../../../src/components/Loading'
import Content from '../../../src/components/Content'
import { Provider } from 'react-redux'
import configureStore from '../../../src/store/configureStore'

const setup = (isLoading) => {
  const props = {
    isLoading
  }
  const component = mount(
    <Provider store={configureStore()}>
      <Bill {...props} />
    </Provider>
  )
  return {
    loading: component.find(Loading),
    content: component.find(Content)
  }
}

describe('src/components/Content', () => {
  it('should render the loading component when data isloading', () => {
    const { loading } = setup(true)
    expect(loading.length).toBe(1)
  })

  it('should render the content component when data is loaded', () => {
    const { content } = setup(false)
    expect(content.length).toBe(1)
  })
})
