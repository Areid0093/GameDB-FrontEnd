import React, { Component } from 'react'
import { Grid, Label, Icon, Header} from 'semantic-ui-react'
import TopList from '../TopGameList/TopList'
import RecentList from '../RecentList/RecentList'
import UpcomingList from '../UpcomingList/UpcomingList'
import { connect } from 'react-redux'
// import { loadTop, loadUpcoming, loadRecent } from "../homeActions";
import { Link } from 'react-router-dom'

const mapState = state => ({
  topGames: state.topGames,
  recentGames: state.recentGames,
  upcomingGames: state.upcomingGames
})


class GameDash extends Component {

  render() {
    const { topGames, recentGames, upcomingGames } = this.props
    return (
      <Grid>
      <Grid.Row columns={3}>
        <Grid.Column textAlign='center'>
          <Label as={Link} to='/top'>
            <Header as='h1'>
              <Icon name='star' color='yellow' />
              <Header.Content>Top Ranked</Header.Content>
            </Header>
          </Label>
          <TopList topGames={topGames} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Label as={Link} to='/recent'>
            <Header as='h1'>
              <Icon name='fire' color='red' />
              <Header.Content>Recently Released</Header.Content>
            </Header>
          </Label>
          <RecentList recentGames={recentGames} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Label as={Link} to='/upcoming'>
            <Header as='h1'>
              <Icon name='eye' color='blue' />
              <Header.Content>Upcoming Releases</Header.Content>
            </Header>
          </Label>
          <UpcomingList upcomingGames={upcomingGames} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(mapState)(GameDash)
