import React, { Component, Fragment } from 'react'
import CommunityListItem from "./CommunityListItem"

class CommunityList extends Component {
    render() {
        return (
        <Fragment>
        {this.props.members.map(member =>(
            <CommunityListItem key={member.id} member={member} />
        ))}
        </Fragment>
        )
    }
}

export default CommunityList