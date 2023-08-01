import { useState, useEffect } from 'react'

const dummyMusic = [
  { id: 'M-1111', name: 'Progreso', artists: ['Eladio Carrion'], url:`../../static/music/Progreso.mp3`, musicImg: undefined },
  { id: 'M-2222', name: 'Coco Chanel', artists: ['Eladio Carrion', 'Bad Bunny'], url:`../../static/music/Coco Chanel.mp3`, musicImg: undefined },
  { id: 'M-3333', name: '3 Am', artists: ['Eladio Carrion'], url:`../../static/music/3 Am.mp3`, musicImg: undefined },
  { id: 'M-4444', name: 'Kemba Walker', artists: ['Eladio Carrion', 'Bad Bunny', 'Shermanius'], url:`../../static/music/Kemba Walker.mp3`, musicImg: undefined }
]

const maxId = (dummyMusic.length - 1)

export const usePlayer = ({ initialMusicId }) => {
  const [musicId, setMusicId] = useState(initialMusicId)
  const [isPlaying, setIsPlaying ] = useState(false)

  const music = dummyMusic[musicId]

  useEffect(()=>{
    const audio = new Audio(music.url)

    if(!isPlaying){
      audio.play()
    }else{
      audio.pause()
    }
    
  }, [isPlaying])

  const playNextSong = () => {
    if(musicId + 1 <= maxId){
      setMusicId(musicId + 1)
    }else{
      setMusicId(0)
    }

  }

  const playPreviousSong = () => {
    if(musicId - 1 < 0){
      setMusicId(maxId)
    }else{
      setMusicId(musicId - 1)
    }
  }

  const playSongHandler = ()=>{
    if(!isPlaying){
      setIsPlaying(true)
    }else{
      setIsPlaying(false)
    }
  }

  return {
    music,
    isPlaying,
    playNextSong,
    playPreviousSong,
    playSongHandler
  }
}
