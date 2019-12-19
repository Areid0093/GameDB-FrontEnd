import { createReducer } from '../../../app/common/utils/reducerUtils'
import { FETCH_TOP } from '../homeConst'

const initialState = []

const fetchTop= (state, payload) => {
    return payload.topGames
}

export default createReducer(initialState, {
    [FETCH_TOP]: fetchTop,
})