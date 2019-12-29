import React, { Fragment } from 'react'
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
    <Fragment>
      <Grid>
        <Header as='h1' textAlign='center' icon>
          <Header.Content>Upcoming Releases</Header.Content>
          <Icon color='blue' name='eye' />
        </Header>
        <Grid.Row columns={2}>
          <Grid.Column>
            <UpcomingList upcomingGames={first} />
          </Grid.Column>
          <Grid.Column>
            <UpcomingList upcomingGames={second} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default connect(mapState)(UpcomingDetailedPage)
