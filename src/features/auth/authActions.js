import { SubmissionError } from 'redux-form'
import * as types from './authConstants'
import axios from 'axios'
import { closeModal } from '../modals/modalActions'

const url = 'http://localhost:3001'

// export const signUp = (user) => {
//   const newUser = user
//   return dispatch => {
//     axios.post(`${url}/users`, {
//       user: user
//     })
//     .then(response => {
//       dispatch(authenticate({
//         email: newUser.email,
//         password: newUser.password
//       })
//       )
//       dispatch(closeModal())
//     })
//     .catch((errors) => {
//       dispatch(authFailure(errors))
//     })
//   } 
// }

export const registerUser = user => {
  return dispatch => {
    return axios.post(`${url}/users`, {
      user: user
    })
    .then(response => {
      const token = response.jwt
      let user = response.data
      console.log(response.data)
      localStorage.setItem('token', token)
      dispatch({ type: types.LOGIN_USER, payload: { user } })
      dispatch(closeModal())
    })
    .catch((error) => {
      console.log(error)
      throw new SubmissionError({
        _error: error.message
      })
    })
  }
}

const login = creds => {
  return dispatch => {
    dispatch({ type: types.LOGIN_USER, payload: creds})
    dispatch(closeModal())
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT_USER
  }
}
