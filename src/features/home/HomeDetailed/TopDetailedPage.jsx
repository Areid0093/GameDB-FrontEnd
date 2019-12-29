import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Grid } from 'semantic-ui-react'
import TopList from '../TopGameList/TopList'

const mapState = state => ({
  topGames: state.topGames
})

const TopDetailedPage = ({ topGames }) => {
  let first = topGames.filter((x, i) => !(i % 2))
  let second = topGames.filter((x, i) => i % 2)
  return (
    <Fragment>
      <Grid>
        <Header as='h1' textAlign='center' icon>
          <Header.Content>Top Ranked Games</Header.Content>
          <Icon color='yellow' name='star' />
        </Header>
        <Grid.Row columns={2}>
          <Grid.Column>
            <TopList topGames={first} />
          </Grid.Column>
          <Grid.Column>
            <TopList topGames={second} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default connect(mapState)(TopDetailedPage)
