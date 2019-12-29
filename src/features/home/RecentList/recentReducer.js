import { createReducer } from '../../../app/common/utils/reducerUtils'
import { FETCH_RECENT } from '../homeConst'

const initialState = []

const fetchRecent = (state, payload) => {
  return payload.recentGames
}

export default createReducer(initialState, {
  [FETCH_RECENT]: fetchRecent
})
