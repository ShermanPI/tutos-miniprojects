import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export function useFact () {
  const [fact, setFact] = useState()

  const renderNewfact = () => getRandomFact().then(fact => setFact(fact))

  useEffect(() => {
    renderNewfact()
  }, [])

  return { fact, renderNewfact }
}
