import produce from 'immer'
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, UserReducerActions } from './../actions/user'

export interface UserState {
  isLoggingIn: boolean
  data: {
    nickname: string
  } | null
}

// UserState가 type으로 실제 쓰일 때 로그인 정보가 없으면 null이 될 수 있다
// data type을 | null 로 명시해주는 것이 좋다.
const initialState: UserState = {
  isLoggingIn: false,
  data: null,
}

// Immer 사용
// Immer를 사용하면 불변성을 지키지 않아도 된다.
const userReducer = (prevState = initialState, action: UserReducerActions) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null
        draft.isLoggingIn = true
        break
      case LOG_IN_SUCCESS:
        draft.data = action.data
        draft.isLoggingIn = false
        break
      case LOG_IN_FAILURE:
        draft.data = null
        draft.isLoggingIn = false
        break
      case LOG_OUT:
        // immer를 사용하면 ... 전개 연산자로 state를 복사해서 불변성 유지할 필요 없다.
        // return {
        //   ...prevState,
        //   data: null,
        // }
        draft.data = null
        break
      default:
        return prevState
    }
  })
}

export default userReducer
