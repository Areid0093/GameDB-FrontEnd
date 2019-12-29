import React, { Component, Fragment } from 'react'
import TopListItem from './TopListItem'

class TopList extends Component {
  render() {
    const { topGames } = this.props
    return (
      <Fragment>
        {topGames.map(game => (
          <TopListItem key={game.id} game={game} />
        ))}
      </Fragment>
    )
  }
}

export default TopList
