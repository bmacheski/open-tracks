import React, { Component } from 'react'
import { createSong } from '../actions/playlist'
import Tabs from './Tabs'
import SearchInput from './SearchInput'

class Home extends Component {
  handleClick(song) {
    const { dispatch } = this.props
    let title = song.title
    let streamUrl = song.stream_url
    dispatch(createSong(title, streamUrl))
  }

  renderSearchResults() {
    const { songs, query } = this.props
    return songs[query].items.map((song, i) => {
      return (
        <li key={i}>
          {song.title}
          <i
            onClick={this.handleClick.bind(this, song)}
            className="material-icons add-button">add</i>
        </li>
      )
    })
  }

  render() {
    const { songs, query, dispatch } = this.props
    if (query) {
      return (
        <div>
          <Tabs />
          <SearchInput dispatch={dispatch} />
          <ul className="search-results">{this.renderSearchResults()}</ul>
        </div>
      )
    }
    return (
      <div>
        <Tabs />
        <SearchInput dispatch={dispatch} />
      </div>
    )
  }
}

export default Home
