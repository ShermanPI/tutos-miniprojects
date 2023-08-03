import { useState, useRef, useEffect } from 'react'

const dummyMusic = [
  { id: 'M-1111', albumImg: '../static/img/monarca.jpg', name: 'Progreso', artists: ['Eladio Carrion'], url: '../../static/music/Progreso.mp3', musicImg: undefined },
  { id: 'M-2222', albumImg: '../static/img/3MEN2 KBRN.png', name: 'Coco Chanel', artists: ['Eladio Carrion', 'Bad Bunny'], url: '../../static/music/Coco Chanel.mp3', musicImg: undefined },
  { id: 'M-3333', albumImg: '../static/img/Sauce Boyz.jpg', name: '3 Am', artists: ['Eladio Carrion'], url: '../../static/music/3 Am.mp3', musicImg: undefined },
  { id: 'M-4444', albumImg: '../static/img/Sauce Boyz.jpg', name: 'Kemba Walker', artists: ['Eladio Carrion', 'Bad Bunny', 'Shermanius'], url: '../../static/music/Kemba Walker.mp3', musicImg: undefined }
]

const maxId = (dummyMusic.length - 1)

export const usePlayer = ({ initialMusicId }) => {
  const [musicId, setMusicId] = useState(initialMusicId)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReplaying, setReplay] = useState(false)
  const audioRef = useRef(new window.Audio(dummyMusic[musicId].url))

  const music = dummyMusic[musicId]

  const playNextSong = () => {
    const newId = musicId + 1
    if (newId <= maxId) {
      audioRef.current.src = dummyMusic[newId].url
      audioRef.current.play()
      setIsPlaying(true)
      setMusicId(newId)
    } else {
      audioRef.current.src = dummyMusic[0].url
      audioRef.current.play()
      setIsPlaying(true)
      setMusicId(0)
    }
  }

  const playPreviousSong = () => {
    const newId = musicId - 1
    if (newId < 0) {
      audioRef.current.src = dummyMusic[maxId].url
      audioRef.current.play()
      setIsPlaying(true)
      setMusicId(maxId)
    } else {
      audioRef.current.src = dummyMusic[newId].url
      audioRef.current.play()
      setIsPlaying(true)
      setMusicId(newId)
    }
  }

  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const replayHandler = () =>{
    setReplay(!isReplaying)
  }

  useEffect(()=>{
    const autoReplay = () => {
      if(isReplaying){
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }else{
        playNextSong()
      }
    }

    audioRef.current.addEventListener('ended', autoReplay)

    return ()=> {
      audioRef.current.removeEventListener('ended', autoReplay)
    }
  }, [isReplaying])

  return {
    music,
    isPlaying,
    isReplaying,
    playNextSong,
    playPreviousSong,
    playSongHandler,
    replayHandler
  }
}
