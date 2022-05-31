import produce from 'immer'
import { AddPostAction, ADD_POST } from '../actions/post'

// initialState는 객체여야 한다. 배열도 결국 객체이기 때문에 허용된다.
// const initialState: any[]

// typeScript에서 any 상태로 두는 것은 좋지 않기 때문에 type을 명시한다.
const initialState: string[] = []

const postReducer = (prevState = initialState, action: AddPostAction): string[] => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case ADD_POST:
        // immer 사용 시 전개 연산자로 불변성 지켜주지 않아도 된다.
        // return [...prevState, action.data]
        draft.push(action.data)
        break
      default:
        break
    }
  })
}

export default postReducer
