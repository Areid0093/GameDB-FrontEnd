import React from "react";
import { connect } from "react-redux";
import { Header, Icon, Grid } from "semantic-ui-react";
import UpcomingList from "../UpcomingList/UpcomingList";

const mapState = (state) => ({
    upcomingGames: state.upcomingGames
})

const UpcomingDetailedPage = ({upcomingGames}) => {
let first = upcomingGames.filter((x, i) => !(i % 2));
  let second = upcomingGames.filter((x, i) => i % 2);
  return (
    <Header as='h1' size='huge' color='teal' icon>
      Game Database
      <Icon size='tiny' color='teal' name='gamepad' />
      <Grid columns={2}>
        <Grid.Column>
          <UpcomingList upcomingGames={first} />
        </Grid.Column>
        <Grid.Column>
          <UpcomingList upcomingGames={second} />
        </Grid.Column>
      </Grid>
    </Header>
  )
}


export default connect(mapState)(UpcomingDetailedPage)