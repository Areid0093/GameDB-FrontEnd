import React from 'react'
import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loadTop, loadUpcoming, loadRecent } from '../homeActions'

const mapState = state => ({
  topGames: state.topGames,
  recentGames: state.recentGames,
  upcomingGames: state.upcomingGames
})

const actions = {
  loadTop,
  loadUpcoming,
  loadRecent
}

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          {/* <Image
            size='massive'
            src='/assets/logo.jpg'
            alt='logo'
            style={{ marginBottom: 12 }}
          /> */}
          <Icon name='gamepad' />
          GamerBase
        </Header>
        <Button onClick={() => history.push('/home')} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}

export default connect(mapState, actions)(HomePage)
