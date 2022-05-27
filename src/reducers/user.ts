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

const userReducer = (prevState = initialState, action: UserReducerActions) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
    case LOG_IN_SUCCESS:
    case LOG_IN_FAILURE:
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      }

    default:
      return prevState
  }
}

export default userReducer
function produce() {
  throw new Error('Function not implemented.')
}
