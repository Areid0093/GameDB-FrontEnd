import React, { Component, Fragment } from 'react'
import UpcomingListItem from './UpcomingListItem'

class UpcomingList extends Component {
  render() {
    const { upcomingGames } = this.props
    return (
      <Fragment>
        {upcomingGames.map(game => (
          <UpcomingListItem key={game.id} game={game} />
        ))}
      </Fragment>
    )
  }
}

export default UpcomingList
