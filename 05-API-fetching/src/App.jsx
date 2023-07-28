import { useEffect, useState } from 'react'
import '../style.css'
import { getRandomFact } from '../services/fact'

export default function App () {
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  const IMAGES_API = 'https://cataas.com'

  useEffect(() => {
    getRandomFact().then(fact => setFact(fact))
  },[])

  useEffect(() => {
    if(!fact) return
    
    const threeFirstWords = fact.split(' ').slice(0,3).join(' ')
    
    fetch(`${IMAGES_API}/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => setCatImageUrl(`${IMAGES_API}${data.url}`))

  }, [fact])

  const handleClick = async ()=>{
    const fact = await getRandomFact()
    setFact(fact)

  }

  return (
    <main>
      <h1>Random Cats</h1>
      <button onClick={handleClick}>New Fact</button>
      <h2>{fact ?? 'Loading...'}</h2>
      <img src={catImageUrl ?? 'static/img/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'} alt={`image of cat extracted from ${fact}`} />
    </main>
  )
}
