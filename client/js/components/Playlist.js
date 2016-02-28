import React, { Component } from 'react'
import { fetchPlaylistSongs } from '../actions/playlist'

class Playlist extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchPlaylistSongs())
  }

  renderPlaylist() {
    const { items } = this.props.playlistSongs
    return items.map((song, i) => {
      return (
        <li key={i}>
          <span>{i + 1})</span>
          <span> {song.title}</span>
        </li>
      )
    })
  }

  render() {
    { return this.props.playlistSongs.items ?
      (
        <div className="playlist-container">
          <h3>Playlist</h3>
          {this.renderPlaylist()}
        </div>
      ) :
      <h3>There aren't any songs yet! Go add one.</h3>
    }
  }
}
export default Playlist
