import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import isLoading from './isLoading'
import bill from './bill'
import panels from './panels'

export default combineReducers({
  panels,
  isLoading,
  bill,
  routing
})
