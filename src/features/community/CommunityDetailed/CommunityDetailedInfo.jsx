import React from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'

const CommunityDetailedInfo = ({ community }) => {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            {/* <p>{community.description}</p> */}
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={15}>
            {/* <span>{community.created_at}</span> */}
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='marker' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={11}>
            {/* <span>{community.game}</span> */}
          </Grid.Column>
          <Grid.Column width={4}>
            <Button color='teal' size='tiny' content='Show Games' />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  )
}

export default CommunityDetailedInfo
