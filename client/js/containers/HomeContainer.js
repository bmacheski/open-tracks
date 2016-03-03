import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { receieveNewSong } from '../actions/playlist'
import Playlist from '../components/Playlist'
import Nav from '../components/Nav'
import PlayerContainer from './PlayerContainer'
import PlaylistContainer from './PlaylistContainer'
import SearchContainer from './SearchContainer'
import { socket } from '../io'

class HomeContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    socket.on('new song added', (song) => {
      dispatch(receieveNewSong(song))
    })
  }

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

export default connect(
  mapStateToProps
)(HomeContainer)
