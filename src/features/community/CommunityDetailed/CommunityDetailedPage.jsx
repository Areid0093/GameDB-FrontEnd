import React from "react";
import { Grid } from "semantic-ui-react";
import {connect} from 'react-redux'
import CommunityDetailedHeader from "./CommunityDetailedHeader";
import CommunityDetailedInfo from "./CommunityDetailedInfo";
import CommunityDetailedChat from "./CommunityDetailedChat";
import CommunityDetailedSidebar from "./CommunityDetailedSidebar";

const mapState = (state, ownProps) => {
    const communityId = ownProps.match.params.id

    let community = {}

    if(communityId && state.communities.length > 0) {
        community = state.communities.filter(community => community.id === communityId)[0]
    }

    return {
        community
    }
}

const CommunityDetailedPage = ({community}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <CommunityDetailedHeader community={community} />
        <CommunityDetailedInfo community={community} />
        <CommunityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <CommunityDetailedSidebar members={community.members}/>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(CommunityDetailedPage);
