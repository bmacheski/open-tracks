import React, { Component } from 'react'
import { Link } from 'react-router'

class Tabs extends Component {
  render() {
    return (
      <ul className="tabs">
        <li className="tab col m3 s12">
           <Link to={`/home/${this.props.channel}`}>
            <p>Search</p>
          </Link>
        </li>
        <li className="tab col m3 s12">
          <Link to={`/home/${this.props.channel}/playlist`}>
            <p>Playlist</p>
          </Link>
        </li>
      </ul>
    )
  }
}

export default Tabs
