import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { client_id } from '../../../secrets'
import PlayerControl from './PlayerControl'

class Player extends Component {
  render() {
    const { hasJoined } = this.props
    const song = this.props.playlistSongs.items[0]
    if (!hasJoined) {
      return (
        <div className="player">
          <SoundPlayerContainer
            streamUrl={song.streamUrl}
            clientId={client_id}>
            <PlayerControl
            song={song}
            hasJoined={hasJoined} />
          </SoundPlayerContainer>
        </div>
      )
    } else {
      return (
        <div className="player">
          <SoundPlayerContainer
            clientId={client_id}>
            <PlayerControl
              song={song}
              hasJoined={hasJoined} />
          </SoundPlayerContainer>
        </div>
      )
    }
  }
}

export default Player
