import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CreateRoom from '../components/CreateRoom'

class LandingContainer extends Component {
  render() {
    return <CreateRoom {...this.props} />
  }
}

function mapStateToProps(state) {
  const { saveChannelFailure, error } = state.playlist

  return {
    saveChannelFailure,
    error
  }
}

export default connect(
  mapStateToProps
)(LandingContainer)
