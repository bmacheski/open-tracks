import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { receiveNewSong } from '../actions/playlist'
import Playlist from '../components/Playlist'
import Nav from '../components/Nav'
import PlayerContainer from './PlayerContainer'
import PlaylistContainer from './PlaylistContainer'
import SearchContainer from './SearchContainer'
import { receiveNewTime } from '../actions/player'
import { socket } from '../io'

class HomeContainer extends Component {
  componentDidMount() {
    const { dispatch, channel } = this.props
    socket.on('new song', s => {
      dispatch(receiveNewSong(s, channel))
    })

    socket.on('client time', t => {
      dispatch(receiveNewTime(t))
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
