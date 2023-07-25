import { useEffect, useState } from "react"
import ListNumber from "./components/ListNumber"
import './static/style.css'

const getRandomNumber = () =>{
  return Math.floor(Math.random() * 40)
}

export default function App(){
  const [numberList, setNumberList] = useState(Array.from({length: 10}, getRandomNumber))

  useEffect(()=>{
    const intervalFunction = ()=>{
      const newList = [...numberList]
      setNumberList(newList.map(el=> el === null ? null  : getRandomNumber()))
    }

    const intervalId = setInterval(intervalFunction,3000)

    return (()=>clearInterval(intervalId))
  }, [numberList])

  const handlerClick = (index) =>{
    const newList = [...numberList]
    newList[index] = null

    setNumberList(newList)
  }

  return (
    <main>
      <ul className="list-container">
        {
          numberList.map((el, index) => {
            return <ListNumber number={el} index={index} onClick={handlerClick} numberList={numberList} />
          })
        }
      </ul>
    </main>
  )
}