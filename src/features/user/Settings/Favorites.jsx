import React, { Fragment } from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'
import FavoriteList from '../../favorites/FavoritesDash/FavoriteList'

const Favorites = ({favorite}) => {
  let first = favorite.filter((x, i) => !(i % 2))
  let second = favorite.filter((x, i) => i % 2)
  return (
    <Fragment>
      <Grid>
        <Header as='h1' textAlign='center' icon>
          <Header.Content>Your Favorites</Header.Content>
        </Header>
        <Grid.Row columns={2}>
          <Grid.Column>
            <FavoriteList favorite={first}/>
          </Grid.Column>
          <Grid.Column>
            <FavoriteList  favorite={second}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default (Favorites)
