import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import isLoading from './isLoading'
import bill from './bill'

export default combineReducers({
  isLoading,
  bill,
  routing
})
