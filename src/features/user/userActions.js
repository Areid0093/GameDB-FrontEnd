import { toastr } from 'react-redux-toastr'
import { SubmissionError } from 'redux-form'
import * as types from '../auth/authConstants'
import {CREATE_FAVORITE} from './userConstants'
import axios from 'axios'
import { createNewFavorite } from '../../app/common/utils/helpers'

const url = 'http://localhost:3001'

export const updateProfile = user => {
  return (dispatch, getState) => {
    let userId = localStorage.getItem('userId')
    const { password_digest, created_at, updated_at, id, ...updatedUser } = user
    axios
      .patch(`${url}/users/${userId}`, {
        user: updatedUser
      })
      .then(response => {
        console.log(user)
        dispatch({ type: types.LOGIN_USER, payload: { user } })
        toastr.success('Success', 'Your profile has been updated')
      })
      .catch(error => {
        throw new SubmissionError({
          _error: error.message
        })
      })
  }
}

export const createFavorite = favorite => {
  return (dispatch, getState) => {
    const user = getState().auth.currentUser.user
    const game = getState().games.id
    const newFavorite = createNewFavorite(user, game, favorite)
    axios
      .post(`${url}/favorites`, {
        favorite: newFavorite
      })
      .then(response => {
        let favorite = response.data
        console.log(response.data)
        dispatch({ type: CREATE_FAVORITE, payload: { favorite } })
        toastr.success('Success!', 'Community has been created!')
      })
      .catch(error => {
        console.log(error)
        toastr.error(
          'Oops!',
          'Please register or log in to create a community!'
        )
      })
  }
}
