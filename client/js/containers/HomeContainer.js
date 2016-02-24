import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

class HomeContainer extends Component {
  render() {
    const { children } = this.props
    return <Home {...this.props} />
  }
}

function mapStateToProps(state) {
  const { songs } = state
  const query = state.query ? state.query : ''

  return {
    songs,
    query
  }
}

export default connect(mapStateToProps)(HomeContainer)
