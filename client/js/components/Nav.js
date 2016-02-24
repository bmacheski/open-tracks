import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav></nav>
        <ul className="tabs">
          <li className="tab col m3 s12"><a href="search">Search</a></li>
          <li className="tab col m3 s12"><a href="playlist">Playlist</a></li>
        </ul>
      </div>
    )
  }
}
export default Nav
