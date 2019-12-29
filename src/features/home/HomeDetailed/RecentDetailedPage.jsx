import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Grid } from 'semantic-ui-react'
import RecentList from '../RecentList/RecentList'

const mapState = state => ({
  recentGames: state.recentGames
})

const RecentDetailedPage = ({ recentGames }) => {
  let first = recentGames.filter((x, i) => !(i % 2))
  let second = recentGames.filter((x, i) => i % 2)
  return (
    <Fragment>
      <Grid>
        <Header as='h1' textAlign='center' icon>
          <Header.Content>Recent Releases</Header.Content>
          <Icon color='red' name='fire' />
        </Header>
        <Grid.Row columns={2}>
          <Grid.Column>
            <RecentList recentGames={first} />
          </Grid.Column>
          <Grid.Column>
            <RecentList recentGames={second} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default connect(mapState)(RecentDetailedPage)

