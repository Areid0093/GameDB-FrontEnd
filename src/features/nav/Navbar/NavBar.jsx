import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

class NavBar extends Component {
    render() {
        return (
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header>
                    <img src="assets/logo.jpg" alt="logo" />
                    Insert Name Here
                  </Menu.Item>
                  <Menu.Item name="Games" />
                  <Menu.Item name="Community" />
                    {/* <Button floated="right" positive inverted content="Create Game" /> */}
                  {/* </Menu.Item> */}
                  <Menu.Item position="right">
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                  </Menu.Item>
                </Container>
              </Menu>
        )
    }
}

export default NavBar