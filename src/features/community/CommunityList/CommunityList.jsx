import React, { Component, Fragment } from 'react'
import CommunityListItem from "./CommunityListItem"

class CommunityList extends Component {
    render() {
    const {communities, selectedCommunity} = this.props
        return (
        <Fragment>
        {communities.map(community =>(
            <CommunityListItem key={community.id} community={community} selectedCommunity={selectedCommunity}/>
        ))}
        </Fragment>
        )
    }
}

export default CommunityList