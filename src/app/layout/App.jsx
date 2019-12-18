import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import HomeDash from "../../features/home/HomeDashboard/HomeDash";
import HomePage from "../../features/home/HomeDashboard/HomePage";
import NavBar from "../../features/nav/Navbar/NavBar";
import CommunityDash from "../../features/community/CommunityDashboard/CommunityDash";
import GameDash from "../../features/game/GameDashboard/GameDash";
import { Route, Switch, withRouter } from "react-router-dom";
import CommunityDetailedPage from "../../features/community/CommunityDetailed/CommunityDetailedPage";
import RecentDetailedPage from "../../features/home/HomeDetailed/RecentDetailedPage";
import UpcomingDetailedPage from "../../features/home/HomeDetailed/UpcomingDetailedPage";
import TopDetailedPage from "../../features/home/HomeDetailed/TopDetailedPage";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import CommunityForm from "../../features/community/CommunityForm/CommunityForm";
import SettingsDash from "../../features/user/Settings/SettingsDash";
import ModalManager from "../../features/modals/ModalManager";

class App extends Component {
  render() {
    return (
      <Fragment>
      <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
              <Switch key={this.props.location.key}>
                <Route exact path='/home' component={HomeDash} />
                <Route
                  path='/communities/:id'
                  component={CommunityDetailedPage}
                />
                <Route path='/recent' component={RecentDetailedPage} />
                <Route path='/upcoming' component={UpcomingDetailedPage} />
                <Route path='/top' component={TopDetailedPage} />
                <Route exact path='/communities' component={CommunityDash} />
                <Route path='/settings' component={SettingsDash} />
                <Route path='/games' component={GameDash} />
                
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path={['/createCommunity', '/manage/:id']} component={CommunityForm} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
