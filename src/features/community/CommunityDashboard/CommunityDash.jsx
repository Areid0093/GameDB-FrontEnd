import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import CommunityList from "../CommunityList/CommunityList";
import CommunityForm from "../CommunityForm/CommunityForm";
import cuid from "cuid";
import axios from "axios";

const options = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};
// const communitiesArray = [
//   {
//     id: 1,
//     name: 'noob',
//     title: 'noob@noob.com',
//     avatar: 'https://wallpapercave.com/wp/wp2178691.jpg'
//   },
//   {
//     id: 2,
//     name: 'domer',
//     title: 'domer@domer.com',
//     avatar: 'https://omair.me/wp-content/uploads/edd/2018/09/100-Free-Gaming-Logo-Design-Templates_-Angry-Game-Controller.jpg'
//   }
// ]

class CommunityDashboard extends Component {
  state = {
    communities: [],
    isOpen: false,
    selectedCommunity: null
  };

  componentDidMount() {
    this.fetchCommunity();
  }

  fetchCommunity = () => {
    axios.get("http://localhost:3001/communities", options).then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      // this.setState({communities: response.data})
    });
  };

  handleCreateCommunity = newCommunity => {
    axios({
      url: "http://localhost:3001/communities",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      data: {
        name: newCommunity.name,
        title: newCommunity.title,
        decription: newCommunity.description,
        creator: newCommunity.creator
      }
    }).then(response => {
      this.setState(({ communities }) => ({
        communities: [communities, newCommunity],
        isOpen: false
      }));
    });
  };

  // handleFormToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedCommunity: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  handleSelectedCommunity = (event) => {
    this.setState({
      selectedCommunity: event,
      isOpen: true
    })
  }

  render() {
    const { communities, isOpen, selectedCommunity } = this.state;
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>Communities</h2>
          <CommunityList communities={communities} selectedCommunity={this.handleSelectedCommunity} />
        </GridColumn>
        <GridColumn width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content='Create Community'
          />
          {isOpen && (
            <CommunityForm
              key={selectedCommunity ? selectedCommunity.id : 0}
              selectedCommunity={this.selectedCommunity}
              createCommunity={this.handleCreateCommunity}
              cancelFormToggle={this.handleFormCancel}
            />
          )}
        </GridColumn>
      </Grid>
    );
  }
}

export default CommunityDashboard;
