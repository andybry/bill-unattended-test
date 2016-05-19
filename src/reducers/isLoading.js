import * as actionTypes from '../constants/actionTypes'

export default (state = true, action) => {
  switch (action.type) {
    case actionTypes.BILL_RESPONSE:
      return false
    default:
      return state
  }
}
