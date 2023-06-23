import { useState } from 'react'

function checkWinner(){
    const possibleWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const squares = document.querySelectorAll('.square')
    console.log(squares[0].innerHTML)
    for(let i = 0; i < possibleWins.length; i++){

        const [a, b, c] = possibleWins[i];
        if( (squares[a].innerHTML === squares[b].innerHTML && squares[b].innerHTML === squares[c].innerHTML) && squares[a].innerHTML !== '' ){
            alert(`${squares[a].innerHTML} wins!`)       
        }
    }
}

function Square({value}){
    const [isPlayed, setPlayed] = useState(false),
        text = !isPlayed ? '' : localStorage.getItem('turn')
    
    const handleClick = ()=>{
        checkWinner()
        if(!isPlayed){
            if(localStorage.getItem('turn') == '☀️'){
                document.querySelectorAll('.turns span')[0].classList.toggle('selected')
                document.querySelectorAll('.turns span')[1].classList.toggle('selected')
                localStorage.setItem('turn', '🌑')
            }else{
                document.querySelectorAll('.turns span')[0].classList.toggle('selected')
                document.querySelectorAll('.turns span')[1].classList.toggle('selected')
                localStorage.setItem('turn', '☀️')
            }
            
            console.log("somebody played")
            setPlayed(!isPlayed)
        }
    }
    
    return(
        <div className={`square glow-${text}`} onClick={handleClick} data-value={value}>
            {text}
        </div>
    )
}

export default function Board(){
  let squares = []
  localStorage.setItem('turn', '🌑')

  for(let i = 0; i <= 8; i++){
    squares.push(<Square value={i} key={`square-${i}`}/>)
  }

    console.log(document.querySelectorAll('.square').innerHTML)

  return(
    <div className='game-container'>      
      <h1>TIC TAC TOE</h1>
      <div className="game-grid" >
          {squares}
      </div>
      <h2>Turn of </h2>
      <div className="turns">
        <span className='selected'>☀️</span>
        <span>🌑</span>
      </div>
    </div>
  )
}