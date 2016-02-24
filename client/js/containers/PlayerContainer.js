import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Player from '../components/Player'

class PlayerContainer extends Component {
  render() {
    const { children } = this.props
    return <Player />
  }
}

export default connect()(PlayerContainer)
