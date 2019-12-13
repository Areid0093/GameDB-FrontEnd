import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import CommunityList from "../CommunityList/CommunityList";
import CommunityForm from "../CommunityForm/CommunityForm";

const members = [
  {
    id: 1,
    username: 'noob',
    email: 'noob@noob.com',
    avatar: 'https://wallpapercave.com/wp/wp2178691.jpg'
  },
  {
    id: 2,
    username: 'domer',
    email: 'domer@domer.com',
    avatar: 'https://omair.me/wp-content/uploads/edd/2018/09/100-Free-Gaming-Logo-Design-Templates_-Angry-Game-Controller.jpg'
  }
]



class CommunityDashboard extends Component {
    render() {
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>Communities</h2>
          <CommunityList members={members} />
        </GridColumn>
        <GridColumn width={6}>
          <Button positive content='Create Community' />
          <CommunityForm />
        </GridColumn>
      </Grid>
    );
  }
}

export default CommunityDashboard;
