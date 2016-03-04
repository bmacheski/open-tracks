import React, { Component } from 'react'
import { createChannel, joinChannel, fetchPlaylistSongs } from '../actions/playlist'
import TextField from 'material-ui/lib/text-field'
import CreateRoomError from './CreateRoomError'

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
    const { saveChannelFailure, dispatch, error } = this.props

    if (!saveChannelFailure) {
      return (
        <div className='create-wrapper'>
          <h3 className="create-title">Create a room</h3>
          <TextField
            className="input-field-home"
            onKeyPress={this.handleCreateRoom}>
          </TextField>
          <h3 className="create-title">Join a room</h3>
          <TextField
            className="input-field-home"
            onKeyPress={this.handleJoinRoom}>
          </TextField>
        </div>
      )
    } else {
      return (
        <CreateRoomError
          dispatch={dispatch}
          error={error} />
      )
    }
  }
}

export default CreateRoom
