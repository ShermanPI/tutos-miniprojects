import { useState } from 'react'
import { POSSIBLEWINS, TURNS } from '../constants'
import { Square } from './Square'
import WinnerModal from './Winner-modal'
import confetti from 'canvas-confetti'

export default function Board(){
  const [turn, setTurn] = useState(TURNS.X)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  
  function checkWinner(newBoard){
    for(const possibleWin of POSSIBLEWINS){
      const [a, b, c] = possibleWin
      if(newBoard[a] && newBoard[a] == newBoard[b] && newBoard[a] == newBoard[c]){
        return newBoard[a]
      }
    }

    return null;
  }

  function checkDraw(newBoard){
    return newBoard.every((square) => square !== null)
  }
  
  function updateBoard(index){
    if(board[index]) return;

    setTurn(turn == TURNS.X? TURNS.Y : TURNS.X)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkDraw(newBoard)){
      setWinner(false)
    }
  }

  const restartBoard = ()=>{
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
  }
  return(
    <div className='game-container'>
        { <WinnerModal restartBoard={restartBoard} winner = {winner} />}
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
            <span className={turn == TURNS.X ? 'selected' : ''}>{TURNS.X}</span>
            <span className={turn == TURNS.Y ? 'selected' : ''}>{TURNS.Y}</span>
        </div>
        <button onClick={restartBoard}>
          Restart
        </button>
    </div>
  )
}