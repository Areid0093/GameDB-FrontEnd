import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Container, Icon } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import LoggedOutMenu from '../Menus/LoggedOutMenu'
import LoggedInMenu from '../Menus/LoggedInMenu'
import { openModal } from '../../modals/modalActions'
import { logout } from '../../auth/authActions'

const actions = {
  openModal,
  logout
}

const mapState = state => ({
  auth: state.auth
})

class NavBar extends Component {
  handleLogIn = () => this.props.openModal('LoginModal')

  handleRegister = () => this.props.openModal('RegisterModal')

  handleLogOut = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props
    const authenticated = auth.authenticated
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/home' header>
            {/* <img src='assets/logo.jpg' alt='logo' /> */}
            <Icon name='gamepad' />
            GamerBase
          </Menu.Item>
          <Menu.Item as={NavLink} to='/games' name='Games' />
          <Menu.Item as={NavLink} exact to='/communities' name='Community' />
          <Menu.Item
            as={NavLink}
            to='/createCommunity'
            name='Create Community'
          />
          {/* <Button
            as={Link}
            to='/createCommunity'
            floated='right'
            positive
            inverted
            content='Create Community'
          /> */}
          {authenticated ? (
            <LoggedInMenu
              logOut={this.handleLogOut}
              currentUser={auth.currentUser}
            />
          ) : (
            <LoggedOutMenu
              logIn={this.handleLogIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(connect(mapState, actions)(NavBar))
