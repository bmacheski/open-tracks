import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Nav from '../components/Nav'
import HomeContainer from './HomeContainer'
import PlayerContainer from './PlayerContainer'

import '../styles.css'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default connect()(App)
