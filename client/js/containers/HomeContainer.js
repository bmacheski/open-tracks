import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  render() {
    return (
      <h1> WELCOME HOME.</h1>
    )
  }
}

export default connect()(HomeContainer)
