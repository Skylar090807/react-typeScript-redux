// redux는 초기 state를 하나로 모아준다.
import { createStore } from 'redux'
import reducer from '../reducers/index'

// useReducer와 Context API의 createContext를 하나로 합친 것과 같다.
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
}

const store = createStore(reducer, initialState)

export default store
