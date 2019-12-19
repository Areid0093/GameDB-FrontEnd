import React, { Component, Fragment } from "react";
import RecentListItem from "./RecentListItem";

class RecentList extends Component {
  render() {
    const {recentGames} = this.props
    return (
      <Fragment>
      {recentGames.map(game => (
        <RecentListItem key={game.id} game={game} />
      ))}
      </Fragment>
    );
  }
}

export default RecentList;
