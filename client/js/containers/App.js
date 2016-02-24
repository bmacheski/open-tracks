import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import NavContainer from './NavContainer'
import HomeContainer from './HomeContainer'
import PlayerContainer from './PlayerContainer'
import 'bower/Materialize/dist/css/materialize.min.css'
import '../styles.css'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <NavContainer />
        <HomeContainer />
        {children}
      </div>
    )
  }
}

export default connect()(App)
