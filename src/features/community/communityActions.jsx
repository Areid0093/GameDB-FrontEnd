import { CREATE_COMMUNITY, UPDATE_COMMUNITY, DELETE_COMMUNITY } from "./communityConstants"


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