import React, { Component } from "react";
import { Segment, Form, Button, Message } from "semantic-ui-react";

class CommunityForm extends Component {
  state = {
    name: "",
    title: "",
    description: "",
    creator: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createCommunity(this.state)
  };

  handleFormChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  };

  render() {
    const { cancelFormToggle } = this.props;
    const { name, title, description, creator } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field required>
            <label>Community Name</label>
            <input
              onChange={this.handleFormChange}
              name='name'
              value={name}
              placeholder='Name'
            />
          </Form.Field>
          <Form.Field>
            <label>Game(s)</label>
            <input
              onChange={this.handleFormChange}
              name='title'
              value={title}
              placeholder='Game title(s)'
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              onChange={this.handleFormChange}
              name='description'
              value={description}
              placeholder='Enter a brief description of the community'
            />
          </Form.Field>
          <Form.Field required>
            <label>Created By</label>
            <input
              onChange={this.handleFormChange}
              name='creator'
              value={creator}
              placeholder='Enter the name of creator'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button onClick={cancelFormToggle} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default CommunityForm;
