import { CREATE_COMMUNITY, UPDATE_COMMUNITY, DELETE_COMMUNITY, FETCH_COMMUNITIES, SET_COMMUNITIES } from "./communityConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions"
import axios from "axios"


export const createCommunity = (community) => {
    return {
        type: CREATE_COMMUNITY,
        payload: {
            community
        }
    }
}

export const updateCommunity = (community) => {
    return {
        type: UPDATE_COMMUNITY,
        payload: {
            community
        }
    }
}

export const deleteCommunity = (communityId) => {
    return {
        type: DELETE_COMMUNITY,
        payload: {
            communityId
        }
    }
}

// export const setCommunities = (communities) => {
//     return {
//         type: SET_COMMUNITIES,
//         payload: {
//             communities
//         }
//     }
// }

// export const fetchCommunities = () => {
//     return dispatch => {
//         axios.get('http://localhost:3001/communities')
//             .then(response => {
//                 dispatch(setCommunities(response.data))
//                 console.log(response.data)
//             })
//     }
// }



export const loadCommunities = () => {
    return dispatch => {
        axios.get('http://localhost:3001/communities').then(response => {
            let communities = response.data
            dispatch(asyncActionStart())
            dispatch({type: FETCH_COMMUNITIES, payload: {communities}})
            dispatch(asyncActionFinish())
            console.log(communities)
        })
        .catch(error => {
            console.log(error)
            dispatch(asyncActionError())
        })
    }
}