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
      "f genres.name, first_release_date, cover.url, *;" + 
      "limit 25;" + 
      "where (cover.url != null & first_release_date != null);" +
      `search "${query}";`
    })
      .then(response => {
        debugger
        console.log(response);
        this.setState({ games: response.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <Grid columns={3}>
      {/* <Grid.Row> */}
        <Grid.Column>
          <h2>Games</h2>
          <GameList games={this.state.games} />
        </Grid.Column>
        {/* </Grid.Row> */}
      </Grid>
    );
  }
}

export default GameDash;
