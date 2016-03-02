import React, { Component } from 'react'
import { createChannel, joinChannel, fetchPlaylistSongs } from '../actions/playlist'

class CreateRoom extends Component {
  constructor(props) {
    super(props)
    this.handleCreateRoom = this.handleCreateRoom.bind(this)
    this.handleJoinRoom = this.handleJoinRoom.bind(this)
  }

  handleCreateRoom(e) {
    const { dispatch } = this.props
    if (e.charCode === 13) {
      let channel = e.currentTarget.value
      dispatch(createChannel(channel))
    }
  }

  handleJoinRoom(e) {
    const { dispatch } = this.props
    if (e.charCode === 13) {
      let channel = e.currentTarget.value
      dispatch(joinChannel(channel))
      dispatch(fetchPlaylistSongs())
    }
  }

  render() {
    return (
      <div>
        <h3 className="create-title"> Create a room </h3>
        <div className="input-field-home">
          <input onKeyPress={this.handleCreateRoom} />
        </div>

        <h3 className="create-title"> Join a room </h3>
        <div className="input-field-home">
          <input onKeyPress={this.handleJoinRoom} />
        </div>
      </div>
    )
  }
}

export default CreateRoom
