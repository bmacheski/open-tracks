import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Tabs from '../components/Tabs'

class HomeContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Tabs {...this.props} />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { channel } = state.playlist

  return {
    channel
  }
}

export default connect(mapStateToProps)(HomeContainer)
