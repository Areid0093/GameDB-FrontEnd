import axios from 'axios'
import * as types from './gameConstants'

export const fetchGames = ({ query }) => {
  return (dispatch, getState) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    console.log(query)
    axios({
      url: proxy + 'https://api-v3.igdb.com/games',
      method: 'POST',
      headers: {
        Accept: '*',
        'user-key': 'c90cb5de0b345a2d028c840c4d36d540'
      },
      data:
        'f genres.name, first_release_date, cover.url, *;' +
        'limit 10;' +
        'where (cover.url != null & first_release_date != null);' +
        `search "${query}";`
    })
      .then(response => {
        // debugger
        console.log(response.data)
        let games = response.data
        dispatch({ type: types.FETCH_GAMES, payload: { games } })
      })
      .catch(err => {
        console.error(err)
      })
  }
}


