import React, { Component } from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import moment from 'moment'

class RecentListItem extends Component {
  render() {
    const { game } = this.props
    let date = game.first_release_date
    let newDate = moment(new Date(date * 1000)).format('MM/DD/YYYY')
    let genres = game.genres[0].name
    let photo = game.cover.url
    let name = game.name
    // let platforms = game.platforms.map((platform, index) => (index ? ' / ' : '') + platform.name)
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={photo} />
              <Item.Content>
                <Item.Header style={{fontSize: '15px'}}>{name}</Item.Header>
                <Item.Description>
                  Genre: {genres} <br></br>
                  Release Date: {newDate} <br></br>
                  {/* Platforms: {platforms}  */}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        {/* <Segment clearing>
          <Button as='a' color='teal' floated='right' content='Favorite' />
        </Segment> */}
      </Segment.Group>
    )
  }
}

export default RecentListItem
