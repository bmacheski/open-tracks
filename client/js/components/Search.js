import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { createSong } from '../actions/playlist'
import LeftNav from 'material-ui/lib/left-nav';

class Search extends Component {
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
    const { query, dispatch, open } = this.props
    { return (query) ? (
        <LeftNav
          width={500}
          openRight={true}
          open={open}>
          <SearchInput dispatch={dispatch} />
          <ul className="search-results">{this.renderSearchResults()}</ul>
        </LeftNav>
      ) : (
        <LeftNav
        width={500}
        openRight={true}
        open={open}>
          <SearchInput dispatch={dispatch} />
        </LeftNav>
      )
    }
  }
}
export default Search
