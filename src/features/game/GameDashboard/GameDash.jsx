import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Header, Icon } from 'semantic-ui-react'
import GameList from '../GameList/GameList'

class GameDash extends Component {
  state = {
    games: []
  }

  componentDidMount() {
    this.fetchGames()
  }

  fetchGames = () => {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    let query = 'sonic'
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
        console.log(response)
        this.setState({ games: response.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { games } = this.state
    let first = games.filter((x, i) => !(i % 2))
    let second = games.filter((x, i) => i % 2)
    return (
      <Header as='h2' size='huge' color='teal' icon>
        Game Database
        <Icon size='tiny' color='teal' name='gamepad' />
        <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column>
            <GameList games={first} />
          </Grid.Column>
          <Grid.Column>
            <GameList games={second} />
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Header>
    )
  }
}

export default GameDash
