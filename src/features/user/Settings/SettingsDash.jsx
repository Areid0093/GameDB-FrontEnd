import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SettingsNav from './SettingsNav'
import { Route, Redirect, Switch } from 'react-router-dom'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotoPage from './PhotoPage'
import AccountPage from './AccountPage'
import { updatePassword } from '../../auth/authActions'

const actions = {
  updatePassword
}

const SettingsDash = ({ updatePassword }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
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

export default connect(null, actions)(SettingsDash)
