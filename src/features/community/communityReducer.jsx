import { createReducer } from '../../app/common/utils/reducerUtils'
import {
  CREATE_COMMUNITY,
  UPDATE_COMMUNITY,
  DELETE_COMMUNITY,
  FETCH_COMMUNITIES,
  SET_COMMUNITIES
} from './communityConstants'

const initialState = []

const createCommunity = (state, payload) => {
  return [...state, payload.community]
}

const updateCommunity = (state, payload) => {
  return [
    ...state.filter(community => community.id !== payload.community.id),
    payload.community
  ]
}

const deleteCommunity = (state, payload) => {
  return [...state.filter(community => community.id !== payload.communityId)]
}

const fetchCommunities = (state, payload) => {
  return payload.community
}
const setCommunities = (state, payload) => {
  return payload.communities
}

export default createReducer(initialState, {
  [CREATE_COMMUNITY]: createCommunity,
  [UPDATE_COMMUNITY]: updateCommunity,
  [DELETE_COMMUNITY]: deleteCommunity,
  [SET_COMMUNITIES]: setCommunities,
  [FETCH_COMMUNITIES]: fetchCommunities
})
