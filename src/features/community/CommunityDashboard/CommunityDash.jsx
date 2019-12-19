import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import CommunityList from "../CommunityList/CommunityList";
import {connect} from 'react-redux'
import {createCommunity, updateCommunity, deleteCommunity} from '../communityActions'

const mapState = (state) => ({
  communities: state.communities
})


const actions = {
  createCommunity,
  updateCommunity,
  deleteCommunity
}

class CommunityDashboard extends Component {

  // componentDidMount() {
  //   this.fetchCommunity();
  // }

  // fetchCommunity = () => {
  //   axios.get("http://localhost:3001/communities", options).then(response => {
  //     console.log(response.data);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.headers);
  //     console.log(response.config);
  //     this.setState({communities: response.data})
  //   });
  // };

  render() {
    const { communities } = this.props
    return (
      <Grid>
        <GridColumn width={10}>
          <h2>Communities</h2>
          <CommunityList communities={communities}/>
        </GridColumn>
        <GridColumn width={6}>
          <h2>Activity Feed</h2>
        </GridColumn>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(CommunityDashboard);
