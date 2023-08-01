import { useState } from 'react'

export const usePlayer = ({ initialMusicId }) => {
  const [musicId, setMusicId] = useState(initialMusicId)

  const playNextSong = () => {
    setMusicId(musicId + 1)
  }

  const playPreviousSong = () => {
    setMusicId(musicId - 1)
  }

  return {
    musicId,
    playNextSong,
    playPreviousSong
  }
}
