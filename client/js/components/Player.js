import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { client_id } from '../../../secrets'
import PlayerControl from './PlayerControl'

class Player extends Component {
  render() {
    const song = this.props.playlistSongs.items[0]
    return (
      <div className="player">
        <SoundPlayerContainer
          streamUrl={song.streamUrl}
          clientId={client_id}>
          <PlayerControl song={song} />
        </SoundPlayerContainer>
      </div>
    )
  }
}

export default Player
