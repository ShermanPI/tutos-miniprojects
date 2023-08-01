// import { useState } from 'react'

import { usePlayer } from '../hooks/usePLayer'
import { ControlBtn } from './ControlButton'

const dummyMusic = [
  { id: 'M-1111', name: 'Progreso', artists: ['Eladio Carrion'], url: undefined, musicImg: undefined },
  { id: 'M-2222', name: 'Coco Chanel', artists: ['Eladio Carrion', 'Bad Bunny'], url: undefined, musicImg: undefined },
  { id: 'M-3333', name: '3 Am', artists: ['Eladio Carrion'], url: undefined, musicImg: undefined },
  { id: 'M-4444', name: 'Kemba Walker', artists: ['Eladio Carrion', 'Bad Bunny'], url: undefined, musicImg: undefined }
]

export const MusicPlayer = () => {
  const { musicId, playNextSong, playPreviousSong } = usePlayer({ initialMusicId: 0 })
  const actualMusic = dummyMusic[musicId]
  const artists = actualMusic.artists

  return (
    <section className='music-player'>
      <h1>Music Player</h1>

      {actualMusic ? <p className='music-name'>{dummyMusic[musicId].name}</p> : null}
      {actualMusic
        ? <p className='artist-names'>{artists.length > 1 ? artists.map((el, i) => i === (artists.length - 1) ? el : `${el}, `) : artists}</p>
        : null}
      <input type='range' min='0' max='100' step='5' defaultValue='20' />

      <section className='control-panel'>
        <ControlBtn buttonContent='⏮️' handleClick={playPreviousSong} />
        <ControlBtn buttonContent='▶️' />
        <ControlBtn buttonContent='⏭️' handleClick={playNextSong} />
        <ControlBtn buttonContent='🔁' />
      </section>
    </section>
  )
}
