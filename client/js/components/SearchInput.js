import React, { Component } from 'react'
import { fetchSongs } from '../actions/songs'
import TextField from 'material-ui/lib/text-field'

class SearchInput extends Component {
  handleKeyUp(e) {
    const { dispatch } = this.props
    const query = this.refs.searchInput.refs.input.value

    if (e.keyCode === 13 && query) {
      dispatch(fetchSongs(query))
    }
  }

  render() {
    return (
      <div>
        <label>
          <i className="material-icons search-icon">search</i>
        </label>
        <TextField
          ref="searchInput"
          type="text"
          id="search"
          className="search-field"
          onKeyDown={this.handleKeyUp.bind(this)}>
        </TextField>
      </div>
    )
  }
}

export default SearchInput
