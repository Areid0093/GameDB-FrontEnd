import React, { Component, Fragment } from "react";
import { Button, Container } from "semantic-ui-react";
import GameDash from "../../features/game/GameDashboard/GameDash";
import NavBar from "../../features/nav/Navbar/NavBar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <GameDash />
        </Container>
      </Fragment>
    );
  }
}

export default App;
