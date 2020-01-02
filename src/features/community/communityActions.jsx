import * as types from './communityConstants'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { createNewCommunity } from '../../app/common/utils/helpers'

const url = 'http://localhost:3001'

export const createCommunity = community => {
  return (dispatch, getState) => {
    const user = getState().auth.currentUser.user
    const newCommunity = createNewCommunity(user, community)
    axios
      .post(`${url}/communities`, {
        community: newCommunity
      })
      .then(response => {
        let community = response.data
        console.log(response.data)
        dispatch({ type: types.CREATE_COMMUNITY, payload: { community } })
        toastr.success('Success!', 'Community has been created!')
      })
      .catch(error => {
        console.log(error)
        toastr.error(
          'Oops!',
          'Please register or log in to create a community!'
        )
      })
  }
}

export const updateCommunity = community => {
  return {
    type: types.UPDATE_COMMUNITY,
    payload: {
      community
    }
  }
}

export const deleteCommunity = communityId => {
  return {
    type: types.DELETE_COMMUNITY,
    payload: {
      communityId
    }
  }
}

export const loadCommunities = () => {
  return (dispatch, getState) => {
    axios
      .get('http://localhost:3001/communities')
      .then(response => {
        let community = response.data
        console.log(community)
        dispatch({ type: types.FETCH_COMMUNITIES, payload: { community } })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
