import { useState } from 'react'
import { TURNS } from '../constants'
import { Square } from './Square'

export default function Board(){
  const [turn, setTurn] = useState(TURNS.X)
  const [board, setBoard] = useState(Array(9).fill(null))
  
  function updateBoard(index){
    if(board[index]) return;

    setTurn(turn == TURNS.X? TURNS.Y : TURNS.X)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  }

  const restartBoard = ()=>{
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
  }

  return(
    <div className='game-container'>      
        <h1>TIC TAC TOE</h1>
        <div className="game-grid" >
          {
            board.map((el, i)=>{
              return <Square key={i} index={i} updateBoard={updateBoard}>{el}</Square>
            })
          }
        </div>
        <h2>Turn of </h2>
        <div className="turns">
            <span className={turn == TURNS.X ? 'selected' : ''}>☀️</span>
            <span className={turn == TURNS.Y ? 'selected' : ''}>🌑</span>
        </div>
        <button onClick={restartBoard}>
          Restart
        </button>
    </div>
  )
}