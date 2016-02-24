import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'

class Player extends Component {
  render() {
    let player = (
        <div>
          <h2>Title goes here.</h2>
        </div>
    )
    return (
      <SoundPlayerContainer>{player}</SoundPlayerContainer>
    )
  }
}

export default Player
