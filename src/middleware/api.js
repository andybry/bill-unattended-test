import fetch from 'isomorphic-fetch'
import { billResponse } from '../actions'

export default store => next => action => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
        .then(response => response.json())
        .then(json => store.dispatch(billResponse(json)))
      return next(action)
    default:
      return next(action)
  }
}
