import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import CommunityList from '../CommunityList/CommunityList'
import { connect } from 'react-redux'
import {
  createCommunity,
  updateCommunity,
  deleteCommunity
} from '../communityActions'
import CommunityFeed from '../CommunityFeed/CommunityFeed'

const mapState = state => ({
  communities: state.communities
})

const actions = {
  createCommunity,
  updateCommunity,
  deleteCommunity
}

class CommunityDashboard extends Component {
  render() {
    const { communities } = this.props
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>Communities</h2>
          <CommunityList communities={communities} />
        </GridColumn>
        <GridColumn width={6}>
          <CommunityFeed />
        </GridColumn>
      </Grid>
    )
  }
}

export default connect(mapState, actions)(CommunityDashboard)
