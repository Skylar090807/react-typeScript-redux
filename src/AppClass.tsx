import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { logIn, logOut } from './actions/user'
import { RootState } from './reducers'
import { UserState } from './reducers/user'

interface StateProps {
  user: UserState
}

interface DispatchToProps {
  dispatchLogIn: ({ id, password }: { id: string; password: string }) => void
  dispatchLogOut: () => void
}

type State = {}

class AppClass extends Component<StateProps & DispatchToProps> {
  onClick = () => {
    this.props.dispatchLogIn({
      id: 'skylar',
      password: '1234',
    })
  }

  onLogOut = () => {
    this.props.dispatchLogOut()
  }

  render() {
    const { user } = this.props

    return (
      <div>
        {user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요.'}
        {!user.data ? (
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogOut}>로그아웃</button>
        )}
      </div>
    )
  }
}

// mapStateToProps의 parameter state는 src/reducers/index.ts const reducer이다.
const mapStateToProps = (state: RootState) => ({
  user: state.user,
  posts: state.posts,
}) // reselect 쓰는 경우도 있다.

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // dispatchLogIn: (data: { id: string; password: string }) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppClass)
