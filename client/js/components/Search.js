import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { createSong } from '../actions/playlist'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

class Search extends Component {
  handleClick(song) {
    const { dispatch } = this.props
    const title = song.title
    const streamUrl = song.stream_url

    dispatch(createSong(title, streamUrl))
  }

  renderSearchResults() {
    const { songs, query } = this.props

    return (
      <div>
        <List>
          { songs[query].items.map((song, i) => {
            return (
              <ListItem
                key={i}
                primaryText={song.title}
                onClick={this.handleClick.bind(this, song)}>
              </ListItem>
            )
          }) }
        </List>
      </div>
    )
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
