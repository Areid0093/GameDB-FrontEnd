import React, { Component } from "react";
import { Segment, Item, Button } from "semantic-ui-react";

class TopListItem extends Component {
  render() {
    const {game} = this.props
    let genres =  game.genres[0].name
    let rating = parseInt(game.rating)
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='small' src={game.cover.url} />
              <Item.Content>
                <Item.Header as='a'>{game.name}</Item.Header>
                <Item.Description>
                  Genres: {genres} <br></br>
                  Rating: {rating}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <Button as='a' color='teal' floated='right' content='Favorite' />
        </Segment>
      </Segment.Group>
    );
  }
}

export default TopListItem;
