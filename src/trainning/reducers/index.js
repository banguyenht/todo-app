import status from './status'
import sort from './sort'
import { combineReducers } from 'redux'

var myReducer = combineReducers({ status: status, sort: sort})
export default myReducer