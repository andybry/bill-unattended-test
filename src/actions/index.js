import * as actionTypes from '../constants/actionTypes'

export const billResponse = (data) => ({
  type: actionTypes.BILL_RESPONSE, data
})

export const togglePanel = (panel) => ({
  type: actionTypes.TOGGLE_PANEL,
  panel
})
