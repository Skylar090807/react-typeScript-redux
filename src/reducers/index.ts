import { combineReducers } from 'redux'
import postReducer from './post'
import userReducer from './user'

const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
})

export default reducer
