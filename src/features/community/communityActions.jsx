import * as types from './communityConstants'
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions'
import { toastr } from 'react-redux-toastr'
import axios from 'axios'

const url = 'http://localhost:3001'

// export const createCommunity = community => {
//   return async dispatch => {
//     try {
//       dispatch({
//         type: CREATE_COMMUNITY,
//         payload: {
//           community
//         }
//       })
//       toastr.success('Success!', 'Community has been created!')
//     } catch (error) {
//       toastr.error('Oops!', 'Something went wrong!')
//     }
//   }
// }

export const createCommunity = (community) => {
  return dispatch => {
    return axios
      .post(`${url}/communities`, {
        community: community
      })
      .then(response => {
        let community = response.data
        console.log(response.data)
        dispatch({ type: types.CREATE_COMMUNITY, payload: { community } })
        toastr.success('Success!', 'Community has been created!')
      })
      .catch(error => {
        console.log(error)
        toastr.error('Oops!', 'Something went wrong!')
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
  return dispatch => {
    axios
      .get('http://localhost:3001/communities')
      .then(response => {
        let communities = response.data
        dispatch(asyncActionStart())
        dispatch({ type: types.FETCH_COMMUNITIES, payload: { communities } })
        dispatch(asyncActionFinish())
      })
      .catch(error => {
        console.log(error)
        dispatch(asyncActionError())
      })
  }
}
