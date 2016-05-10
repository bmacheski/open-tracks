import React, { Component } from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Divider from 'material-ui/lib/divider'
import { socket } from '../io'
import Avatar from 'material-ui/lib/avatar'
import { deleteSong, removeSongFromPlaylist } from '../actions/playlist'
import { toggleNav } from '../actions/environment'

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.handleCloseSideNav = this.handleCloseSideNav.bind(this)
  }

  componentDidMount() {
    const { channel, dispatch } = this.props

    socket.on('playlist song removed', t => {
      dispatch(removeSongFromPlaylist(channel, t))
    })
  }

  handleCloseSideNav() {
    const { dispatch, open } = this.props

    if (open) {
      dispatch(toggleNav())
    }
  }

  handleDeleteSong(song) {
    const { dispatch } = this.props

    dispatch(deleteSong(song.scId))
  }

  renderPlaylist() {
    const { items } = this.props.playlistSongs
    const { songIndex} = this.props

    if (items) {
      return items.map((song, i) => {
        return (
          <div key={i}>
            <ListItem
              className={i == songIndex ? 'playing' : ''}
              primaryText={song.title}
              leftAvatar={<Avatar src={song.artworkUrl} />}>
              <i
                className="material-icons delete-icon"
                onClick={this.handleDeleteSong.bind(this, song)}>
                close
              </i>
            </ListItem>
            <Divider inset={true} />
          </div>
        )
      })
    }
  }

  render() {
    const { channel } = this.props
    const subheader = (
      <div>
        <h3 className="subheader">Channel: {channel}</h3>
        <h3 className="users-count"></h3>
      </div>
    )

    { return this.props.playlistSongs.items &&
      this.props.playlistSongs.items.length > 0 ?
      (
        <div
          className="playlist-wrapper"
          onClick={this.handleCloseSideNav}>
          <List subheader={subheader}>
            <h3>Playlist</h3>
            {this.renderPlaylist()}
          </List>
        </div>
      ) :
      <div
        className="playlist-wrapper"
        onClick={this.handleCloseSideNav}>
        {subheader}
        <div className="playlist-notice">
          <h2>There aren't any songs yet! Go add one.</h2>
        </div>
      </div>
    }
  }
}

export default Playlist
