import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import CommunityList from "../CommunityList/CommunityList";
import CommunityForm from "../CommunityForm/CommunityForm";
import cuid from 'cuid'
import axios from "axios";

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
    isOpen: false
  }

  componentDidMount() {
    this.fetchCommunity()
  }

  fetchCommunity = () => {
    axios.get('http://localhost:3001/communities')
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      // this.setState({communities: response.data})
    })
  }

  handleFormToggle = () => {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }))
  }

  handleCreateCommunity = (newCommunity) => {
    newCommunity.id = cuid()
    this.setState(({communities}) => ({
      communities: [communities, newCommunity],
      isOpen: false
    }))
  }


    render() {
    const {communities, isOpen} = this.state
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>Communities</h2>
          <CommunityList communities={communities} />
        </GridColumn>
        <GridColumn width={6}>
          <Button onClick={this.handleFormToggle} positive content='Create Community' />
          {isOpen && <CommunityForm createCommunity={this.handleCreateCommunity} cancelFormToggle={this.handleFormToggle} />}
        </GridColumn>
      </Grid>
    );
  }
}

export default CommunityDashboard;
