import { useEffect, useState } from 'react'
import '../style.css'

export default function App () {
  const [fact, setFact] = useState('Lorem Ipsum')
  const [catImageUrl, setCatImageUrl] = useState('static/img/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg')

  const imagesApi = 'https://cataas.com'
  const factsApi = 'https://catfact.ninja'

  useEffect(() => {
    fetch(`${factsApi}/fact`)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    fetch(`${imagesApi}/cat/says/${fact.split(' ')[0]}?json=true`)
      .then(res => res.json())
      .then(data => setCatImageUrl(`${imagesApi}${data.url}`))
  }, [fact])

  return (
    <main>
      <h1>Random Cats</h1>
      <h2>{fact}</h2>
      <img src={catImageUrl} alt='' />
    </main>
  )
}
