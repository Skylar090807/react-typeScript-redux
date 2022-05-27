// redux는 초기 state를 하나로 모아준다.
import { AnyAction, createStore, Dispatch, MiddlewareAPI } from 'redux'
import reducer from '../reducers/index'

// useReducer와 Context API의 createContext를 하나로 합친 것과 같다.
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
}

// 미들웨어는 삼단 고차함수로 되어있다.
// param action은 모든 action에 동작하기 때문에 AnyAction을 typing 했지만 선언해둔 action 다섯 개를 모두 typing 해줘도 된다.
const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  console.log('로깅', action)
  next(action)
}

const store = createStore(reducer, initialState)

export default store
