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
  const playlistSongs = state.playlist[channel]

  return {
    playlistSongs
  }
}

export default connect(mapStateToProps)(PlaylistContainer)
