import { combineReducers } from 'redux'
import { REQUEST_MODULES, RECEIVE_MODULES, RECEIVE_MODULE_DETAILS } from '../actions/actions'

function npmModules(
  state = {
    isFetching: false,
    isSelected: false,
    items: [],
    starCount: 0,
    item: {} }, action) {
  switch (action.type) {

    case RECEIVE_MODULE_DETAILS:
      console.log(action.item)
      return Object.assign({}, state, {
        isFetching: false,
        isSelected: true,
        item: action.item,
        starCount: action.starCount
      })

    case REQUEST_MODULES:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_MODULES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ npmModules })

export default rootReducer
