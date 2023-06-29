export default function WinnerModal({winner, restartBoard}){
    const clickHandler = ()=>{
        restartBoard()
    }
    
    return(
        <div className="modal">
            <h2>The winner is: </h2>
            <h1>{winner}</h1>
            <button onClick={clickHandler}>
                Restart
            </button>
        </div>
    )
}