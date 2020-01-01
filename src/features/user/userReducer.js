import { createReducer } from '../../app/common/utils/reducerUtils'
import { UPDATE_PROFILE } from './userConstants'

const initialState = {
  userProfile: null
}

const updateUser = (state, payload) => {
  return {
    userProfile: payload
  }
}

export default createReducer(initialState, {
  [UPDATE_PROFILE]: updateUser
})
