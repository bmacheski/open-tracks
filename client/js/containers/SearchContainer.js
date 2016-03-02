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
  const query = songs.query ? songs.query : ''
  const { open } = state.navigator
  return {
    songs,
    query,
    open
  }
}

export default connect(mapStateToProps)(SearchContainer)
