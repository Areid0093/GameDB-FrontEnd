import React, { Component } from 'react'
import { Segment, Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteFavorite } from '../favoriteActions'

// const mapState = state => ({
//   favorite: state.favorites
// })

const actions = {
  deleteFavorite
}

class FavoriteListItem extends Component {
  handleClick = () => {
    let favorite = this.props.favorite
    this.props.deleteFavorite(favorite)
  }

  render() {
    const { favorite } = this.props
    let photo = favorite.photo
    let name = favorite.name
    // let platforms = game.platforms.map((platform, index) => (index ? ' / ' : '') + platform.name)
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={photo} />
              <Item.Content>
                <Item.Header style={{ fontSize: '15px' }}>{name}</Item.Header>
                <Item.Description>
                  {/* Genre: {genres} <br></br> */}
                  {/* Release Date: {newDate} <br></br> */}
                  {/* Platforms: {platforms}  */}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <Button
            onClick={({ favorite }) => this.handleClick()}
            color='teal'
            floated='right'
            content='Delete'
          />
        </Segment>
      </Segment.Group>
    )
  }
}

export default connect(null, actions)(FavoriteListItem)
