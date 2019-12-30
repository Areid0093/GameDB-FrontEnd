import { SubmissionError } from 'redux-form'
import * as types from './authConstants'
import axios from 'axios'
import { closeModal } from '../modals/modalActions'

const url = 'http://localhost:3001'

export const registerUser = user => {
  return dispatch => {
    return axios
      .post(`${url}/users`, {
        user: user
      })
      .then(response => {
        const token = response.data.jwt
        let user = response.data
        console.log(response.data)
        localStorage.setItem('token', token)
        dispatch({ type: types.LOGIN_USER, payload: { user } })
        dispatch(closeModal())
      })
      .catch(error => {
        console.log(error)
        throw new SubmissionError({
          _error: 'An account with this email already exists!'
        })
      })
  }
}
export const loginUser = user => {
  return dispatch => {
    return axios
      .post(`${url}/login`, {
        user: user
      })
      .then(response => {
        const token = response.data.jwt
        let user = response.data
        console.log(response.data)
        localStorage.setItem('token', token)
        dispatch({ type: types.LOGIN_USER, payload: { user } })
        dispatch(closeModal())
      })
      .catch(error => {
        console.log(error)
        throw new SubmissionError({
          _error: 'Login Failed'
        })
      })
  }
}


// const login = creds => {
//   return dispatch => {
//     dispatch({ type: types.LOGIN_USER, payload: creds })
//     dispatch(closeModal())
//   }
// }

export const logout = () => {
  return {
    type: types.LOGOUT_USER
  }
}
