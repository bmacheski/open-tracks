import React, { Component } from 'react'
import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'
import { resetChannel } from '../actions/playlist'

class CreateRoomError extends Component {
  handleClose() {
    const { dispatch } = this.props

    dispatch(resetChannel())
  }

  render() {
    const { error } = this.props
    const action = [
      <FlatButton
        label="Confirm"
        secondary={true}
        onTouchTap={this.handleClose.bind(this)} />
    ]

    return (
      <div>
        <Dialog
          title="Create channel error"
          actions={action}
          modal={false}
          open={true}>
          {error}
        </Dialog>
      </div>
    )
  }
}

export default CreateRoomError
