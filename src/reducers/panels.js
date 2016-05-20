import * as actionTypes from '../constants/actionTypes'

const panel = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_PANEL:
      return {
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}

const panels = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_PANEL:
      return {
        ...state,
        [action.panel]: panel(state[action.panel], action)
      }
    default:
      return state
  }
}

export default panels
