import { useEffect, useState } from 'react'
import '../style.css'
import { getRandomFact } from '../services/fact'
import { useImageUrl } from '../hooks/useImageUrl'

export default function App () {
  const [fact, setFact] = useState()
  const { catImageUrl } = useImageUrl({ fact })

  useEffect(() => {
    getRandomFact().then(fact => setFact(fact))
  }, [])

  const handleClick = async () => {
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
