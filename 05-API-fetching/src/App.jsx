import { useEffect, useState } from 'react'
import '../style.css'

export default function App () {
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  const IMAGES_API = 'https://cataas.com'
  const factsApi = 'https://catfact.ninja'

  useEffect(() => {
    fetch(`${factsApi}/fact`)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if(!fact) return
    
    const threeFirstWords = fact.split(' ').slice(0,3).join(' ')
    
    fetch(`${IMAGES_API}/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => setCatImageUrl(`${IMAGES_API}${data.url}`))

  }, [fact])

  return (
    <main>
      <h1>Random Cats</h1>
      <h2>{fact ?? 'Loading...'}</h2>
      <img src={catImageUrl ?? 'static/img/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'} alt={`image of cat extracted from ${fact}`} />
    </main>
  )
}
