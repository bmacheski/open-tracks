import React, { Component } from 'react'
import createChannel from '../actions/playlist'

class CreateRoom extends Component {
  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    const { dispatch } = this.props
    if (e.charCode === 13) {
      let channel = e.currentTarget.value
      dispatch(createChannel(channel))
    }
  }

  render() {
    return (
      <div>
        <h3 className="create-title"> Create a room </h3>
        <div className="input-field">
          <input onKeyPress={this.handleKeyPress} />
        </div>
      </div>
    )
  }
}

export default CreateRoom
