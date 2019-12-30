import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoggedInMenu = ({ logOut, currentUser }) => {
  let displayName = currentUser.user.user.email
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/test.jpg' />
      <Dropdown pointing='top left' text={displayName}>
        <Dropdown.Menu>
          {/* <Dropdown.Item text='Create Community' icon='plus' /> */}
          {/* <Dropdown.Item text='My Communities' icon='calendar' /> */}
          {/* <Dropdown.Item text='My Network' icon='users' /> */}
          <Dropdown.Item text='My Profile' icon='user' />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='Settings'
            icon='settings'
          />
          <Dropdown.Item onClick={logOut} text='Sign Out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default LoggedInMenu;
