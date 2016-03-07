import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { client_id } from '../../../secrets'
import PlayerControl from './PlayerControl'
import { socket } from '../io'

class Player extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    socket.on('client update', t => {
      dispatch(receiveNewTime(t))
    })
  }

  render() {
    const { hasJoined, dispatch, time, songIndex } = this.props
    const song = this.props.playlistSongs.items[songIndex] ? this.props.playlistSongs.items[songIndex] : ''
    const duration = song.duration ? song.duration : ''

    if (!hasJoined) {
      return (
        <div className="player">
          <SoundPlayerContainer
            ref="player"
            streamUrl={song.streamUrl}
            clientId={client_id}>
            <PlayerControl
              song={song}
              time={time}
              duration={duration}
              dispatch={dispatch}
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
              time={time}
              duration={duration}
              song={song}
              hasJoined={hasJoined} />
          </SoundPlayerContainer>
        </div>
      )
    }
  }
}

export default Player
