import { createReducer } from '../../../app/common/utils/reducerUtils'
import { FETCH_UPCOMING } from '../homeConst'

const initialState = []

const fetchUpcoming = (state, payload) => {
  return payload.upcomingGames
}

export default createReducer(initialState, {
  [FETCH_UPCOMING]: fetchUpcoming
})
