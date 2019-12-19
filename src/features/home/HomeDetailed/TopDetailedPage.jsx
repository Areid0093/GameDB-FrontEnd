import React from "react";
import { connect } from "react-redux";
import { Header, Icon, Grid } from "semantic-ui-react";
import TopList from "../TopGameList/TopList";

const mapState = state => ({
  topGames: state.topGames
});

const TopDetailedPage = ({ topGames }) => {
  let first = topGames.filter((x, i) => !(i % 2));
  let second = topGames.filter((x, i) => i % 2);
  return (
    <Header as='h1' size='huge' color='teal' icon>
      Game Database
      <Icon size='tiny' color='teal' name='gamepad' />
      <Grid columns={2}>
        <Grid.Column>
          <TopList topGames={first} />
        </Grid.Column>
        <Grid.Column>
          <TopList topGames={second} />
        </Grid.Column>
      </Grid>
    </Header>
  );
};

export default connect(mapState)(TopDetailedPage);
