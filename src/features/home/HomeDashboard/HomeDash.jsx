import React, { Component } from "react";
import { Grid, GridColumn, Label, Icon, Header } from "semantic-ui-react";
import TopList from "../TopGameList/TopList";
import RecentList from "../RecentList/RecentList";
import UpcomingList from "../UpcomingList/UpcomingList";
import { connect } from "react-redux";
// import { loadTop, loadUpcoming, loadRecent } from "../homeActions";
import { Link } from "react-router-dom";

const mapState = (state) => ({
  topGames: state.topGames,
  recentGames: state.recentGames,
  upcomingGames: state.upcomingGames
});

// const actions = {
//   loadTop,
//   loadUpcoming,
//   loadRecent
// };

class GameDash extends Component {
  // state = {
  //   recentGames: [],
  //   upcomingGames: []
  //   // topGames: []
  // };

  // componentDidMount() {
  //   this.fetchRecentGames();
  //   // this.fetchTopGames();
  //   this.fetchUpcomingGames();
  // }

  // fetchTopGames = () => {
  //   const proxy = "https://cors-anywhere.herokuapp.com/";
  //   axios({
  //     url: proxy + "https://api-v3.igdb.com/games",
  //     method: "POST",
  //     headers: {
  //       Accept: "*",
  //       "user-key": "c90cb5de0b345a2d028c840c4d36d540"
  //     },
  //     data:
  //       "f name, rating, genres.name, cover.url;" +
  //       "where (rating > 90 & genres.name != null);" +
  //       "sort rating desc;"
  //   })
  //     .then(response => {
  //       this.setState({ topGames: response.data });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  //   };

  // fetchRecentGames = () => {
  //   const proxy = "https://cors-anywhere.herokuapp.com/";
  //   let date = parseInt(Date.now() / 1000);
  //   axios({
  //     url: proxy + "https://api-v3.igdb.com/games",
  //     method: "POST",
  //     headers: {
  //       Accept: "*",
  //       "user-key": "c90cb5de0b345a2d028c840c4d36d540"
  //     },
  //     data:
  //       "f name, genres.name, cover.url, first_release_date;" +
  //       "sort first_release_date desc;" +
  //       `where (first_release_date < ${date} & cover.url != null & first_release_date != null & genres.name != null);`
  //   })
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ recentGames: response.data });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  // fetchUpcomingGames = () => {
  //   const proxy = "https://cors-anywhere.herokuapp.com/";
  //   let date = parseInt(Date.now() / 1000);
  //   axios({
  //     url: proxy + "https://api-v3.igdb.com/games",
  //     method: "POST",
  //     headers: {
  //       Accept: "*",
  //       "user-key": "c90cb5de0b345a2d028c840c4d36d540"
  //     },
  //     data:
  //       "f name, genres.name, cover.url, first_release_date;" +
  //       "sort first_release_date asc;" +
  //       `where (first_release_date > ${date} & cover.url != null & first_release_date != null & genres.name != null);`
  //   })
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ upcomingGames: response.data });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  render() {
    const { topGames, recentGames, upcomingGames } = this.props;
    return (
      <Grid columns={3}>
        <GridColumn textAlign='center'>
          <Label as={Link} to='/top'>
          <Header as='h1'>
           <Icon name='star' color='yellow'/>
           <Header.Content>Top Ranked</Header.Content>
          </Header>
          </Label>
          <TopList topGames={topGames} />
        </GridColumn>
        <GridColumn textAlign='center'>
        <Label as={Link} to='/recent'>
        <Header as='h1'>
        <Icon name='fire' color='red'/>
          <Header.Content>Recently Released</Header.Content>
          </Header>
          </Label>
          <RecentList recentGames={recentGames} />
        </GridColumn>
        <GridColumn>
        <Label as={Link} to='/upcoming'>
        <Header as='h1'>
          <Icon name='eye' color='blue'/>
          <Header.Content>Upcoming Releases</Header.Content>
          </Header>
          </Label>
          <UpcomingList upcomingGames={upcomingGames} />
        </GridColumn>
      </Grid>
    );
  }
}

export default connect(mapState)(GameDash);
