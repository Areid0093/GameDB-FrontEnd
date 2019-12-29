import React from 'react'
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
    <Header as='h1' size='huge' icon>
      Top Ranked Games
      <Icon size='tiny' color='yellow' name='star' />
      <Grid>
      <Grid.Row columns={2}>
        <Grid.Column textAlign='center'>
          <TopList topGames={first} />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <TopList topGames={second} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Header>
  )
}

export default connect(mapState)(TopDetailedPage)
