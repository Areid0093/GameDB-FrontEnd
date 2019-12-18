import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import communityReducer from '../../features/community/communityReducer'
import modalReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    communities: communityReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})

export default rootReducer