import { useEffect, useState } from 'react'
const IMAGES_API = 'https://cataas.com'

export function useImageUrl ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`${IMAGES_API}/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => setCatImageUrl(`${IMAGES_API}${data.url}`))
  }, [fact])

  return { catImageUrl }
}
