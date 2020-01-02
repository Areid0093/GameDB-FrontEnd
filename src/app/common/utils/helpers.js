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

export const createNewFavorite = (user, game, favorite) => {
    return {
        ...favorite,
        user_id: user.id,
        game_id: game.id,
        photo: game.cover.url,
        name: game.name
    }
}