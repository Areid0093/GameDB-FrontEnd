import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import * as types from './favoriteConstants'
import { createNewFavorite } from '../../app/common/utils/helpers'

const url = 'http://localhost:3001'

export const createFavorite = game => {
  return (dispatch, getState) => {
    const user = getState().auth.currentUser.user
    console.log(game.id)
    const newFavorite = createNewFavorite(user, game)
    axios
      .post(`${url}/favorites`, {
        favorite: newFavorite
      })
      .then(response => {
        let favorite = response.data
        console.log(response.data)
        dispatch({ type: types.CREATE_FAVORITE, payload: { favorite } })
        toastr.success('Success!', 'Game added to favorites!')
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

export const fetchFavorites = () => {
  return (dispatch, getState) => {
    axios.get(`${url}/favorites`)
    .then(response => {
      let favorite = response.data
      dispatch({ type: types.FETCH_FAVORITES, payload: { favorite } })
      console.log(favorite)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
export const deleteFavorite = favorite => {
  return (dispatch, getState) => {
    console.log(favorite)
    axios.delete(`${url}/favorites/${favorite.id}`)
    .then(response => {
      let favorite = response.data
      console.log(favorite)
      dispatch({ type: types.DELETE_FAVORITE, payload: { favorite } })
      console.log(favorite)
    })
    .catch(error => {
      console.log(error)
    })
  }
}