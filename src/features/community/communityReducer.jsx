import {createReducer} from '../../app/common/utils/reducerUtils'
import { CREATE_COMMUNITY, UPDATE_COMMUNITY, DELETE_COMMUNITY } from './communityConstants'

const initialState = [
    {
      id: 1,
      name: 'noob',
      title: 'noob@noob.com',
      avatar: 'https://wallpapercave.com/wp/wp2178691.jpg'
    },
    {
      id: 2,
      name: 'domer',
      title: 'domer@domer.com',
      avatar: 'https://omair.me/wp-content/uploads/edd/2018/09/100-Free-Gaming-Logo-Design-Templates_-Angry-Game-Controller.jpg'
    }
  ]

const createCommunity = (state, payload) => {
    return [...state, payload.community]
}

const updateCommunity = (state, payload) => {
    return [
        ...state.filter(community => community.id !== payload.community.id), payload.community
    ]
}

const deleteCommunity = (state, payload) => {
    return [
        ...state.filter(community => community.id !== payload.communityId)
    ]
}

export default createReducer(initialState, {
    [CREATE_COMMUNITY]: createCommunity,
    [UPDATE_COMMUNITY]: updateCommunity,
    [DELETE_COMMUNITY]: deleteCommunity
})