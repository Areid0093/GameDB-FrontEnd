import React, { Component, Fragment } from 'react'
import CommunityListItem from "./CommunityListItem"

class CommunityList extends Component {
    render() {
        return (
        <Fragment>
        {this.props.communities.map(community =>(
            <CommunityListItem key={community.id} community={community} />
        ))}
        </Fragment>
        )
    }
}

export default CommunityList