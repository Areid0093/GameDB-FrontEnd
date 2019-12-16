import React, { Component, Fragment } from "react";
import UpcomingListItem from "./UpcomingListItem";

class UpcomingList extends Component {
  render() {
    return (
      <Fragment>
      {this.props.upcomingGames.map(game => (
        <UpcomingListItem key={game.id} game={game} />
      ))}
      </Fragment>
    );
  }
}

export default UpcomingList;
