import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, UserReducerActions } from './../actions/user'
const initialState = {
  isLoggingIn: false,
  data: null,
}

const userReducer = (prevState = initialState, action: UserReducerActions) => {
  switch (action.type) {
    case LOG_IN_REQUEST:

    default:
      return prevState
  }
}

export default userReducer
function produce() {
  throw new Error('Function not implemented.')
}
