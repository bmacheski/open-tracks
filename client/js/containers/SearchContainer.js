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
  const { open, mobile } = state.environment
  const query = songs.query ? songs.query : ''

  return {
    songs,
    open,
    query,
    mobile
  }
}

export default connect(
  mapStateToProps
)(SearchContainer)
