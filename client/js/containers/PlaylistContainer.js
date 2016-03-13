import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Playlist from '../components/Playlist'

class PlaylistContainer extends Component {
  render() {
    return <Playlist {...this.props} />
  }
}

function mapStateToProps(state) {
  const { channel } = state.playlist
  const { songIndex } = state.player
  const { open } = state.environment
  const playlistSongs = state.playlist[channel] ? state.playlist[channel] : []

  return {
    channel,
    playlistSongs,
    songIndex,
    open
  }
}

export default connect(
  mapStateToProps
)(PlaylistContainer)
