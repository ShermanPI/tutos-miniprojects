import { useState } from 'react'

export function Category ({ children, isFirst }) {
  const selection = !!isFirst

  const [isSelected, setSelection] = useState(selection)

  const categoryClassName = isSelected
    ? 'yt-categoryItem selected-category'
    : 'yt-categoryItem'

  const handleClick = () => {
    setSelection(!isSelected)
  }
  return (
    <div className={categoryClassName} onClick={handleClick}>{children}</div>
  )
}
