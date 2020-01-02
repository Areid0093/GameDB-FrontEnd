import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import CommunityDetailedHeader from './CommunityDetailedHeader'
import CommunityDetailedInfo from './CommunityDetailedInfo'
import CommunityDetailedChat from './CommunityDetailedChat'
import CommunityDetailedSidebar from './CommunityDetailedSidebar'
import axios from 'axios'

const mapState = (state, ownProps) => {
  const communityId = ownProps.match.params.id
  console.log(state.communities)
  console.log(state.communities.length)
  let community = {}
  
  if (state.communities && state.communities.length > 0) {
    community = state.communities.filter(
      community => community.id === communityId
    )[0]
  }
  debugger
  return {
    community
  }
}

class CommunityDetailedPage extends Component {

  // async componentDidMount() {
  //   const { match } = this.props
  //   const url = 'http://localhost:3001'
  //   let community = await axios.get(`${url}/communities/${match.params.id}`)
  //   // console.log(community);
  //     .then(response => {
  //     console.log(response.data)
  //     let community = response.data
  //     this.setState(community)
  //   })
  // }
  
  

  render() {
    const {community} = this.props
    console.log(community)
    return (
      <Grid>
        <Grid.Column width={10}>
          <CommunityDetailedHeader />
          <CommunityDetailedInfo />
          <CommunityDetailedChat  />
        </Grid.Column>
        <Grid.Column width={6}>
          <CommunityDetailedSidebar />
        </Grid.Column>
      </Grid>
    )
  }
}

// community={community} -- put back w/ Header/Info
// members={community.members} - put back w/ Sidebar
export default connect(mapState)(CommunityDetailedPage)
