import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import communityReducer from '../../features/community/communityReducer'
import modalReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'
import recentReducer from '../../features/home/RecentList/recentReducer'
import upcomingReducer from '../../features/home/UpcomingList/upcomingReducer'
import topReducer from '../../features/home/TopGameList/topReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    communities: communityReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    recentGames: recentReducer,
    upcomingGames: upcomingReducer,
    topGames: topReducer

})

export default rootReducer