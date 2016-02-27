import React, { Component } from 'react'

class Tabs extends Component {
  render() {
    return (
      <ul className="tabs">
        <li className="tab col m3 s12">
          <a href="search">Search</a>
        </li>
        <li className="tab col m3 s12">
          <a href="playlist">Playlist</a>
        </li>
      </ul>
    )
  }
}
export default Tabs
