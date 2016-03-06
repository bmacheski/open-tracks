import React, { Component } from 'react'
import SearchInput from './SearchInput'
import { createSong } from '../actions/playlist'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'
import { isMobile } from '../actions/environment'

class Search extends Component {
  componentWillMount() {
    const { dispatch } = this.props

    dispatch(isMobile())
  }

  handleClick(song) {
    const { dispatch } = this.props
    const title = song.title
    const streamUrl = song.stream_url
    const artworkUrl = song.artwork_url
    const duration = song.duration
    dispatch(createSong(title, streamUrl, artworkUrl, duration))
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
                leftAvatar={<Avatar src={song.artwork_url} />}
                onClick={this.handleClick.bind(this, song)}>
              </ListItem>
            )
          }) }
        </List>
      </div>
    )
  }

  render() {
    const { query, dispatch, open, mobile } = this.props
    const width = (mobile) ? 325 : 500

    { return (query) ? (
        <LeftNav
          width={width}
          openRight={true}
          open={open}>
          <SearchInput dispatch={dispatch} />
          <ul className="search-results">{this.renderSearchResults()}</ul>
        </LeftNav>
      ) : (
        <LeftNav
          width={width}
          openRight={true}
          open={open}>
          <SearchInput dispatch={dispatch} />
        </LeftNav>
      )
    }
  }
}

export default Search
