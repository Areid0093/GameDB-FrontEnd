import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import axios from 'axios'
import TextInput from '../../../app/common/form/TextInput'
import { Grid, Header, Icon, Form, Segment, Button } from 'semantic-ui-react'
import GameList from '../GameList/GameList'
import {fetchGames} from '../gameActions'

const mapState = state => ({
  games: state.games
})

const actions = {
  fetchGames
} 


class GameDash extends Component {

  gameSubmit = (games) => {
    this.props.fetchGames(games)
    this.setState({games})
  }
  
  render() {
    const { games, submitting, invalid, pristine } = this.props
    let first = games.filter((x, i) => !(i % 2))
    let second = games.filter((x, i) => i % 2)
    return (
      <Fragment>
        <Grid>
          <Segment>
            <Header sub color='teal' content='Game Search' />
            <Form
              onSubmit={this.props.handleSubmit(this.gameSubmit)}
              autoComplete='off'
            >
              <Field
                name='query'
                component={TextInput}
                placeholder='Game Name'
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type='submit'
              >
                Submit
              </Button>
              </Form>
          </Segment>
          <Grid.Row columns={2}>
            <Grid.Column>
              <GameList games={first} />
            </Grid.Column>
            <Grid.Column>
              <GameList games={second} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: 'gameForm' })(GameDash))

// <Header as='h2' size='huge' color='teal' icon>
//   Game Database
//   <Icon size='tiny' color='teal' name='gamepad' />
//   <Grid columns={2}>
//   <Grid.Row stretched>
//     <Grid.Column>
//       <GameList games={first} />
//     </Grid.Column>
//     <Grid.Column>
//       <GameList games={second} />
//     </Grid.Column>
//     </Grid.Row>
//   </Grid>
// </Header>
