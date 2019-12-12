import React, { Component, Fragment } from "react";
import GameListItem from "./TopListItem";

class GameList extends Component {
  render() {
    return (
    <Fragment>
    {this.props.topGames.map(game =>(
      <GameListItem key={game.id} game={game}/>
    ))}
    </Fragment>
    )
  }
}

export default GameList
