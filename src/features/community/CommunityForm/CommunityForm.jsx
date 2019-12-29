import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { createCommunity } from '../communityActions'
import axios from 'axios'
import TextInput from '../../../app/common/form/TextInput'
import TextArea from '../../../app/common/form/TextArea'
import SelectInput from '../../../app/common/form/SelectInput'
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate'

const mapState = (state, ownProps) => {
  const communityId = ownProps.match.params.id

  let community = {}

  if (communityId && state.communities.length > 0) {
    community = state.communities.filter(
      community => community.id === communityId
    )[0]
  }

  return {
    initialValues: community
  }
}

const actions = {
  createCommunity
}

const platform = [
  { key: 'xbox', text: 'Xbox', value: 'xbox' },
  { key: 'playstation', text: 'Playstation', value: 'playstation' },
  { key: 'pc', text: 'PC', value: 'pc' },
  { key: 'nintendo switch', text: 'Nintendo Switch', value: 'nintendo switch' },
]

const validate = combineValidators({
  name: isRequired({ message: 'Community name is required!' }),
  title: isRequired({ message: 'At least one game title is required!' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description!' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters!'
    })
  )(),
  creator: isRequired({ message: 'Creator name is required!' })
})

class CommunityForm extends Component {
  // state = {
  //   ...this.props.community
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.props.handleCreateCommunity(this.state)
  // };
  // componentDidMount() {
  //   this.handleCreateCommunity()
  // }

  handleCreateCommunity = values => {
    const newCommunity = { ...values }
    axios({
      url: 'http://localhost:3001/communities',
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        name: newCommunity.name,
        title: newCommunity.title,
        description: newCommunity.description,
        creator: newCommunity.creator
      }
    }).then(response => {
      this.props.createCommunity(newCommunity)
      // console.log(newCommunity)
      // debugger
      this.props.history.push('/communities')
    })
  }

  render() {
    const { invalid, submitting, pristine } = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Community Details' />
            <Form
              onSubmit={this.props.handleSubmit(this.handleCreateCommunity)}
              autoComplete='off'
            >
              <Field
                name='name'
                component={TextInput}
                placeholder='Community Name'
              />
              <Field
                name='title'
                component={TextInput}
                placeholder='Game Title(s)'
              />
              <Field
                name='platform'
                component={SelectInput}
                options={platform}
                placeholder='Platform(s)'
              />
              <Field
                name='description'
                component={TextArea}
                rows={3}
                placeholder='Description'
              />
              <Field
                name='creator'
                component={TextInput}
                placeholder='Creator Name'
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type='submit'
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type='button'>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: 'communityForm', validate })(CommunityForm))
