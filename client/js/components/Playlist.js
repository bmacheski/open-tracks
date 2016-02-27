import React, { Component } from 'react'

class Playlist extends Component {
  renderSearchResults() {
    const { query, songs } = this.props
    return songs[query].items.map((song, i) => {
      return <li key={i}>{song.title}</li>
    })
  }

  render() {
    return (
      <div>
        <h1>Playlist</h1>
      </div>
    )
  }
}
export default Playlist
