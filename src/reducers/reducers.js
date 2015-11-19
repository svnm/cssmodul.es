import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actions'

/* posts */
function posts(
  state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.components,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ posts })

export default rootReducer