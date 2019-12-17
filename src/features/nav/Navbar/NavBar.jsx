import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import LoggedOutMenu from "../Menus/LoggedOutMenu";
import LoggedInMenu from "../Menus/LoggedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleLogIn = () => this.setState({ authenticated: true });
  handleLogOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/')
  }

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/home' header>
            <img src='assets/logo.jpg' alt='logo' />
            GamerBase
          </Menu.Item>
          <Menu.Item as={NavLink} to='/games' name='Games' />
          <Menu.Item as={NavLink} exact to='/communities' name='Community' />
          <Button
            as={Link}
            to='/createCommunity'
            floated='right'
            positive
            inverted
            content='Create Community'
          />
          {authenticated ? (
            <LoggedInMenu logOut={this.handleLogOut} />
          ) : (
            <LoggedOutMenu logIn={this.handleLogIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
