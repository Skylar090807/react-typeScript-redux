// redux는 초기 state를 하나로 모아준다.
import { AnyAction, applyMiddleware, compose, createStore, Dispatch, MiddlewareAPI } from 'redux'
import reducer from '../reducers/index'

// useReducer와 Context API의 createContext를 하나로 합친 것과 같다.
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
}

// 미들웨어 사용법

// 미들웨어는 삼단 고차함수로 되어있다.
// param action은 모든 action에 동작하기 때문에 AnyAction을 typing 했지만 선언해둔 action 다섯 개를 모두 typing 해줘도 된다.

// 미들웨어를 삼단 고차함수로 만들어준다.
// 로깅 해주는 미들웨어
const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  console.log('로깅', action)
  next(action)
}

// redux-thunk
// yarn add redux-thunk 해줘도 되지만 입력할 코드가 간소하여 타이핑 함.
// action은 객체다. thunk는 action을 비동기적으로 하기 위해 객체인 action을 function으로 바꿔주는 것.
const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  if (typeof action === 'function') {
    //비동기
    // 세 번째 param action의 type을 AnyAction으로 선언했었다. 그러나 AnyAction은 객체이므로 type 선언을 객체로 해두고 function으로 return하면
    // 당연히 에러가 발생한다. 때문에 우선 action:any 로 type을 변경해줬다.
    return action(store.dispatch, store.getState)
  }
  return next(action) //동기
}

// 미들웨어 장착은 enhancer = compose(applyMiddleware)로 한다.
// enhancer에 삼단 고차 함수로 선언한 미들웨어를 compose(applyMiddleware(firtstMiddleware))와 같이 넣어준다.
// enhancer를 환경에 따라 구분해서 사용하기. (배포환경이나 dev환경에 따라 구분)
// const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(firstMiddleware, thunkMiddleware)) : ''
const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware))

// enhancer를 createStore에 적용한다.
const store = createStore(reducer, initialState, enhancer)

export default store
function composeWithDevTools() {
  throw new Error('Function not implemented.')
}
