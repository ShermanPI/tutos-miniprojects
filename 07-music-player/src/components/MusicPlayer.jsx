/* eslint-disable react/jsx-closing-tag-location */
import { usePlayer } from '../hooks/usePlayer'
import { ControlBtn } from './ControlButton'

export const MusicPlayer = () => {
  const { music, isPlaying, playPreviousSong, playNextSong, playSongHandler } = usePlayer({ initialMusicId: 0 })
  const artists = music.artists

  return (
    <section className='music-player'>
      <h1>Music Player</h1>
      {music
        ? <section>
          <p className='artist-names'>{artists.length > 1 ? artists.map((el, i) => i === (artists.length - 1) ? el : `${el}, `) : artists}</p>
          <p className='music-name'>{music.name}</p>
        </section>
        : null}

      <input type='range' min='0' max='100' step='5' defaultValue='20' />

      <section className='control-panel'>
        <ControlBtn buttonContent='⏮️' handleClick={playPreviousSong} />
        <ControlBtn buttonContent={isPlaying ? '⏸️' : '▶️'} handleClick={playSongHandler} />
        <ControlBtn buttonContent='⏭️' handleClick={playNextSong} />
        <ControlBtn buttonContent='🔁' />
      </section>
    </section>
  )
}
