export default function ListNumber({number, index, onClick}){
  const handlerClick = ()=>{
    onClick(index)
  }

  return(
      <li className="list-item" key={index} onClick={handlerClick} style={{backgroundColor: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`}}>
        {number ?? ''}
      </li>
  )
}
