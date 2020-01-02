import React, { Component } from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import moment from 'moment'
import { createFavorite } from '../../user/userActions'

const mapState = (state) => ({
  games: state.games
})

const actions = {
  createFavorite
}

class GameListItem extends Component {

  handleClick = () => {
    let gameId = this.props.game.id
    this.props.createFavorite()
    debugger
    console.log('clicked')
  }

  render() {
    // const {createFavorite} = this.props
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
                  Game ID: {gameId}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <Button onClick={this.handleClick} color='teal' floated='right' content='Favorite' />
          {/* <Button as='a' color='teal' floated='left' content='View' /> */}
        </Segment>
      </Segment.Group>
    )
  }
}

export default connect(mapState, actions)(GameListItem)
