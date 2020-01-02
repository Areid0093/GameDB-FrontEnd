import React, { Component, Fragment } from 'react'
import FavoriteListItem from './FavoriteListItem'

class FavoriteList extends Component {
  render() {
    const { favorite } = this.props
    return (
      <Fragment>
        {favorite.map(fav => (
          <FavoriteListItem key={fav.id} favorite={fav} />
        ))}
      </Fragment>
    )
  }
}

export default FavoriteList