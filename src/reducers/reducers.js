import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_ITEM } from '../actions/actions'

function npmModules(
  state = { isFetching: false, isSelected: false, items: [], item: {} }, action) {
  switch (action.type) {
    case SELECT_ITEM:
      console.log(action.item)
      return Object.assign({}, state, {
        isSelected: true,
        item: action.item
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
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