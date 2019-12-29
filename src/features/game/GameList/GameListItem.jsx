import React, { Component } from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import moment from 'moment'

class GameListItem extends Component {
  render() {
    const { game } = this.props
    let date = game.first_release_date
    let newDate = moment(new Date(date * 1000)).format('MM/DD/YYYY')
    let genres =
      game.genres !== undefined ? game.genres[0].name : 'Miscellaneous'
    let photo = game.cover.url
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
          <Button as='a' color='teal' floated='right' content='Favorite' />
          <Button as='a' color='teal' floated='left' content='View' />
        </Segment>
      </Segment.Group>
    )
  }
}

export default GameListItem
