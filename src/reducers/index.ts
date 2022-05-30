import { combineReducers } from 'redux'
import postReducer from './post'
import userReducer from './user'

// reducer는 통째로 src/AppClass의 mapStateToProps의 parameter state로 전달된다.
const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
})

// ReturnType을 하지 않으면 아래와 같이 전부 명시 된다.
// type RootState = (state: CombinedState<{
// user: UserState;
// posts: string[];
// }> | undefined, action: UserReducerActions | AddPostAction) => CombinedState<...>

// Utility
// 함수 type의 return 값만 뽑아오고 싶을 때는 ReturnType을 사용하면 된다.
// type RootState = EmptyObject & {
//   user: UserState;
//   posts: string[];
// }
export type RootState = ReturnType<typeof reducer>

export default reducer
