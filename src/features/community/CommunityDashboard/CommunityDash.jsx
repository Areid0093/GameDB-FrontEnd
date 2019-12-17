import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import CommunityList from "../CommunityList/CommunityList";
import CommunityForm from "../CommunityForm/CommunityForm";
import axios from "axios";
import {connect} from 'react-redux'
import {createCommunity, updateCommunity, deleteCommunity} from '../communityActions'

const options = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};

const mapState = (state) => ({
  communities: state.communities
})


const actions = {
  createCommunity,
  updateCommunity,
  deleteCommunity
}

class CommunityDashboard extends Component {
  state = {
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
        description: newCommunity.description,
        creator: newCommunity.creator
      }
    }).then(response => {
      this.props.createCommunity(newCommunity)
      this.setState(({ communities }) => ({
        // communities: [communities, newCommunity],
        isOpen: false
      }));
    });
  };

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
    const { isOpen, selectedCommunity } = this.state;
    const { communities } = this.props
    console.log(this.props)
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

export default connect(mapState, actions)(CommunityDashboard);
