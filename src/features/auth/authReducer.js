import { createReducer } from '../../app/common/utils/reducerUtils'
import { LOGIN_USER, LOGOUT_USER } from './authConstants'

const initialState = {
  currentUser: null,
  authenticated: false
}

const loginUser = (state, payload) => {
  return {
    currentUser: payload,
    authenticated: true
  }
}

const logoutUser = () => {
  return {
    currentUser: null,
    authenticated: false
  }
}

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGOUT_USER]: logoutUser
})
