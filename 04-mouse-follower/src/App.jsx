import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPostition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect')

    const handleMove = (e) => {
      setPostition({ x: e.clientX, y: e.clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('cleanUp')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div style={
        {
          position: 'absolute',
          backgroundColor: '#F59E0B',
          borderRadius: '50%',
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }
      }
      />
      <h3>Project 04 - Mouse Follower</h3>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Deactivate' : 'Activate'}</button>
    </main>
  )
}

export default App
