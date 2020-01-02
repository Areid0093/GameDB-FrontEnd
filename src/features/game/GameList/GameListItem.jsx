import React, { Component } from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import moment from 'moment'
import { createFavorite, fetchFavorites } from '../../favorites/favoriteActions'


const mapState = (state) => ({
  favorite: state.games
})

const actions = {
  createFavorite,
  fetchFavorites
}

class GameListItem extends Component {

  handleClick = () => {
    let game = this.props.game
    this.props.createFavorite(game)
    this.props.fetchFavorites()
  }

  render() {
    const { game } = this.props
    let date = game.first_release_date
    let newDate = moment(new Date(date * 1000)).format('MM/DD/YYYY')
    let genres =
      game.genres !== undefined ? game.genres[0].name : 'Miscellaneous'
    let photo = game.cover.url
    let gameId = game.id
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={photo} />
              <Item.Content>
                <Item.Header>{game.name}</Item.Header>
                <Item.Description>
                  Genre: {genres} <br></br>
                  Release Date: {newDate}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <Button onClick={({game}) => this.handleClick()} color='teal' floated='right' content='Favorite' />
        </Segment>
      </Segment.Group>
    )
  }
}

export default connect(mapState, actions)(GameListItem)
