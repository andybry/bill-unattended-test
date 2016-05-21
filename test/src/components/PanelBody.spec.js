import PanelBody from '../../../src/components/PanelBody'
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

const setup = (isOpen) => {
  const props = {
    isOpen
  }
  const component = shallow(
    <PanelBody {...props}>body</PanelBody>
  )
  return {
    panelBody: component.find('.PanelBody')
  }
}

describe('src/component/PanelBody', () => {
  it('should render the body when open', () => {
    const { panelBody } = setup(true)
    expect(panelBody.text()).toBe('body')
  })

  it('should not render the body when closed', () => {
    const { panelBody } = setup(false)
    expect(panelBody.text()).toBe('')
  })
})
