import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Search from '../components/Search'

class SearchContainer extends Component {
  render() {
    return <Search {...this.props} />
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

export default connect(mapStateToProps)(SearchContainer)
