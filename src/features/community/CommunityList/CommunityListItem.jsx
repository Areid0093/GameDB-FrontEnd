import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import CommunityListMember from "./CommunityListMember";

class CommunityListItem extends Component {
  render() {
    const {member} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={member.avatar} />
              <Item.Content>
                <Item.Header as='a'>{member.username}</Item.Header>
                <Item.Description>
                  Created by <a>{member.username}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment secondary>
          <List horizontal>
          <CommunityListMember />
          </List>
        </Segment>
        <Segment clearing>
        <span> Description will go here!! </span>
          <Button as='a' color='teal' floated='right' content='Join' />
        </Segment>
      </Segment.Group>
    );
  }
}

export default CommunityListItem;
