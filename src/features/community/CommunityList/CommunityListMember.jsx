import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class CommunityListMember extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' circular src='' />
      </List.Item>
    );
  }
}

export default CommunityListMember;
