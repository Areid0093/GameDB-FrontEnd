import React, { Component } from "react";
import axios from "axios";
import { Grid, GridColumn } from "semantic-ui-react";
import GameList from "../GameList/GameList";

class GameDash extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    let query = "sonic";
    axios({
      url: proxy + "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "*",
        "user-key": "c90cb5de0b345a2d028c840c4d36d540"
      },
      data: 
      "f *;" + 
      "limit 500;" + 
      `search "${query}";`
    })
      .then(response => {
        debugger;
        console.log(response);
        this.setState({ games: response.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>Games</h2>
          <GameList games={this.state.games} />
        </GridColumn>
      </Grid>
    );
  }
}

export default GameDash;
