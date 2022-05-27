import { AddPostAction, ADD_POST } from '../actions/post'

// initialState는 객체여야 한다. 배열도 결국 객체이기 때문에 허용된다.
// const initialState: any[]

// typeScript에서 any 상태로 두는 것은 좋지 않기 때문에 type을 명시한다.
const initialState: string[] = []

const postReducer = (prevState = initialState, action: AddPostAction): string[] => {
  switch (action.type) {
    case ADD_POST:
      return [...prevState, action.data]
    default:
      return prevState
  }
}

export default postReducer
