import React, { Component } from 'react'
import fetchSongs from '../actions/songs'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    e.preventDefault()
    const { dispatch } = this.props
    let query = this.refs.searchInput.value
    if (e.keyCode === 13 && query) {
      dispatch(fetchSongs(query))
    }
  }

  renderSearchResults() {
    const { songs, query } = this.props
    return songs[query].items.map((song, i) => {
      return <li key={i}>{song.title}</li>
    })
  }
  render() {
    const { songs, query } = this.props
    let input = (
      <div className="input-field">
        <input
          ref="searchInput"
          type="text"
          id="search"
          onKeyUp={this.handleKeyUp} />
        <label>
          <i className="material-icons">search</i>
        </label>
      </div>
    )
    if (query) {
      let res = this.renderSearchResults()
      return (
        <div>
          {input}
          <ul className="search-results">{res}</ul>
        </div>
      )
    } else {
      return (
        <div>
          {input}
        </div>
      )
    }
  }
}

export default Home
