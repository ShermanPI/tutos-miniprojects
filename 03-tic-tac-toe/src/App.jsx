import Square from './Square'
import './App.css'

export default function App(){
  let squares = []

  for(let i = 0; i <= 8; i++){
    console.log("hey")
    squares.push(<Square  key={`square-${i}`}/>)
  }
  
  //text="☀️🌑"
  console.log(squares)

  return(
    <div className='game-container'>      
      <h1>TIC TAC TOE</h1>
      <div className="game-grid">
          {squares}
      </div>
    </div>
  )
}