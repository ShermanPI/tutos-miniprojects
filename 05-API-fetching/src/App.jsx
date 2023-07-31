import '../style.css'
import { useImageUrl } from './hooks/useImageUrl'
import { useFact } from './hooks/useFact'

export default function App () {
  const { fact, renderNewfact } = useFact()
  const { catImageUrl } = useImageUrl({ fact })

  const handleClick = () => {
    renderNewfact()
  }

  return (
    <main>
      <h1>Random Cats</h1>
      <button onClick={handleClick}>New Fact</button>
      {fact && <p>{fact}</p>}
      {catImageUrl && <img src={catImageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}
    </main>
  )
}
