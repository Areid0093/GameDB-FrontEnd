import React, { Component } from "react";
import { Segment, Item, Button, Icon } from "semantic-ui-react";
import moment from 'moment'

class GameListItem extends Component {
  render() {
    const { game } = this.props;
    let date = game.first_release_date;
    let newDate = moment(new Date(date * 1000)).format("MM/DD/YYYY");
    let genres = game.genres !== undefined ? game.genres[0].name : "Miscellaneous";
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              {/* <Item.Image size='small' src={game.cover.url} /> */}
              <Item.Content>
                <Item.Header as='a'>{game.name}</Item.Header>
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
        </Segment>
      </Segment.Group>
    );
  }
}

export default GameListItem;
