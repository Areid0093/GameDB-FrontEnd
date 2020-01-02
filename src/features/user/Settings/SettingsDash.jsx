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

const actions = {
  updatePassword,
  updateProfile
}

// const mapState = state => ({
//   user: state.auth.currentUser,
//   userData: state.auth.currentUser.user.user
// })

const mapState = state => {
  let userData = {}

  if (state.auth.authenticated) {
    userData = state.auth.currentUser.user
  }

  return {
    userData: userData,
    user: state.auth
  };
};

const SettingsDash = ({ updatePassword, user, updateProfile, userData }) => {
  console.log(user)
  console.log(userData)
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route
            path='/settings/basic'
            render={() => <BasicPage initialValues={userData} updateProfile={updateProfile}/>}
          />
          <Route path='/settings/favorites' component={Favorites} />
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
