import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CreateRoom from '../components/CreateRoom'

class LandingContainer extends Component {
  render() {
    const { children } = this.props
    return <CreateRoom {...this.props} />
  }
}

export default connect()(LandingContainer)
