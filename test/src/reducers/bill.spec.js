import bill from '../../../src/reducers/bill'
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
    expect(bill(state, action)).toEqual({})
  })

  it('should return the current state by default', () => {
    const state = {}
    const action = {
      type: 'ANY'
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(bill(state, action)).toBe(state)
  })

  it('should extract data for BILL_RESPONSE action', () => {
    const state = {}
    const action = {
      type: actionTypes.BILL_RESPONSE,
      data: 'data'
    }
    const expectedState = 'data'
    deepFreeze(state)
    deepFreeze(action)
    expect(bill(state, action)).toEqual(expectedState)
  })
})
