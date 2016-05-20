import panels from '../../../src/reducers/panels'
import expect from 'expect'
import * as actionTypes from '../../../src/constants/actionTypes'
import deepFreeze from 'deep-freeze'

describe('src/reducers/bill', () => {
  it('should return {} as the default state', () => {
    const state = undefined
    const action = {
      type: 'ANY'
    }
    deepFreeze(action)
    expect(panels(state, action)).toEqual({})
  })

  it('should add a panel the first time a panel is toggled', () => {
    const state = {
      panel1: {
        isOpen: true
      }
    }
    const action = {
      type: actionTypes.TOGGLE_PANEL,
      panel: 'panel2'
    }
    const expectedState = {
      panel1: {
        isOpen: true
      },
      panel2: {
        isOpen: true
      }
    }
    deepFreeze(action)
    deepFreeze(state)
    expect(panels(state, action)).toEqual(expectedState)
  })

  it('should toggle a panels state if it is already set', () => {
    const state = {
      panel1: {
        isOpen: true
      }
    }
    const action = {
      type: actionTypes.TOGGLE_PANEL,
      panel: 'panel1'
    }
    const expectedState = {
      panel1: {
        isOpen: false
      }
    }
    deepFreeze(action)
    deepFreeze(state)
    expect(panels(state, action)).toEqual(expectedState)
  })
})
