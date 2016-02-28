import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Nav from '../components/Nav'
import HomeContainer from './HomeContainer'
import PlayerContainer from './PlayerContainer'

import 'bower/Materialize/dist/css/materialize.min.css'
import '../styles.css'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Nav />
        {children}
        <PlayerContainer />
      </div>
    )
  }
}

export default connect()(App)
