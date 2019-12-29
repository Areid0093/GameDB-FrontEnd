import React from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Grid } from 'semantic-ui-react'
import UpcomingList from '../UpcomingList/UpcomingList'

const mapState = state => ({
  upcomingGames: state.upcomingGames
})

const UpcomingDetailedPage = ({ upcomingGames }) => {
  let first = upcomingGames.filter((x, i) => !(i % 2))
  let second = upcomingGames.filter((x, i) => i % 2)
  return (
    <Header as='h1' size='huge' icon>
      Upcoming Releases
      <Icon size='tiny' color='blue' name='eye' />
      <Grid columns={2}>
      <Grid.Row stretched>
        <Grid.Column>
          <UpcomingList upcomingGames={first} />
        </Grid.Column>
        <Grid.Column>
          <UpcomingList upcomingGames={second} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Header>
  )
}

export default connect(mapState)(UpcomingDetailedPage)
