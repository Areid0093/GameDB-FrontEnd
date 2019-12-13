import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import axios from "axios";
import TopList from "../TopGameList/TopList";
import RecentList from "../RecentList/RecentList";
import UpcomingList from "../UpcomingList/UpcomingList";

class GameDash extends Component {
  state = {
    topGames: [],
    recentGames: [],
    upcomingGames: []
  };

  componentDidMount() {
    this.fetchRecentGames();
    this.fetchTopGames();
    this.fetchUpcomingGames();
  }

  fetchTopGames = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    axios({
      url: proxy + "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "*",
        "user-key": "c90cb5de0b345a2d028c840c4d36d540"
      },
      data:
        "f name, rating, genres.name, cover.url;" +
        "where rating > 90;" +
        "sort rating desc;"
    })
      .then(response => {
        this.setState({ topGames: response.data });
      })
      .catch(err => {
        console.error(err);
      });
    };

  fetchRecentGames = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    let date = parseInt(Date.now() / 1000)
    axios({
      url: proxy + "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "*",
        "user-key": "c90cb5de0b345a2d028c840c4d36d540"
      },
      data:
        "f name, genres.name, cover.url, first_release_date;" +
        "sort first_release_date desc;" +
        `where first_release_date < ${date};`
        
    })
      .then(response => {
        console.log(response)
        this.setState({ recentGames: response.data });
      })
      .catch(err => {
        console.error(err);
      });
    };

    fetchUpcomingGames = () => {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      let date = parseInt(Date.now() / 1000)
      axios({
        url: proxy + "https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "*",
          "user-key": "c90cb5de0b345a2d028c840c4d36d540"
        },
        data:
          "f name, genres.name, cover.url, first_release_date;" +
          `where first_release_date > ${date};` +
          "sort first_release_date asc;"
        })
        .then(response => {
          console.log(response);
          this.setState({ upcomingGames: response.data });
        })
        .catch(err => {
          console.error(err);
        });
    };

  render() {
    return (
      <Grid>
        <GridColumn width={5}>
          <h2>Top Ranked Games</h2>
          <TopList topGames={this.state.topGames} />
        </GridColumn>
        <GridColumn width={5}>
          <h2>Recently Released</h2>
          <RecentList recentGames={this.state.recentGames} />
        </GridColumn>
        <GridColumn width={5}>
          <h2>Upcoming Releases</h2>
          <UpcomingList upcomingGames={this.state.upcomingGames} />
        </GridColumn>
      </Grid>
    );
  }
}

export default GameDash;
