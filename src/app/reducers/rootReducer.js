import { combineReducers } from 'redux'
import communityReducer from '../../features/community/communityReducer'

const rootReducer = combineReducers({
    communities: communityReducer
})

export default rootReducer