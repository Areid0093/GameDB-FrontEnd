import {
  CREATE_COMMUNITY,
  UPDATE_COMMUNITY,
  DELETE_COMMUNITY,
  FETCH_COMMUNITIES
} from './communityConstants'
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'

export const createCommunity = community => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_COMMUNITY,
        payload: {
          community
        }
      })
      toastr.success('Success!', 'Community has been created!')
    } catch (error) {
      toastr.error('Oops!', 'Something went wrong!')
    }
  }
}

export const updateCommunity = community => {
  return {
    type: UPDATE_COMMUNITY,
    payload: {
      community
    }
  }
}

export const deleteCommunity = communityId => {
  return {
    type: DELETE_COMMUNITY,
    payload: {
      communityId
    }
  }
}

export const loadCommunities = () => {
  return dispatch => {
    axios
      .get('http://localhost:3001/communities')
      .then(response => {
        let communities = response.data
        dispatch(asyncActionStart())
        dispatch({ type: FETCH_COMMUNITIES, payload: { communities } })
        dispatch(asyncActionFinish())
      })
      .catch(error => {
        console.log(error)
        dispatch(asyncActionError())
      })
  }
}
