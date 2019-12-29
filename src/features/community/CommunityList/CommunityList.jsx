import React, { Component, Fragment } from 'react'
import CommunityListItem from "./CommunityListItem"

class CommunityList extends Component {
    render() {
    const {communities} = this.props
        return (
        <Fragment>
        {communities.map((community, idx) =>(
            <CommunityListItem key={idx} community={community}/>
        ))}
        </Fragment>
        )
    }
}

export default CommunityList