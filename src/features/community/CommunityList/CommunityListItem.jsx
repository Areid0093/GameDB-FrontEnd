import React, { Component } from 'react'
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react'
import CommunityListMember from './CommunityListMember'
import { Link } from 'react-router-dom'

class CommunityListItem extends Component {
  render() {
    const { community } = this.props
    console.log(community.platform)
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={community.creatorPhoto} />
              <Item.Content>
                <Item.Header as='a'>{community.name}</Item.Header>
                <Item.Description>
                  Created by {community.creator}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='gamepad' /> {community.title}
          </span>
          <br></br>
          {community.platform === 'Xbox' ? (
            <span>
              <Icon name='xbox' /> {community.platform}
            </span>
          ) : (
            <span></span>
          )}
          {community.platform === 'Windows' ? (
            <span>
              <Icon name='windows' /> {community.platform}
            </span>
          ) : (
            <span></span>
          )}
          {community.platform === 'Playstation' ? (
            <span>
              <Icon name='playstation' /> {community.platform}
            </span>
          ) : (
            <span></span>
          )}
          {community.platform === 'Nintendo Switch' ? (
            <span>
              <Icon name='nintendo switch' /> {community.platform}
            </span>
          ) : (
            <span></span>
          )}
        </Segment>
        <Segment secondary>
          <List horizontal>
            <CommunityListMember />
          </List>
        </Segment>
        <Segment clearing>
          <span> {community.description}</span>
          <Button
            as={Link}
            to={`/communities/${community.id}`}
            color='teal'
            floated='right'
            content='Join'
          />
        </Segment>
      </Segment.Group>
    )
  }
}

export default CommunityListItem
