import * as actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.BILL_RESPONSE:
      return action.data
    default:
      return state
  }
}
