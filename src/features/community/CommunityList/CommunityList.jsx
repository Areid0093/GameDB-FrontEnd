import React, { Component, Fragment } from 'react'
import CommunityListItem from "./CommunityListItem"

class CommunityList extends Component {
    render() {
    const {communities} = this.props
        return (
        <Fragment>
        {communities.map(community =>(
            <CommunityListItem key={community.id} community={community}/>
        ))}
        </Fragment>
        )
    }
}

export default CommunityList