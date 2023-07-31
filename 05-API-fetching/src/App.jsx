import '../style.css'
import { useImageUrl } from '../hooks/useImageUrl'
import { useFact } from '../hooks/useFact'

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
      <h2>{fact ?? 'Loading...'}</h2>
      <img src={catImageUrl ?? 'static/img/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'} alt={`image of cat extracted from ${fact}`} />
    </main>
  )
}
