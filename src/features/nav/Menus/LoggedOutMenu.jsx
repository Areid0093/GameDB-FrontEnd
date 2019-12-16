import React from "react";
import { Menu, Button } from "semantic-ui-react";

const LoggedOutMenu = ({logIn}) => {
  return (
    <Menu.Item position='right'>
      <Button onClick={logIn} basic inverted content='Login' />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default LoggedOutMenu;
