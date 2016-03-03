import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Player from '../components/Player'

class PlayerContainer extends Component {
  render() {
    const { children, playlistSongs } = this.props
    { return playlistSongs === undefined ?
      <div /> :
      <Player {...this.props} />
    }
  }
}

function mapStateToProps(state) {
  const { channel } = state.playlist
  const playlistSongs = state.playlist[channel]
  const { hasJoined } = state.playlist
  return {
    playlistSongs,
    hasJoined
  }
}

export default connect(
  mapStateToProps
)(PlayerContainer)
