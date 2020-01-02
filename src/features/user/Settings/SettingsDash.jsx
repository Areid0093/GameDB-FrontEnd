import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SettingsNav from './SettingsNav'
import { Route, Redirect, Switch } from 'react-router-dom'
import BasicPage from './BasicPage'
import Favorites from './Favorites'
import PhotoPage from './PhotoPage'
import AccountPage from './AccountPage'
import { updatePassword } from '../../auth/authActions'
import { updateProfile } from '../userActions'
import { fetchFavorites } from '../../favorites/favoriteActions'

const actions = {
  updatePassword,
  updateProfile,
  fetchFavorites
}

const mapState = (state, ownProps) => {
  const userId = localStorage.getItem('userId')
  let userData = {}

  if (state.auth.authenticated) {
    userData = state.auth.currentUser.user
  }

  let favorite = {}

  if (
    state.favorites.favorite.favorite &&
    state.favorites.favorite.favorite.length > 0
  ) {
    favorite = state.favorites.favorite.favorite.filter(
      favorite => favorite.user_id === parseInt(userId)
      )
      debugger
  }

  return {
    userData: userData,
    user: state.auth,
    favorite
  }
}

const SettingsDash = ({
  updatePassword,
  user,
  updateProfile,
  userData,
  favorite
}) => {
  console.log(user)
  console.log(userData)
  console.log(favorite)
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route
            path='/settings/basic'
            render={() => (
              <BasicPage
                initialValues={userData}
                updateProfile={updateProfile}
              />
            )}
          />
          <Route
            path='/settings/favorites'
            render={() => <Favorites favorite={favorite} />}
          />
          <Route path='/settings/photos' component={PhotoPage} />
          <Route
            path='/settings/account'
            render={() => <AccountPage updatePassword={updatePassword} />}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState, actions)(SettingsDash)
