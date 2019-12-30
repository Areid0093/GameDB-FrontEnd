import { createReducer } from '../../app/common/utils/reducerUtils'
import { LOGIN_USER, LOGOUT_USER } from './authConstants'

const initialState = {
  currentUser: {}
}

const loginUser = (state, payload) => {
  return {
    currentUser: payload
}
}

const logoutUser = () => {
  return {
    currentUser: null
  }
}

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [LOGOUT_USER]: logoutUser
})
