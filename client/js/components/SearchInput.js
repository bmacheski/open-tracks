import React, { Component } from 'react'
import { fetchSongs } from '../actions/songs'

class SearchInput extends Component {
  handleKeyUp(e) {
    e.preventDefault()
    const { dispatch } = this.props
    let query = this.refs.searchInput.value
    if (e.keyCode === 13 && query) {
      dispatch(fetchSongs(query))
    }
  }

  render() {
    return (
      <div className="input-field">
        <input
          ref="searchInput"
          type="text"
          id="search"
          onKeyUp={this.handleKeyUp.bind(this)} />
        <label>
          <i className="material-icons">search</i>
        </label>
      </div>
    )
  }
}
export default SearchInput
