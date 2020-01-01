import { toastr } from 'react-redux-toastr'
import { SubmissionError } from 'redux-form'
import * as types from '../auth/authConstants'
import axios from 'axios'

const url = 'http://localhost:3001'

export const updateProfile = user => {
  return (dispatch, getState) => {
    let userId = localStorage.getItem('userId')
    const { password_digest, created_at, updated_at, id, ...updatedUser } = user
    axios
      .patch(`${url}/users/${userId}`, {
        user
        // {email: user.email, platform: user.platform, gender: user.gender, birthday: user.birthday}
      })
      .then(response => {
        console.log(user)
        dispatch({ type: types.LOGIN_USER, payload: { user } })
        toastr.success('Success', 'Your password has been updated')
      })
      .catch(error => {
        throw new SubmissionError({
          _error: error.message
        })
      })
  }
}
