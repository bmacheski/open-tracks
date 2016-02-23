import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Nav from '../components/Nav'

class NavContainer extends Component {
  render() {
    const { children } = this.props

    return <Nav {...this.props} />
  }
}

export default connect()(NavContainer)
