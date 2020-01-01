import { SubmissionError, reset } from 'redux-form'
import * as types from './authConstants'
import axios from 'axios'
import { closeModal } from '../modals/modalActions'
import { toastr } from 'react-redux-toastr'

const url = 'http://localhost:3001'

export const registerUser = user => {
  return (dispatch, getState) => {
    return axios
      .post(`${url}/users`, {
        user: user
      })
      .then(response => {
        const token = response.data.jwt
        let userId = response.data.user.id
        let user = response.data
        console.log(response.data.jwt)
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
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
  return (dispatch, getState)  => {
    return axios
      .post(`${url}/login`, {
        user
      })
      .then(response => {
        const token = response.data.jwt
        let userId = response.data.user.id
        let user = response.data.user
        console.log(response.data)
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
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

export const updatePassword = user => {
  return (dispatch, getState) => {
    let userId = localStorage.getItem('userId')
     axios.patch(`${url}/users/${userId}`, {
      user: {password: user.newPassword1}
    })
    .then(response => {
      console.log(response)
      dispatch(reset('account'))
      toastr.success('Success', 'Your password has been updated')
    })
    .catch(error => {
      throw new SubmissionError({
        _error: error.message
      })
    })
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT_USER
  }
}
