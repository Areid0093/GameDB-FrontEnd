import { createReducer } from '../../app/common/utils/reducerUtils'
import { FETCH_GAMES } from './gameConstants'

const initialState = []

const fetchGames = (state, payload) => {
  return payload.games
}

export default createReducer(initialState, {
    [FETCH_GAMES]: fetchGames
})