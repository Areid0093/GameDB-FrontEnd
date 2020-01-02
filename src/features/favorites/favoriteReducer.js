import { createReducer } from '../../app/common/utils/reducerUtils'
import { CREATE_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE } from './favoriteConstants'

const initialState = []

const createFavorite = (state, payload) => {
    return {
      favorite: payload
    }
}
const fetchFavorites = (state, payload) => {
    return {
      favorite: payload
    }
}

const deleteFavorite = (state, payload) => {
  return [...state.filter(favorite => favorite.id !== payload.favorite.id)]
}

export default createReducer(initialState, {
  [CREATE_FAVORITE]: createFavorite,
  [FETCH_FAVORITES]: fetchFavorites,
  [DELETE_FAVORITE]: deleteFavorite
})
// return [...state.filter(favorite => favorite.id !== payload.id)]