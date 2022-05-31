import { AnyAction } from 'redux'
import { addPost } from './post'

// action type 선언
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const
export const LOG_OUT = 'LOG_OUT'

// action type interface로 typing
export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST
  data: {
    id: string
    password: string
  }
}

// action creator
export const LogInRequest = (data: { id: string; password: string }): LogInRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}

export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS
  data: {
    userId: number
    nickname: string
  }
}

export const logInSuccess = (data: { userId: number; nickname: string }): LogInSuccessAction => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  }
}

export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE
  error: Error
}

export const logInFailure = (error: Error): LogInFailureAction => {
  return {
    type: LOG_IN_FAILURE,
    error,
  }
}

export interface LogInAction {
  type: typeof LOG_IN_REQUEST
}

// MiddleWare Redux-Thunk 직접 타이핑.
// ThunkDispatch 오버로딩 선언.
// ThunkDispatch가 action을 받을 때 return 값이 있을 수도 있고, 없을 수도 있음을 선언.
export interface ThunkDispatch {
  (thunkAction: ThunkDispatch): void
  <A>(action: A): AnyAction
  // 위 두 가지 상황 | 관계 선언
  <TAction>(action: TAction | ThunkAction): TAction
}

// ThunkAction은 dispatch가 있는 함수다. action이 Thunk를 만나면 객체에서 함수가 되는 것.
type ThunkAction = (dispatch: ThunkDispatch) => void
// ThunkAction을 return하는 ThunkAction creator
// 하나의 action에서 여러 가지 dispatch를 하고 싶을 때 thunk를 쓴다.
// logIn은 Thunk를 사용해 action이 객체가 아닌 함수가 되도록 한다.
export const logIn = (data: { id: string; password: string }): ThunkAction => {
  return (dispatch) => {
    dispatch(LogInRequest(data))

    setTimeout(() => {
      dispatch(
        logInSuccess({
          userId: 1,
          nickname: 'skylar',
        }),
      )
      dispatch(addPost(''))
    }, 1000)
  }
}

export interface LogOutAction {
  type: typeof LOG_OUT
}

// logOut은 일반 action creator
export const logOut = () => {
  return {
    type: LOG_OUT,
  }
}

export type UserReducerActions = LogInFailureAction | LogInRequestAction | LogInSuccessAction | LogOutAction
