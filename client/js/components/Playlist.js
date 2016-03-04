import React, { Component } from 'react'
import { fetchPlaylistSongs, receieveNewSong } from '../actions/playlist'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Divider from 'material-ui/lib/divider'
import { socket } from '../io'

class Playlist extends Component {
  renderPlaylist() {
    const { items } = this.props.playlistSongs
    if (items) {
      return items.map((song, i) => {
        return (
          <div key={i}>
            <ListItem
              primaryText={song.title}>
            </ListItem>
            <Divider inset={true} />
          </div>
        )
      })
    }
  }

  render() {
    { return this.props.playlistSongs.items ?
      (
        <div className="playlist-wrapper">
          <List>
            <h3>Playlist</h3>
            {this.renderPlaylist()}
          </List>
        </div>
      ) :
      <h2>There aren't any songs yet! Go add one.</h2>
    }
  }
}

export default Playlist
