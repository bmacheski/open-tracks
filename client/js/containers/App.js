import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import NavContainer from './NavContainer'
import HomeContainer from './HomeContainer'
import 'bower/Materialize/dist/css/materialize.min.css'

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
