import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import HomeDash from "../../features/home/HomeDashboard/HomeDash";
import NavBar from "../../features/nav/Navbar/NavBar";
import CommunityDash from "../../features/community/CommunityDashboard/CommunityDash";
import GameDash from "../../features/game/GameDashboard/GameDash";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          {/* <HomeDash /> */}
          <CommunityDash />
          {/* <GameDash /> */}
        </Container>
      </Fragment>
    );
  }
}

export default App;
