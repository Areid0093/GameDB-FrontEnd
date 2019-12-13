import React, { Component, Fragment } from "react";
import GameListItem from "./GameListItem";

class GameList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.games.map(game => (
          <GameListItem key={game.id} game={game} />
        ))}
      </Fragment>
    );
  }
}

export default GameList;
