import { useState } from 'react'
import './App.css'

export default function Square(){
    const [isPlayed, setPlayed] = useState(false),
        text = !isPlayed ? '' : '☀️'

    const handleClick = ()=>{
        if(!isPlayed){
            console.log("somebody played")
            setPlayed(!isPlayed)
        }
    }

    return(
        <div className="square" onClick={handleClick}>
            {text}
        </div>
    )
}