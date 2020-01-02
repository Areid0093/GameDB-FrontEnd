import React from 'react'
import { Segment, Item, Image, Header, Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

const eventImageStyle = {
  filter: 'brightness(30%)'
}

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
}

const CommunityDetailedHeader = ({ community }) => {
  // console.log(community)
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image src='/assets/logo.jpg' fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  // content={community.name}
                  style={{ color: 'white' }}
                />
                <p>
                  Created By <strong>{community.creator}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button color='teal'>JOIN THIS COMMUNITY</Button>
{/* 
        <Button
          as={Link}
          to={`/manage/${community.id}`}
          color='orange'
          floated='right'
        >
          Manage Community
        </Button> */}
      </Segment>
    </Segment.Group>
  )
}

export default CommunityDetailedHeader
