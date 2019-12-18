import React, { Fragment } from "react";
import { Segment, Item, Label } from "semantic-ui-react";

const CommunityDetailedSidebar = ({members}) => {
// const creator = false
  return (
    <Fragment>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        2 Members
      </Segment>
      <Segment attached>
        <Item.Group divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              color='orange'
              ribbon='right'
            >
              Creator
            </Label>
            <Item.Image size='tiny' src='/assets/logo.jpg' />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>Member Name</Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default CommunityDetailedSidebar;
