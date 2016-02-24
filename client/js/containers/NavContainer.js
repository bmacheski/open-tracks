import { connect } from 'react-redux'
import React, { Component } from 'react'
import Nav from '../components/Nav'

class NavContainer extends Component {
  render() {
    return <Nav />
  }
}

export default connect()(NavContainer)
