import React, { Component } from "react";
import { Segment, Form, Button, Message} from 'semantic-ui-react'

class CommunityForm extends Component {
  render() {
    return (
      <Segment>
        <Form success>
          <Form.Field required>
            <label>Community Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Game(s)</label>
            <input placeholder='Game title(s)' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder='Enter a brief description of the community' />
          </Form.Field>
          <Form.Field required>
            <label>Created By</label>
            <input placeholder='Enter the name of creator' />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button'>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default CommunityForm;
