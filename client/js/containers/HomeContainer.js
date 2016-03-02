import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { receieveNewSong } from '../actions/playlist'
import { socket } from '../io'
import Playlist from '../components/Playlist'
import Nav from '../components/Nav'
import PlayerContainer from './PlayerContainer'
import PlaylistContainer from './PlaylistContainer'
import SearchContainer from './SearchContainer'

class HomeContainer extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Nav {...this.props}/>
        <SearchContainer />
        <PlaylistContainer />
        <PlayerContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { channel } = state.playlist

  const playlistSongs = state.playlist[channel] ? state.playlist[channel] : []
  return {
    channel,
    playlistSongs
  }
}

export default connect(mapStateToProps)(HomeContainer)
