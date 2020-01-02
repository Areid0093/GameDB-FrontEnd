export const createNewCommunity = (user, community) => {
    return {
        ...community,
        creatorId: user.id,
        creator: user.email,
        creatorPhoto: '/assets/test.jpg',
        // members: {
        //     [user.id]: {

        //     }
        // }
    }
}