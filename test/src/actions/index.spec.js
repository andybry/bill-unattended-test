import * as actions from '../../../src/actions'
import * as actionTypes from '../../../src/constants/actionTypes'
import expect from 'expect'

describe('src/actions/index', () => {
  describe('billResponse', () => {
    it('should return a BILL_RESPONSE action with data', () => {
      expect(actions.billResponse('data'))
        .toEqual({
          type: actionTypes.BILL_RESPONSE,
          data: 'data'
        })
    })
  })

  describe('togglePanel', () => {
    it('should return a TOGGLE_PANEL with panel', () => {
      expect(actions.togglePanel('panel'))
        .toEqual({
          type: actionTypes.TOGGLE_PANEL,
          panel: 'panel'
        })
    })
  })
})
