import React, { Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { client_id } from '../../../secrets'
import PlayerControl from './PlayerControl'
import { socket } from '../io'
import { updateCurrentPlaylistSong } from '../actions/player'

class Player extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    socket.on('client update', t => {
      dispatch(receiveNewTime(t))
    })

    socket.on('playlist index increment', t => {
      dispatch(updateCurrentPlaylistSong(t))
    })
  }

  render() {
    const { hasJoined, dispatch, time, songIndex, playlistSongs, channel, isPlaying } = this.props
    const song = playlistSongs.items[songIndex] ? playlistSongs.items[songIndex] : ''
    const duration = song.duration ? song.duration : ''

    { return (!hasJoined) ? (
        <div className="player">
          <SoundPlayerContainer
            ref="player"
            streamUrl={song.streamUrl}
            clientId={client_id}>
            <PlayerControl
              song={song}
              channel={channel}
              time={time}
              duration={duration}
              dispatch={dispatch}
              hasJoined={hasJoined} />
          </SoundPlayerContainer>
        </div>
      ) : (
        <div className="player">
          <SoundPlayerContainer
            clientId={client_id}>
            <PlayerControl
              time={time}
              channel={channel}
              duration={duration}
              dispatch={dispatch}
              isPlaying={isPlaying}
              song={song}
              hasJoined={hasJoined} />
          </SoundPlayerContainer>
        </div>
      )
    }
  }
}

export default Player
